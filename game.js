const spinBtn = document.getElementById("spin");
const addPlayerBtn = document.getElementById("addPlayer");
let bottle = document.getElementById("bottle");

let playerNames = document.getElementById("names");
let players = [];

addPlayerBtn.addEventListener("click", () => {
  players.push(playerNames.value);
  playerNames.value = "";
  console.log(players);
});

spinBtn.addEventListener("click", spinBottle);

function spinBottle() {
  bottle.classList.add("spin");

  let random;

  const times = [2000, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900];
  random = Math.floor(Math.random() * times.length);

  setTimeout(pause, times[random]);

  bottle.classList.remove("pause");
}

function pickName() {
  let name1 = players[random()];
  let name2 = players[random()];

  if (name1 !== name2){
    document.getElementById(
      "dare"
    ).innerHTML = `<p class="fade-in bg-zinc-700 border-t-4 border-t-pink-600 px-3 p-2 rounded text-center ">${name1} <span class="text-red-500">dares</span>  ${name2}</p>`;
  
  }


}

function random() {
  return Math.floor(Math.random() * players.length);
}

function pause() {
  bottle.classList.add("pause");
  pickName();
}
