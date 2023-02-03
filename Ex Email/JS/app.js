// Utente inserisce email
let emailInserita = prompt("Inserisci la tua email")
let emailOk = emailInserita
console.log(emailOk)

//Lista email presente sul server attravverso un array 

let listaEmail = ["MarcoRossi","MimmoVerde","CarloGiallo","PaoloBlu","CarlaRosa"]
console.log(listaEmail)

//La variabile verifica verrà attraversata ad ogni ciclo da un valore array diverso
//Quando troverà qullo identico a quello inserito vedremo il messaggio (Email già presente)
//Altrimenti se il valore inserito sarà diverso per tutti i valori array vedremo il messaggio (Grazie per aver inserito la tua email)

for(let i = 0; i < listaEmail.length; i++){
    let verifica = listaEmail[i]
    console.log(verifica)
    if( verifica === emailOk){
        let presente = "!!!Email già presente!!!"
        console.log("!!!Email già presente!!!")
        document.getElementById("testo").innerHTML= presente;
        break
    }else {
        let nonpresente = "Grazie per aver inserito la tua email"
        console.log("Grazie per aver inserito la tua email")
        document.getElementById("testo").innerHTML= nonpresente;
    }
}