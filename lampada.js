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
    }    
}

function desligarLampada(){
    if(!isLampadaQuebrada()){
        lampada.src = "./img/lampadaDesligada.png";
    }    
}

function quebrarLampada(){
    lampada.src = "./img/lampadaQuebrada.png";
}

function isLampadaQuebrada(){
    return lampada.src.indexOf("Quebrada") > -1;
}

function ligaDesliga(){
    if(!isLampadaQuebrada()){
        if(lampada.src.indexOf("Desligada") > - 1){
            console.log("teste");
            ligarLampada();
        } else {
            console.log("teste2");
            desligarLampada();
        }
    }    
}