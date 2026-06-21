let culturesData = [];

// Load cultures.json
fetch("cultures.json")
  .then(response => response.json())
  .then(data => { culturesData = data; })
  .catch(err => console.error("Error loading cultures.json:", err));

function sendMessage() {
  const input = document.getElementById("chatInput");
  const output = document.getElementById("chatOutput");

  const userMessage = input.value.trim();
  if (!userMessage) return;

  // Show user message
  const userBubble = document.createElement("div");
  userBubble.className = "user-bubble";
  userBubble.textContent = "You: " + userMessage;
  output.appendChild(userBubble);

  // Copilot response
  const aiBubble = document.createElement("div");
  aiBubble.className = "ai-bubble";

  getCultureResponse(userMessage).then(response => {
    aiBubble.textContent = "Copilot: " + response;
    output.appendChild(aiBubble);
    output.scrollTop = output.scrollHeight;
  });

  input.value = "";
}

async function getCultureResponse(message) {
  const msg = message.toLowerCase();

  // Try to find culture in JSON (partial match allowed)
  const found = culturesData.find(culture => {
    const cultureName = culture.name.toLowerCase();
    return msg.includes(cultureName) ||
           cultureName.split(" ").some(word => msg.includes(word));
  });

  if (found) {
    if (msg.includes("history") || msg.includes("story")) {
      return `${found.name} — History: ${found.story || "No history available."}`;
    } else if (msg.includes("food")) {
      return `${found.name} — Food: ${found.food || "No food info available."}`;
    } else if (msg.includes("etiquette") || msg.includes("tradition")) {
      return `${found.name} — Etiquette: ${found.etiquette || "No etiquette info available."}`;
    } else {
      return `${found.name} — ${found.story || "No story available."}
      Etiquette: ${found.etiquette || "Not specified."}
      Food: ${found.food || "Not specified."}`;
    }
  } else {
    // Extract likely culture keyword (first word after "about" or last word)
    let keyword = msg;
    if (msg.includes("about")) {
      keyword = msg.split("about").pop().trim();
    } else {
      keyword = msg.split(" ").pop().trim();
    }

    // Fallback: fetch from Wikipedia API
    try {
      const response = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(keyword)}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.extract) {
          return `📖 (From Wikipedia) ${data.extract}`;
        } else {
          return "I found some info, but couldn’t get details.";
        }
      } else {
        return `I couldn’t fetch info for "${keyword}". Try a different phrasing.`;
      }
    } catch (err) {
      console.error("Fallback fetch error:", err);
      return "I couldn’t fetch info online. Please check your internet connection.";
    }
  }
}
