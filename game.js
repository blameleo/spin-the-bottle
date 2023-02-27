let names = [];
let addBtn = document.getElementById("addPlayer");
let input = document.getElementById("names");
let displayEl = document.getElementById("display");
let spinBtn = document.getElementById("spin");
let dareEl = document.getElementById("dis");
const bottle = document.getElementById("bottle");

addBtn.addEventListener("click", addNames);
spinBtn.addEventListener("click", spin);
function addNames() {
  if (input.value == "") {
    document.querySelector(".checker").textContent = "Dont leave input empty";
  } else {
    document.querySelector(".checker").textContent = "";
    names.push(input.value);
    input.value = "";

    renderList();
  }
}

function renderList() {
  let listNames = "";
  for (name of names) {
    listNames += `
            
            <li class="font-bold text-transparent text-lg  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 border rounded text-center px-5 pl-0 mb-2 border-pink-500  ">
              ${name}   
            </li>
        `;
  }
  displayEl.innerHTML = `
    <div class="text-2xl flex flex-col justify-center items-center  mt-40">
    <h3>Current players :</h3>${listNames} 
    </div>
    `;
}

function spin() {
  bottle.classList.add("spin");

  const times = [2000, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900];
  let random = Math.floor(Math.random() * times.length);

  setTimeout(pause, times[random]);

  bottle.classList.remove("pause");
}

function pause() {
  bottle.classList.add("pause");
  pickName();
}

function random() {
  return Math.floor(Math.random() * names.length);
}

function pickName() {
  let name1 = names[random()];
  let name2 = names[random()];
  if (name1 !== name2) {
    dareEl.innerHTML = `<p class="fade-in bg-zinc-900 border-t-4 border-t-pink-600 px-3 p-2 rounded text-center ">${name1} <span class="text-red-500">dares</span>  ${name2}</p>`;
  } else if (name1 == name2) {
    name1 = names[random()];
    name2 = names[random()];
    if (name1 !== name2) {
      dareEl.innerHTML = `<p class="fade-in bg-zinc-900 border-t-4 border-t-pink-600 px-3 p-2 rounded text-center ">${name1} <span class="text-red-500">dares</span>  ${name2}</p>`;
    }
  }
}
