/*
var abc = 0;
function addOne(n1){
    
    if (n1 > 6){
        return abc = true;
    }else {
        return abc = false;
    }
}

var n1 = prompt("Digite um numero")
addOne(n1)
console.log(abc)
*/

function clique(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
}

function redirecionamento(){
    //window.open("https://www.google.com")
    window.location.href = "https://www.google.com"
}

function mouse(elemento){
    elemento.innerHTML = "Obrigado por passar"
}

function colocamouse(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("A Gi é fedorenta")
}

function fchange(elemento){
    console.log(elemento.value)
}

