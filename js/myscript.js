const userName = prompt("Inserisci il tuo nome");
const userSurname = prompt("Inserisci il tuo cognome");
const userColor = prompt("Inserisci il tuo colore preferito");

document.getElementById("name").innerHTML = "Il tuo nome è: " + userName;
document.getElementById("surname").innerHTML = "Il tuo cognome è: " +  userSurname;
document.getElementById("color").innerHTML = "Il tuo colore preferito è: " + userColor;




document.getElementById("pwdgen").innerHTML = "La password generata è: " + userName + userSurname + userColor + "22";
