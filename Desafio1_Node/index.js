const { registrar, leer } = require('./operaciones.js');
const args = process.argv.slice(2);

args.forEach(args => {
    console.log(args)
})

const operacion = args[0];
if (operacion === 'registrar') {
    const [nombre, edad, tipo, color, enfermedad] = args.slice(1);
    registrar(nombre, edad, tipo, color, enfermedad);
} else if (operacion === 'leer') {
    leer();
} else {
    console.log('Operación no reconocida. Usa "registrar" o "leer".');
}
