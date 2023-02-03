const buttoElement = document.getElementById("button")

//Quando premi sul pulsante si avvia il cliclo del gioco dei dadi

buttoElement.addEventListener('click', function(){

console.log('click su pulsante')

//Genera numero random per persona

let numberUt = Math.floor(Math.random() * 6);

//Genera numero random per PC

let numberPc = Math.floor(Math.random() * 6);
console.log(numberUt,numberPc)
    
//Confronta i numeri, il numero più alto è il vincitore
//Stampare su HTML chi è il vincitore


if(numberUt<numberPc){
    console.log("Utente ha vinto")
    document.getElementById("testo").innerHTML= "Utente ha vinto";
}else{
    console.log("PC ha vinto")
    document.getElementById("testo").innerHTML= "PC ha vinto";
}if (numberUt === numberPc) {
    console.log("Pareggio")
    document.getElementById("testo").innerHTML= "Pareggio";
}
})

