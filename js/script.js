var listaOutput = document.getElementById('lista-cognomi');
var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var cognomeUtente = prompt('Inserisci il tuo cognome');
cognomeUtente = cognomeUtente[0].toUpperCase() + cognomeUtente.slice(1).toLowerCase(); // CORREZIONE --> per mettere la prima lettera maiuscola.
listaCognomi.push(cognomeUtente);
listaCognomi.sort();
console.log(listaCognomi);

for (var i = 0; i < listaCognomi.length; i++) {
  listaOutput.innerHTML += '<li>' + listaCognomi[i] + '</li>';
}

var userIndex = listaCognomi.indexOf(cognomeUtente) + 1; // CORREZIONE per dire in che posizione si trova il cognomeUtente
var outputPosition = document.getElementById('output-position') // CORREZIONE
outputPosition.append(userIndex) // CORREZIONE
