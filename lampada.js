const btnLigar = document.getElementById("btnLigar");
const btnDesligar = document.getElementById("btnDesligar");
const lampada = document.getElementById("lampada");

btnLigar.addEventListener("click", ligarLampada);
btnDesligar.addEventListener("click", desligarLampada);
lampada.addEventListener("mouseover", ligarLampada);
lampada.addEventListener("mouseleave", desligarLampada);
lampada.addEventListener("dblclick", quebrarLampada);
btnLigaDesliga.addEventListener("click", ligaDesliga);

function ligarLampada(){
    if(!isLampadaQuebrada()){
        lampada.src = "./img/lampadaLigada.png"
        atualizarTextoBtnLigaDesliga()
    }    
}

function desligarLampada(){
    if(!isLampadaQuebrada()){
        lampada.src = "./img/lampadaDesligada.png";
        atualizarTextoBtnLigaDesliga()
    }    
}

function quebrarLampada(){
    lampada.src = "./img/lampadaQuebrada.png";
    atualizarTextoBtnLigaDesliga()
}

function isLampadaQuebrada(){
    return lampada.src.indexOf("Quebrada") > -1;
}

function ligaDesliga(){
    if(lampada.src.indexOf("Desliga") > -1){
        lampada.src = "./img/lampadaLigada.png"
        atualizarTextoBtnLigaDesliga(); 
    } else if(lampada.src.indexOf("Quebrada") > -1){
        trocarLampada();
        atualizarTextoBtnLigaDesliga;
    } else { 
        lampada.src = "./img/lampadaDesligada.png";
        atualizarTextoBtnLigaDesliga(); 
    }
    
}

function atualizarTextoBtnLigaDesliga(){
    if(lampada.src.indexOf("Desligada") > -1){
        textoBtnLigaDesliga.textContent = "Liga";
    } else if (lampada.src.indexOf("Quebrada") > -1){
        textoBtnLigaDesliga.textContent = "Trocar Lâmpada!";        
    } else {
        textoBtnLigaDesliga.textContent = "Desliga";
    }
}

function trocarLampada(){
    if(lampada.src.indexOf("Quebrada") > -1){
        if(textoBtnLigaDesliga.textContent.indexOf("Trocar") > -1){
           lampada.src = "./img/lampadaDesligada.png";
           textoBtnLigaDesliga.textContent = "Liga";
        }
        
    }
}