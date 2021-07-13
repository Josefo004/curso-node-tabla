
const colors = require('colors');
const { crearArchivo } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs');

//console.log(process.argv);

//let base = 1548;

console.clear();

/* const [ , , arg3 = 'base=5'] = process.argv;
const [ , base = 5 ] = arg3.split('='); */

//console.log(process.argv);
//console.log(argv);
let base = argv.b;
let listar = argv.l;
let hasta = argv.h;
console.log('base', base);
console.log('listar', listar);
console.log('hasta', hasta);

crearArchivo(base, listar, hasta)
    .then((nombreArchivo) => console.log(nombreArchivo, ' creado correctamente'.random))
    .catch((error) => console.log(error)); 


