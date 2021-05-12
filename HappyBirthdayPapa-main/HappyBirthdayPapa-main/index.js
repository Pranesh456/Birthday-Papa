const star = () => {
  const count = 200;
  const body = document.querySelector("body");
  var i = 0;

  while (i < count) {
    const star = document.createElement("i");
    const x = Math.floor(Math.random() * (window.innerWidth - 11));
    const y = Math.floor(Math.random() * (window.innerHeight - 11));

    const size = Math.random() * 4;
    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";

    const duration = Math.random() * 2;

    star.style.animationDuration = 2 + duration + "s";
    star.style.animationDelay = 2 + duration + "s";

    body.appendChild(star);
    i++;
  }
};

star();
