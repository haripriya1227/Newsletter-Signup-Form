const form = document.querySelector("form");
const emailInput = document.querySelector(".email-input");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (email === "") {
    alert("Please enter your email 📨");
  } else {
    alert("Thank you for subscribing! 🎉");
    form.reset();
  }
});