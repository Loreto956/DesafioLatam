function sumaSticker() {
    let cantidad1 = document.querySelector('#cant1');
    let cantidad2 = document.querySelector('#cant2');
    let cantidad3 = document.querySelector('#cant3');

    let valor1 = parseFloat(cantidad1.value) || 0;
    let valor2 = parseFloat(cantidad2.value) || 0;
    let valor3 = parseFloat(cantidad3.value) || 0;

    if (valor1 < 0) {
        return valor1;

    } else if (valor2 < 0) {
        return valor2;

    } else if (valor3 < 0) {
        return valor3;

    } else {
        return valor1 + valor2 + valor3;
    }
}


function validarCantidad() {
    let totalSticker = sumaSticker();
    let msjeResultado = document.querySelector('#msjeResultado');

    if (totalSticker >= 0 && totalSticker <= 10) {
        msjeResultado.textContent = 'Llevas '+ totalSticker+ ' stickers';
        msjeResultado.style.color = 'black';
    } else {
        msjeResultado.textContent = "Sobrepasó el limite de 10 stickers o es cantidad negativa: " + totalSticker;
        msjeResultado.style.color = 'red';
    }
}