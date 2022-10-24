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
        inserirCartasHTML.innerHTML += `<div class="cartas jogo" onclick="virarCarta(this)"><div class="face front"><img class="parrot" src=${arrayCartas[x]} /></div>
        <div class="face back"><img class="parrot" src="./images/back.png" /></div>  
            
        </div>`;
    }
}

let cartaEscolhidaAntes = "";
let cartaEscolhida = "";
let contador = 0;

function virarCarta(cartaEscolhidaReal){
        let cartasAbertas = document.querySelectorAll(".flip");
        if (cartasAbertas.length <= 1 ){
            
            cartaEscolhida = cartaEscolhidaReal;
            cartaEscolhidaAntes = document.querySelector(".flip");
            const imgAntes = document.querySelector(".flip .face .parrot");
            cartaEscolhida.classList.add("flip");
            const imgAgora = cartaEscolhida.querySelector(".face .parrot");
            const img2 = imgAgora.getAttribute('src');
        
            if(cartaEscolhidaAntes !== null && cartaEscolhidaAntes !== cartaEscolhida){
                contador += 2;
                const img1 = imgAntes.getAttribute('src');
                cartaEscolhida.classList.add("flip");
                const imgAgora = cartaEscolhida.querySelector(".face .parrot");
                const img2 = imgAgora.getAttribute('src');
        
                if (img1 == img2){
                    cartaEscolhidaAntes.classList.add("virada");
                    cartaEscolhida.classList.add("virada");
                    cartaEscolhidaAntes.classList.remove("jogo");
                    cartaEscolhida.classList.remove("jogo");        
                }
        
        
                setTimeout(desvirarCartas,1000,cartaEscolhida,cartaEscolhidaAntes);
        
               setTimeout(acabarJogo,1000,contador);
        
            }
        }

    }

function desvirarCartas(a,b,c){
    a.classList.remove("flip");
    b.classList.remove("flip");

}

function acabarJogo(quantidade){
    let gameover = document.querySelector(".jogo");

        if (gameover == null){
            alert(`Você ganhou em ${quantidade} jogadas!`);
         }
}

