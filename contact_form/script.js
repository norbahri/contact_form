const form = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // 🔗 Replace with your actual n8n webhook URL
  const n8nWebhookURL = "https://together-living-shad.ngrok-free.app";

  try {
    const res = await fetch(n8nWebhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      responseMessage.textContent = "✅ Message sent successfully!";
      responseMessage.style.color = "green";
      form.reset();
    } else {
      responseMessage.textContent = "❌ Failed to send data.";
      responseMessage.style.color = "red";
    }
  } catch (error) {
    console.error(error);
    responseMessage.textContent = "⚠️ Network error.";
    responseMessage.style.color = "red";
  }
});

