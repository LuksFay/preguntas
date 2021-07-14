
let puntaje = 0;

let respuesta1 = parseInt(prompt("¿De que color es la bandera Argentina?    1-Verde y blanco    2-Rojo y negro    3-Celeste y blanco   responder con numero"));
if(respuesta1 === 3 ){
    (puntaje=puntaje + 10);
    alert(`Correcto! tu puntaje es ${puntaje}`);
}else{
    (puntaje=puntaje - 10);
    alert(`Inorrecto >:c! tu puntaje es  ${puntaje}`);
}


let respuesta2 = parseInt(prompt("¿Cuantos pares son tres botas?   1-dos pares   2-un par y medio   3-tres pares   responder con numero"));
if(respuesta2 === 2){
    (puntaje=puntaje + 10);
    alert(`Correcto! tu puntaje es  ${puntaje}`);
}else{
    (puntaje=puntaje - 10);
    alert(`Inorrecto >:c! tu puntaje es  ${puntaje}`);
}


let respuesta3 = parseInt(prompt("¿Que gusto tiene la sal?   1-salada   2-azucarada   3-Agria  responder con numero"));
if(respuesta3 === 1){
    (puntaje=puntaje + 10);
    alert(`Correcto! tu puntaje es  ${puntaje}`);
}else{
    (puntaje=puntaje -10);
    alert(`Inorrecto >:c! tu puntaje es  ${puntaje}`);
}


let respuesta4 = parseInt(prompt("¿Que color era el caballo blanco de San Martin?   1-Blanco   2-Negro   3-Marron"));
if(respuesta4 === 1){
    (puntaje=puntaje + 10);
    alert(`Correcto! tu puntaje es  ${puntaje}`);
}else{
    (puntaje=puntaje -10);
    alert(`Inorrecto >:c! tu puntaje es  ${puntaje}`);
}


let respuesta5 = parseInt(prompt("¿Cuantas vidas tienen los gatos?   1-una   2-tres   3-siete  responder con numero"));
if(respuesta5 === 3){
    (puntaje=puntaje + 10);
    alert(`Correcto! tu puntaje es  ${puntaje}`);
}else{
    (puntaje=puntaje -10);
    alert(`Inorrecto >:c! tu puntaje es  ${puntaje}`);
}
alert(`Terminaste! tu puntaje total es de  ${puntaje}`);