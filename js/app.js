//variables--------------------------------------------------------------------------------
var boton_lineas = document.getElementById("boton");
var texto_lineas = document.getElementById("texto");
var color_lineas = document.getElementById("color").value;

boton_lineas.addEventListener("click", dibujoPorClick)



var dibujo = document.getElementById("dibujo");
var ancho = dibujo.width;
var lienzo = dibujo.getContext("2d");

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final){

    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){

    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorcito = color_lineas;
    var espacio = ancho / lineas;

    for(l = 0; l < lineas; l++){

        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
        console.log("Linea " + l);

    }

    dibujarLinea(colorcito, 1,1,1,299);
    dibujarLinea(colorcito, 1,299,299,299);
}

function cleanCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}