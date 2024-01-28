let d1 = document.querySelector("#azul");
let d2 = document.querySelector("#rojo");
let d3 = document.querySelector("#verde");
let d4 = document.querySelector("#amarillo");

let cambioNegro = function (event) {
    event.target.style.backgroundColor = 'black';
}

d1.addEventListener("click", cambioNegro);
d2.addEventListener("click", cambioNegro);
d3.addEventListener("click", cambioNegro);
d4.addEventListener("click", cambioNegro);

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        key.style.backgroundColor = 'pink';
    } else if (event.key === 's' || event.key === 'S') {
        key.style.backgroundColor = 'orange';
    } else if (event.key === 'd' || event.key === 'D') {
        key.style.backgroundColor = 'lightblue';
    } else if (event.key === 'q' || event.key === 'Q') {
        addDiv(event.key);
    } else if (event.key === 'w' || event.key === 'W') {
        addDiv(event.key)
    } else if (event.key === 'e' || event.key === 'E') {
        addDiv(event.key)
    }
});

function addDiv(tecla) {
    let container = document.querySelector("#qwe");
    let newDiv = document.createElement("div");
    
    if (tecla === 'q') {
        newDiv.style.backgroundColor = 'purple';
    } else if (tecla === 'w') {
        newDiv.style.backgroundColor = 'grey';
    } else if (tecla === 'e') {
        newDiv.style.backgroundColor = 'brown';
    }
    
    container.appendChild(newDiv);
}