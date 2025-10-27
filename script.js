document.addEventListener("DOMContentLoaded", () => {
    const snowContainer = document.createElement("div");
    snowContainer.classList.add("snow-container");
    document.body.appendChild(snowContainer);
  
    for (let i = 0; i < 80; i++) {
      const snow = document.createElement("div");
      snow.classList.add("snow");
      snow.style.left = Math.random() * 100 + "vw";
      snow.style.animationDuration = Math.random() * 5 + 5 + "s";
      snow.style.opacity = Math.random();
      snowContainer.appendChild(snow);
    }
  });
  