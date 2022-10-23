let quantidadeCartas = Number(prompt("Quer jogar com quantas cartas?"));

while (quantidadeCartas < 4 || quantidadeCartas%2 != 0 || quantidadeCartas > 14){
    alert("Quantidade de cartas invalida! Tente outro numero.");
    quantidadeCartas = Number(prompt("Quer jogar com quantas cartas?"));
}

let figuras =["./images/bobrossparrot.gif","./images/bobrossparrot.gif","./images/explodyparrot.gif","./images/explodyparrot.gif","./images/fiestaparrot.gif","./images/fiestaparrot.gif","./images/metalparrot.gif","./images/metalparrot.gif","./images/revertitparrot.gif","./images/revertitparrot.gif","./images/tripletsparrot.gif","./images/tripletsparrot.gif","./images/unicornparrot.gif","./images/unicornparrot.gif"];

distribuirCartas();

function distribuirCartas(){
    const inserirCartasHTML = document.querySelector(".tabuleiro");
    let arrayCartas =[];

    for(let i=0;i<quantidadeCartas;i++){
        arrayCartas[i] = figuras[i];
    }

    arrayCartas.sort((a,b) => Math.random()-0.5);

    for(let x=0;x<quantidadeCartas;x++){
        inserirCartasHTML.innerHTML += `<div class="cartas"><div class="face front"><img class="parrot" src="./images/back.png" /></div>
        <div class="face back"><img class="parrot" src=${arrayCartas[x]} /></div>  
            
        </div>`;
    }
}
