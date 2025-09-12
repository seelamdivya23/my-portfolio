// Portfolio Scripts
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  const typingElement = document.getElementById("typing-text");
  const readMoreBtn = document.getElementById("readMoreBtn");
  const moreText = document.querySelector(".about-more");

  // ===== Dark Mode Toggle with Persistence =====
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    toggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // ===== Typing Animation =====
  const roles = ["Python Developer", "ML Engineer", "Data Scientist", "Data Analyst"];
  let roleIndex = 0;
  let charIndex = 0;
  let typingText = "";

  function type() {
    if (charIndex < roles[roleIndex].length) {
      typingText += roles[roleIndex].charAt(charIndex);
      typingElement.textContent = typingText;
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingText = typingText.slice(0, -1);
      typingElement.textContent = typingText;
      charIndex--;
      setTimeout(erase, 50);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 300);
    }
  }

  setTimeout(type, 1000);

  // ===== Read More Toggle =====
  if (readMoreBtn) {
    readMoreBtn.addEventListener("click", () => {
      moreText.classList.toggle("show");
      readMoreBtn.textContent = moreText.classList.contains("show")
        ? "Read Less"
        : "Read More";
    });
  }
});
