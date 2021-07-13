/* 
let base = 5;
let res;
console.clear();
console.log(`========================
== TABLA DEL ${base} 
========================`);


for (let i = 1; i <=10; i++) {
    res = i * base;
    console.log(`5 x ${i} = ${res}`);
} */

const fs = require('fs');

let base = 1;
let res;
console.clear();
console.log(`========================
== TABLA DEL ${base} 
========================`);
let salida = '';

for (let i = 1; i <=10; i++) {
    res = i * base;
    salida +=`5 x ${i} = ${res}\n`;
}

console.log(salida);

/* fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
    if (err)  throw err;
    console.log(`Tabla del ${base} correctamente creada`);
}); */

fs.writeFileSync(`tabla-${base}.txt`, salida);

console.log(`Tabla del ${base} correctamente creada`);

