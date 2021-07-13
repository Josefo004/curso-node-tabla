
const fs = require('fs');

const crearArchivo = async( base=5, listar=true, hasta=10) =>{
    try {
        
        let salida = '';
        let consola = '';

        for (let i = 1; i <=hasta; i++) {
            
            salida +=`${base} x ${i} = ${base*i}\n`;
            consola +=`${base} ${'x'.bgCyan} ${i} ${'='.bgCyan} ${base*i}\n`;
        } 

        if (listar) {
            console.log('========================'.green);
            console.log('== TABLA DEL '+base); 
            console.log('========================'.green);
            console.log(consola.grey);    
        }
        let nfile = 'tabla-'+base+'.txt';
        fs.writeFileSync('./salidas/'+nfile, salida);
        return nfile;
        
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}
