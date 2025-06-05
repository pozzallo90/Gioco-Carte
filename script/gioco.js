let cartaGiocatore = document.getElementById("you");

let cartaComputer = document.getElementById("cpu");

let pulsante = document.getElementById("gioca");

let messaggio = document.getElementById("messaggio");

numeroGiocatore = Math.floor(Math.random() * 8) + 1;

numeroComputer = Math.floor(Math.random() * 8) + 1;

cartaGiocatore.style.textAlign = "center";
cartaComputer.style.textAlign = "center";
cartaGiocatore.style.fontSize = "15em";
cartaComputer.style.fontSize = "15em";

cartaGiocatore.innerHTML = numeroGiocatore;

cartaComputer.innerHTML = numeroComputer;

pulsante.onclick = function () {
  numeroGiocatore = Math.floor(Math.random() * 8) + 1;
  numeroComputer = Math.floor(Math.random() * 8) + 1;
  cartaGiocatore.innerHTML = numeroGiocatore;

  cartaComputer.innerHTML = numeroComputer;

  if (numeroGiocatore > numeroComputer) {
    messaggio.innerHTML = "Complimenti, Hai Vinto ";
  } else if (numeroGiocatore == numeroComputer) {
    messaggio.innerHTML = "Pareggio";
  } else {
    messaggio.innerHTML = "Mi Dispiace, Hai Perso";
  }
};
