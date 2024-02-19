const firstName = prompt('Inserisci il tuo nome');
const lastName = prompt('Inserisci il tuo cognome');
const favoriteColor = prompt('Inserisci il tuo colore preferito, se lo scrivi in inglese è meglio!');
const favoriteNumber = prompt('Inserisci il tuo numero preferito')
const password = firstName + lastName + favoriteColor + favoriteNumber;

console.log(password);

document.getElementById('pwd-generated').innerHTML = 
`Questa è la tua password: <strong style="color:${favoriteColor}">${password}</strong>`;