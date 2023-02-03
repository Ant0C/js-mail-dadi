// Utente inserisce email
let emailInserita = prompt("Inserisci la tua email")
console.log(emailInserita)

//Lista email presente sul server attravverso un array 
//Conversione in stringa

let listaEmail = ["MarcoRossi","MimmoVerde","CarloGiallo","PaoloBlu","CarlaRosa"]
let emailString = listaEmail.toString()
console.log(emailString)

// Verifica della email che riporterà un valore false o true

const verifica = emailString.includes (emailInserita)
console.log(verifica)

//Se valore true stampa su HTML avviso di email già presente
//Se valore false stampa su HTML conferma di inseritmento email

for(let i = 0; i < listaEmail.length; i++){

    if( verifica === true){
        let presente = "!!!Email già presente!!!"
        console.log("!!!Email già presente!!!")
        document.getElementById("testo").innerHTML= presente;
    }else {
        let nonpres = "Grazie per aver inserito la tua email"
        console.log("Grazie per aver inserito la tua email")
        document.getElementById("testo").innerHTML= nonpres;
    }
}