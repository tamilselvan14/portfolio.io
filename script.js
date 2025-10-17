// Simple contact form handler (no backend, just front-end validation)
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    status.textContent = "Please fill out all fields.";
    status.style.color = "red";
    return;
  }

  // You can replace this with an actual email service later
  status.textContent = "Thanks for your message, " + name + "!";
  status.style.color = "green";

  form.reset();
});
