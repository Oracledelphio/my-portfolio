document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Navbar background change on scroll
  const navbar = document.querySelector(".frosted-navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    } else {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    }
  });

  // Animate sections on scroll
  const sections = document.querySelectorAll(".section");
  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Card hover effect for blogs and certifications
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
      card.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
    });
  });

  // Technology icons animation
  const techIcons = document.querySelectorAll(".technology-item");
  techIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "translateY(-5px)";
    });

    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "translateY(0)";
    });
  });

  // Contact form submission
  const contactForm = document.querySelector("#contact form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    contactForm.reset();
  });
});
