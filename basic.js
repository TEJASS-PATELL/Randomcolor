    const start1 = document.querySelector("#start1");
    const start2 = document.querySelector("#start2");
    const stopBtn = document.querySelector("#stop");

    let color1 = "#053564";
    let color2 = "#001748";

    const randomColor = () => {
      const digits = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += digits[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const updateGradient = () => {
      document.body.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    };

    start1.addEventListener("click", () => {
      color1 = randomColor();
      start1.innerText = color1;
      updateGradient();
    });

    start2.addEventListener("click", () => {
      color2 = randomColor();
      start2.innerText = color2;
      updateGradient();
    });

    stopBtn.addEventListener("click", () => {
      color1 = "#053564";
      color2 = "#001748";
      start1.innerText = color1;
      start2.innerText = color2;
      updateGradient();
    });

    updateGradient();