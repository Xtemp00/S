function email() {
    var a = document.getElementById("search").value;
    if (a === "b.rondo@orange.fr") {
        window.open("Scylla.html")
    }
}
const fs = require('fs')
let fichier = fs.readFileSync('données/recup_données.json')
let personne = JSON.parse(fichier)
console.log(personne)