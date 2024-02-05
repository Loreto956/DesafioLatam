const propiedades_alquiler= [ {
    nombre: 'Arriendo depto Amoblado',
    src:'https://http2.mlstatic.com/D_NQ_NP_2X_604150-MLC74177721616_012024-F.webp',
    descripcion: 'Departamento studio amoblado a 5 minutos de metro',
    ubicacion: 'Avda Matta, Santiago, Región Metropolitana',
    habitaciones: 1,
    baños: 1,
    costo: 12,
    smoke: false,
    pets: false },
{
    nombre: 'Casa Condominio',
    src: 'https://http2.mlstatic.com/D_NQ_NP_983624-MLC72330336245_102023-W.webp',
    descripcion: 'Casa en condominio seguro con entorno natural',
    ubicacion: 'Los Maitenes, Concepción, Región del Biobío ',
    habitaciones: 3,
    baños: 2,
    costo: 24,
    smoke: true,
    pets: false },
{
    nombre: 'Casa en Parcela',
    src: 'https://http2.mlstatic.com/D_NQ_NP_2X_833417-MLC74029086848_012024-F.webp',
    descripcion: 'Casa en parcela con piscina y cabaña',
    ubicacion: 'Sector Pichuhuape, Valdivia, Región de Los Lagos',
    habitaciones: 4,
    baños: 3,
    costo: 40,
    smoke: true,
    pets: true },
{
    nombre: 'Casa El Golf',
    src: 'https://http2.mlstatic.com/D_NQ_NP_2X_612858-MLC74251363214_022024-F.webp',
    descripcion: 'Casa ubicada en calle tranquila',
    ubicacion: 'Barrio El Golf, Las Condes, Región Metropolitana',
    habitaciones: 3,
    baños: 2,
    costo: 79,
    smoke: false,
    pets: true },   
{
    nombre: 'Casa Arriendo Comercial',
    src: 'https://http2.mlstatic.com/D_NQ_NP_2X_668873-MLC73937901714_012024-F.webp',
    descripcion: 'Casa ubicada a orillas del lago Ranco',
    ubicacion: 'José Menéndez, Punta Arenas, Región de Magallanes',
    habitaciones: 10,
    baños: 4,
    costo: 91,
    smoke: true,
    pets: false },
{
    nombre: 'Lodge primera línea',
    src: 'https://http2.mlstatic.com/D_NQ_NP_2X_691204-MLC73658781716_012024-F.webp',
    descripcion: 'Lodge como refugio de descanso y desconexión',
    ubicacion: 'Lago Ranco, Región de Los Ríos',
    habitaciones: 4,
    baños: 3,
    costo: 17,
    smoke: true,
    pets: true }
]

let almacenada = ""

for (ele of propiedades_alquiler){
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

var div_origen = document.querySelector("#div_alquiler")

div_origen.innerHTML = almacenada