let numeroSecreto = 0;
let intentos = 1;
let posibilidadesAdivinar = 0;
let numeroMaximo = 10;
let limitador = 4;
let listaNumeroSecreto = [];
let partidasGanadas = 0 ;
let partidasPerdidas = 0;

console.log (`te quedan intentos ${posibilidadesAdivinar}`)


function etiquetasPersonalizadas(elemento,texto){
    let etiquetaHTML =document.querySelector(elemento);
    etiquetaHTML.innerHTML = texto;
}

function verificarIntento (){
    let intentoDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(intentoDeUsuario);
    console.log (numeroSecreto);
    
        if (intentoDeUsuario === numeroSecreto){
            etiquetasPersonalizadas("p",`Ganaste en ${intentos} ${(intentos === 1 ? "intento" : "intentos")}`);
            document.getElementById("intentara").setAttribute("disabled","true");
            document.getElementById("reiniciar").removeAttribute("disabled");
            partidasGanadas ++;
        }else {
            if (numeroSecreto>intentoDeUsuario){ 
                etiquetasPersonalizadas("p","el número secreto es mayor");
            }else{
                etiquetasPersonalizadas("p","el número secreto es menor");
            }
            posibilidadesAdivinar --;
            console.log (`te quedan intentos ${posibilidadesAdivinar}`)
            limpiarCaja ();
            intentos ++;
            if (posibilidadesAdivinar < 1){
                etiquetasPersonalizadas("p",`perdiste no descubriste el número secreto` );
                document.getElementById("reiniciar").removeAttribute("disabled");
                partidasPerdidas ++;
                document.getElementById("intentara").setAttribute("disabled","true"); 
            }

        }

}

function generarNumeroAleatorio() {
    numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumeroSecreto.length == limitador){
        console.log (listaNumeroSecreto);

    }else {

        if (listaNumeroSecreto.includes(numeroGenerado)){
        // Se retorna de nuevo la funcion con el fin que el numero generado pueda ser utilizado
            return generarNumeroAleatorio();
        } else {
            listaNumeroSecreto.push(numeroGenerado);
            return numeroGenerado;
            
        }
    }
}

function limpiarCaja (){
    /* Alternativa larga
    let vaciarCaja = document.querySelector("#valorUsuario");
    vaciarCaja.value = "";
    */
   // Alternativa corta
   document.querySelector("#valorUsuario").value = "";
}

function parametrosIniciales (){
    etiquetasPersonalizadas("h1","Juego del Número Secreto");
    etiquetasPersonalizadas("p",`"Indica un número del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroAleatorio();
    console.log (numeroSecreto);
    console.log (listaNumeroSecreto);
    intentos = 1;
    posibilidadesAdivinar = parseInt(prompt("Cuantos intentos deseas para descubir el número secreto"))
    console.log (`te quedan intentos ${posibilidadesAdivinar}`)
}

parametrosIniciales ();

function reiniciarJuego (){
    if (listaNumeroSecreto.length == limitador)
        {
            document.getElementById("intentara").setAttribute("disabled","true"); 
            document.getElementById("reiniciar").setAttribute("disabled","true");
            etiquetasPersonalizadas("p",`Realizaste el número maximo de 4 juegos, Ganaste ${partidasGanadas} ${(partidasGanadas===1)?"juego":"juegos"}, perdiste ${partidasPerdidas} ${(partidasPerdidas===1)?"juego":"juegos"}`);
        }else {
            limpiarCaja ();
            parametrosIniciales();
            document.getElementById("reiniciar").setAttribute("disabled","true");
            document.getElementById("intentara").removeAttribute("disabled");
        }
    
}


