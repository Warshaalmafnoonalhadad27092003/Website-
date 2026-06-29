document.addEventListener("DOMContentLoaded", function () {

  console.log("Website loaded successfully!");

  // Button click
  const btn = document.querySelector(".btn");

  if (btn) {
    btn.addEventListener("click", function () {
      alert("Thanks for contacting us! We will reply soon.");
    });
  }

  // Smooth scroll
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

});
