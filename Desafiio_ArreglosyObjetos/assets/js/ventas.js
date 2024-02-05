const propiedades_ventas= [ {
    nombre: 'Casa Chicureo',
    src:'https://http2.mlstatic.com/D_NQ_NP_2X_991686-MLC51715971480_092022-F.webp',
    descripcion: 'Hermosa casa ubicada en un sector privado',
    ubicacion: 'Chicureo, Región Metropolitana',
    habitaciones: 5,
    baños: 3,
    costo: 15000,
    smoke: false,
    pets: false },
{
    nombre: 'Casa Madera',
    src: 'https://http2.mlstatic.com/D_NQ_NP_983624-MLC72330336245_102023-W.webp',
    descripcion: 'Casa con privilegiada vista de Pichilemu',
    ubicacion: 'Pichilemu, Región de OHiggins ',
    habitaciones: 3,
    baños: 2,
    costo: 5000,
    smoke: true,
    pets: false },
{
    nombre: 'Casa de Campo',
    src: 'https://http2.mlstatic.com/D_NQ_NP_2X_623085-MLC46950198689_082021-F.webp',
    descripcion: 'Esta casa ubicada en un sector muy tranquilo cerca de la cordillera',
    ubicacion: 'Lican, Región de Los Ríos',
    habitaciones: 6,
    baños: 4,
    costo: 10000,
    smoke: false,
    pets: true },
{
    nombre: 'Casa Conce',
    src: 'https://http2.mlstatic.com/D_NQ_NP_2X_965391-MLC73238694354_122023-F.webp',
    descripcion: 'Casa ubicada en sector universitario',
    ubicacion: 'Concepción, Región del Bío Bío',
    habitaciones: 6,
    baños: 5,
    costo: 13000,
    smoke: false,
    pets: true },   
{
    nombre: 'Casa Lago',
    src: 'https://http2.mlstatic.com/D_NQ_NP_694660-MLC72869415364_112023-W.webp',
    descripcion: 'Casa ubicada a orillas del lago Ranco',
    ubicacion: 'Lago Ranco, Región de Los Ríos',
    habitaciones: 5,
    baños: 4,
    costo: 18000,
    smoke: true,
    pets: true },
{
    nombre: 'Casa Montaña',
    src: 'https://http2.mlstatic.com/D_NQ_NP_972918-MLC72986781170_112023-W.webp',
    descripcion: 'Hermosa casa rodeada de bosque y cascada',
    ubicacion: 'Puyehue, Región de Los Ríos',
    habitaciones: 6,
    baños: 6,
    costo: 16000,
    smoke: false,
    pets: true }
]


let almacenada = ""

for (ele of propiedades_ventas){
    almacenada += `

<div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${ele.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${ele.nombre}
                </h5>
                <p class="card-text">
                  ${ele.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${ele.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${ele.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${ele.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${ele.costo}</p>
                <p class="${ele.smoke? "text-success" : "text-danger"}">
                  ${ele.smoke? '<i class="fas fa-smoking"></i>' : '<i class= "fas fa-smoking-ban"></i>'} ${ele.smoke? 'Permitido fumar': 'No se permite fumar'}
                </p>
                <p class="${ele.pets? "text-success" : "text-danger"}">
                  ${ele.pets? '<i class="fas fa-paw"></i>' : '<i class="fa-solid fa-ban"></i>'} ${ele.pets?  'Mascotas permitidas': 'No se permiten mascotas'}
                </p>
              </div>
            </div>
          </div>
          `
}

var div_origen = document.querySelector("#div_ventas")

div_origen.innerHTML = almacenada