// console.log("segunda aula")
/*
Funçoes do js
alert()
console.log()

Funçoes personalizadas
funçoes criadas pela pessoa que está desenvolvendo.
a função precisa ser chamada para ser executada.
-para criar uma função usamos a palavra function
exemplo: function abacaxi(){
    oque essa funcão faz
}
*/

// function EscreverFrases(texto){
//     console.log(texto)
// }
 
// EscreverFrases("tudo sei que nada sei")
// EscreverFrases("locura é apenas algo inrrelevante")

// parseFloat-->converte de texto para decimal
// parseInt--> converte de texto para o inteiro

// DOM: document Object doom

function Converter(){
    //  Pegar valor do campo let valorEmDolar = document.getElementById("valor").value
    let valorEmDolar = document.querySelector("#valor").value
    /**Converter Ovalor do campo em numero */
let valorEmDolarNumerico = parseFloat(valorEmDolar)

    let cotacaoDolar = 5
    let valorEmReal = valorEmDolarNumerico * cotacaoDolar
    /**Inserir o Resultado na tela console */
    console.log(valorEmReal)
    document.querySelector("#valorConvertido").innerHTML = "O resultado em real é R$ " + valorEmReal.toFixed(2)
}