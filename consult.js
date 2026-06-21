// Smooth scroll to doctors section
function scrollToDoctors() {
  const section = document.getElementById("doctors");
  if (section) section.scrollIntoView({ behavior: "smooth" });
}

// Open booking modal with doctor name
function openBooking(name) {
  const modal = document.getElementById("bookingModal");
  const doctorField = document.getElementById("doctorName");
  if (modal && doctorField) {
    modal.style.display = "flex";
    doctorField.value = name;
  }
}

// Close booking modal
function closeBooking() {
  const modal = document.getElementById("bookingModal");
  if (modal) modal.style.display = "none";
}

// Confirm booking and show success popup
function confirmBooking() {
  const doctor = document.getElementById("doctorName")?.value || "";
  const date = document.getElementById("appointmentDate")?.value || "";
  const time = document.getElementById("appointmentTime")?.value || "";

  // Hide modal
  closeBooking();

  // Show success popup
  const popup = document.getElementById("successPopup");
  const text = document.getElementById("successText");
  if (popup && text) {
    popup.style.display = "flex";
    text.innerHTML = `
      Doctor: ${doctor}<br>
      Date: ${date}<br>
      Time: ${time}<br><br>
      ✅ A confirmation has been generated successfully.
    `;
  }
}

// Close success popup
function closeSuccess() {
  const popup = document.getElementById("successPopup");
  if (popup) popup.style.display = "none";
}

// Toggle chatbox visibility
function toggleChat() {
  const box = document.getElementById("chatbox");
  if (box) {
    box.style.display = box.style.display === "block" ? "none" : "block";
  }
}

// Send message in chatbox
function sendMessage() {
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("chatMessages");

  if (!input || !messages || input.value.trim() === "") return;

  const text = input.value.toLowerCase();

  // Add user message
  messages.innerHTML += `<div>You: ${input.value}</div>`;

  // Default response
  let response = "Please consult one of our specialists.";

  // Keyword-based responses
  if (text.includes("knee")) {
    response = "Dr. Arjun Nair is recommended for knee pain.";
  } else if (text.includes("women")) {
    response = "Dr. Kavya Iyer specializes in women's wellness.";
  } else if (text.includes("herbal")) {
    response = "Dr. Meera Sharma is our herbal therapy expert.";
  }

  // Add bot response
  messages.innerHTML += `<div class='bot'>${response}</div>`;

  // Clear input
  input.value = "";
}
