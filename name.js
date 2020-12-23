const name = getNameFromUrl() || "Keine Argumente angegeben!";

const nameEle = document.getElementById("name");
const ylno = document.getElementById("ylno");
const greetings = document.getElementById("greetings");

createNameSpans(name);

const letterEles = document.querySelectorAll(".letter");

console.log(letterEles);

lightUpName(1);

function createNameSpans(name) {
  let nameArray = name.split("");
  let htmlString = "";
  nameArray.forEach((letter, index) => {
    htmlString += `<span class="letter" id="letter-${index}">${letter}</span>`;
  });
  if(name == "Alex"){
    ylno.textContent = "Es war ein Jahr, wie kein anderes. Bald ist es auch vorbei, deswegen steht jetzt Weihnachten vor der Tür. Deswegen diese Weihnachtsgrüße, du kleines Kitzelmonster!!"
    greetings.textContent = "Dein FIGGO Simon"
  }
  if(name == "Carmen"){
    greetings.textContent = "Dein FIGGO Simon"
  }
  if(name == "Mama"){
    greetings.textContent = "Dein FIGGO Simon"
  }
  nameEle.innerHTML = htmlString;
}

function lightUpName(n) {
  let length = letterEles.length;
  for (let i = 0; i < length; i++) {
    let ele = letterEles[i];
    ele.className = (n + i) % 2 == 0 ? "green" : "red";
    
  }

  setTimeout(function () {
    lightUpName(n + 1);
  }, 500);
}

function getNameFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let urlName = urlParams.get("n");
  return urlName;
}