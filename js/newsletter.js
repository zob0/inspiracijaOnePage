document.getElementById("subBut").addEventListener("click", validacija);
let vrste = ["Inspirativni", "Motivacioni", "Ljubavni"];
let izabraneVrste = [];

let flag;

let ime = document.getElementById("ime");
let eMail = document.getElementById("mail");
let user = document.getElementById("user");
let pass = document.getElementById("pass");

function validacija(e) {
    flag = true;
    let length = document.getElementsByClassName("error").length;
    for (let i = 0; i < length; i++) {
      document.getElementsByClassName("error")[0].remove();
    }
  e.preventDefault();
  let j = 0;
  if (ime.value == "") {
    appendError("Morate uneti ime :(", ime);
  }
  if (
    !eMail.value.includes("@") ||
    eMail.value.endsWith("@") ||
    eMail.value.startsWith("@")
  ) {
    appendError("Pogrešno unet email :(", eMail);
  }
  if (user.value == "") {
    appendError("Morate uneti korisničko ime :(", user);
  }
  if (pass.value.length < 8) {
    appendError("Šifra ima manje od 8 karaktera :(", pass);
  }
  let prazno = true;
  let checkboxovi = document.getElementsByClassName("cb");
  for (let i = 0; i < checkboxovi.length; i++) {
    if (checkboxovi[i].checked) {
      prazno = false;
      izabraneVrste[j++] = vrste[i];
    }
  }
  if (prazno) {
    appendBefore("Morate da izaberete bar jednu vrstu citata :(",document.getElementById("greskaZaCb"))
  }
  if (!document.getElementsByClassName("radio")[0].checked) {
    appendBefore("Morate prihvatiti uslove korišćenja :(", document.getElementById("subBut"));
  }
  if(flag)
  alertajSve(
    document.getElementById("ime").value,
    document.getElementById("mail").value,
    document.getElementById("user").value,
    document.getElementById("pass").value,
    izabraneVrste
  );
}

function alertajSve(ime, email, username, pass, izabraneVrste) {
  let josJedanString = izabraneVrste[0];
  for (i = 1; i < izabraneVrste.length; i++) {
    josJedanString += ", " + izabraneVrste[i];
  }
  alert(
    "Zdravo " +
      ime +
      "\nEmail: " +
      email +
      "\nUsername: " +
      username +
      "\nŠifra: " +
      pass +
      "\nIzabrane vrste citata: " +
      josJedanString +
      "\nUslovi prihvaćeni"
  );
}

function appendError(errorTxt, element) {
  flag = false;
  let error = document.createElement("p");
  error.style.padding = 0;
  error.style.color = "red";
  error.classList.add("error");
  let tekst = document.createTextNode(errorTxt);
  error.appendChild(tekst);
  element.parentNode.insertBefore(error, element.nextSibling);
}

function appendBefore(errorTxt, element) {
  flag = false;
  let error = document.createElement("p");
  error.style.color = "red";
  error.classList.add("error");
  let tekst = document.createTextNode(errorTxt);
  error.appendChild(tekst);
  document.getElementsByTagName("form")[0].insertBefore(error, element);
}
