// Confirm JS is connected
console.log("JavaScript file is connected!");

// Navbar color change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "black";
    navbar.style.color = "gold";
  } else {
    navbar.style.backgroundColor = "";
    navbar.style.color = "";
  }
});

// Smooth scrolling for navbar links
document.querySelectorAll("#navbar a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Hero image hover effect (safe)
const heroImage = document.getElementById("trump-image");

if (heroImage) {
  heroImage.addEventListener("mouseover", () => {
    heroImage.style.transform = "scale(1.1)";
    heroImage.style.transition = "transform 0.3s ease";
  });

  heroImage.addEventListener("mouseout", () => {
    heroImage.style.transform = "scale(1)";
  });
}

// Button animations
document.querySelectorAll("button").forEach(button => {

  button.addEventListener("click", () => {
    button.style.transform = "scale(0.95)";
    button.style.boxShadow = "0 0 15px gold";
    button.style.transition = "all 0.2s ease";

    setTimeout(() => {
      button.style.transform = "scale(1)";
      button.style.boxShadow = "";
    }, 200);
  });

  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "gold";
    button.style.color = "black";
    button.style.boxShadow = "0 0 10px gold";
  });

  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "";
    button.style.color = "";
    button.style.boxShadow = "";
  });
});

// Fade-in sections
const sections = document.querySelectorAll("section");

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(20px)";
  section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
});

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

// Toggle info panels (accordion style)
function toggleInfo(id) {
  const panels = document.querySelectorAll(".hidden");
  const target = document.getElementById(id);

  if (!target) return;

  panels.forEach(panel => {
    if (panel !== target) {
      panel.style.display = "none";
    }
  });

  if (target.style.display === "block") {
    target.style.display = "none";
  } else {
    target.style.display = "block";
  }
}