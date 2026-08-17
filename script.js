const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "</>" : "{ }";
});

// Subtle mouse movement for the programming-symbol background.
document.addEventListener("mousemove", (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 10;
  const y = (event.clientY / window.innerHeight - 0.5) * 10;
  document.querySelector(".code-bg").style.transform =
    `translate(${x}px, ${y}px)`;
});
