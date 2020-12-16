var listaOutput = document.getElementById('lista-cognomi');
var listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi']
var cognomeUtente = prompt('Inserisci il tuo cognome')
listaCognomi.push(cognomeUtente)
listaCognomi.sort()

var contenutoPrecedente;
for (var i = 0; i < listaCognomi.length; i++) {
  contenutoPrecedente = listaOutput.innerHTML;
  listaOutput.innerHTML = contenutoPrecedente + '<li>' + listaCognomi[i] + '</li>';
}
