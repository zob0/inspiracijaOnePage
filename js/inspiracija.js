let par = document.getElementById("citat");
let sel = document.getElementsByTagName("select")[0];

import citati from "./bazaCitata.js";
let ljub = citati.ljub;
let mot = citati.mot;
let insp = citati.insp;

let ran = -1;
let last = -1;
let lastRan;

document.getElementsByTagName("button")[0].addEventListener("click", festa);
function festa() {
  lastRan = ran;
  switch (sel.selectedIndex) {
    case 0:
      ran = Math.floor(Math.random() * insp.length);
      if (last == 0) {
        while (ran == lastRan) {
          ran = Math.floor(Math.random() * insp.length);
        }
      }
      par.textContent = insp[ran];
      last = 0;
      break;
    case 1:
      ran = Math.floor(Math.random() * mot.length);
      if (last == 1) {
        while (ran == lastRan) {
          ran = Math.floor(Math.random() * mot.length);
        }
      }
      par.textContent = mot[ran];
      last = 1;
      break;
    case 2:
      ran = Math.floor(Math.random() * ljub.length);
      if (last == 2) {
        while (ran == lastRan) {
          ran = Math.floor(Math.random() * ljub.length);
        }
      }
      par.textContent = ljub[ran];
      last = 2;
      break;
    default:
      alert("greska");
      break;
  }
}
