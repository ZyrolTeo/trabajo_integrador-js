const DESC_EST = 0.2, DESC_TRA = 0.5, DESC_JNR = 0.85;
const CANTIDAD = document.getElementById("cantidad");
const CATEGORIA = document.getElementById("categoria");
const BTNRESUMEN = document.getElementById("btnResumen");

let ValorEntrada=200;
let totalAPagar = 0;

function precioFinal() {

    if (CATEGORIA.value == "Estudiante"){
        totalAPagar = (ValorEntrada*CANTIDAD.value)*DESC_EST;}
    else if (CATEGORIA.value == "Trainee"){
            totalAPagar = (ValorEntrada*CANTIDAD.value)*DESC_TRA;}
    else {
        totalAPagar = (ValorEntrada*CANTIDAD.value)*DESC_JNR};

    importeTotal.innerHTML = 'Total a Pagar : $'+ totalAPagar;    
}

function borrar(){
    importeTotal.innerHTML = 'Total a Pagar : $';
}
