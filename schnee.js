var maxSnowflake = 100;
var content = ["\u2744", "\u2745", "\u2746"];

function snow() {
  for (let i = 0; i < maxSnowflake; i++) {
    let snowFlakeWrapper = document.createElement("div");
    snowFlakeWrapper.classList.add("snow-wrapper");

    let snowFlake = document.createElement("div");
    snowFlake.classList.add("snow-flake");

    // schneeflocke zufällig auswählen
    let snowFlakeSymbolNumber = Math.floor(Math.random() * content.length);
    let snowFlakeSymbol = document.createTextNode(
      content[snowFlakeSymbolNumber]
    );

    snowFlake.appendChild(snowFlakeSymbol);

    // groeße der schneeflocke bestimmen
    let fontSize = Math.floor(Math.random() * 24 + 5);
    snowFlake.style.fontSize = fontSize + "px";

    // horizontale position bestimmen
    let horizontal = Math.floor(Math.random() * 100);
    snowFlakeWrapper.style.left = horizontal + "%";

    snowFlakeWrapper.style.top = "-55px";

    // animationsdauer bestimmen
    let duration = Math.floor(Math.random() * 10 + 5);
    snowFlake.style.animationDuration = 40 - fontSize + "s";
    snowFlakeWrapper.style.animationDuration = 40 - fontSize + "s";

    // animations verzoegerung bestimmen
    let delay = Math.floor(Math.random() * 15);
    snowFlake.style.animationDelay = delay + "s";
    snowFlakeWrapper.style.animationDelay = delay + "s";

    // schneeflocke in DOM einfuegen
    snowFlakeWrapper.appendChild(snowFlake);
    document.body.appendChild(snowFlakeWrapper);
  }
}

snow();