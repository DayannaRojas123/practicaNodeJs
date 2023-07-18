
//para importar asignamos el nombre de la exportacion a una constante
const saludo= require("./saludos") //require como "incluir" trasfondo de importar el modulo saludo.js

console.log(saludo)//muestrra la const con la importacion del modulo saludo.js

console.log(saludo.saludar("Dayanna"))//especificamos el nombre del modulo de donde proviene la funcion y punto (propiedad nombre del modulo)
console.log(saludo.saludarmundo())

//DESESTRUCTURACION PARA IMPORTAR SOLO CIERTAS propiedades
//la desestructuracion nos permite tomar ciertas propiedades del objeto
//ya no tendremos que mencionar el modulo del cual proviene

const {saludarmundo} = require("./saludos")

console.log(saludarmundo())


//si queremos incluir el modulo lo hacemos de esta manera:
//const {saludo, saludarmundo} = require("./saludos")
//console.log(saludarmundo())
//console.log(saludar("Daya"))

//en el orden que se declara mismo que el que llegue del exports

/*----------------------------------------------------------------------------------------------------------------------*/
//MODULO CONSOLA:

console.log('hola chickens')
console.warn('te advierto. ocurrio un error...')
console.error('error grave. ocurrio un error')
console.error(new Error('ocurrio un error ups detalles:'))//podemos pasar un objeto de error con toda la info del error como la linea del error etc
/*----------------------------------------------------------------------------------------------------------------------*/ 
//MODULO PROCESS:

//console.log(process)
//console.log(process.env)//describe el ambiente de ejecucion del programa
//console.log(process.argv)//muestra los argumentos
//console.log(process.memoryUsage())

/*----------------------------------------------------------------------------------------------------------------------*/ 
//MODULO OS:
//no es un moduloo global asi que toca importarlo con require
const os=require("os")

console.log(os.type())

console.log(os.homedir())//muestra el directorio


console.log(os.uptime())//tiempo que se ha estado ejecutando el sistema


console.log(os.userInfo())

/*----------------------------------------------------------------------------------------------------------------------*/
//MODULO TIMERS:

//setTimeout(funcion, retraso, argumento)

function mostrartema(tema){

console.log(`estoy aprendiendo ${tema}` )


}

setTimeout(mostrartema,2000,'node.js')//retrasa la ejecucion 2 segundos


//setImmediate(funcion, argumento1, argumento2)
//se ejecuta despues de todo el codigo sincrono se haya ejecutado
//esta se ejecuta lo mas rapido posible de forma asincronica

function mostrartema2(tema){

    console.log(`estoy aprendiendo asincronicamente ${tema}` )

}
console.log('antes de setImmediate')//codigo sincronico

setImmediate(mostrartema2,'express')//codigo final despues de todas las lineas sincronas

console.log('despues de setImmediate')//codigo sincronico


//setInterval(funcion, intervalo, arg1, arg2)
//cada cierto periodo de tiempo se ejecutara ese codigo un numero infinito de veces cada tantos segundos

function multiplicar(a,b){

    console.log(`rta:${a*b}`)

   
}

//setInterval(multiplicar,1500,28,65)//se ejecutara la funcion multiplicar cada 1,5 segundos infinitamente

/*---------------------------------------------------------------------------------------------------------------------*/

//modulo FS:
//todos sus metodos son asincronos
//pero podemos escojer versiones sincronas agregando Sync a sus nombres

const fs=require("fs")

//fs.readFile(nombreArchivo [, opciones], callback)//el opciones es opcional y contiene las configuraciones para la lectura del archivo

/*fs.readFile('index.html','utf-8',(err,contenido)=>{//permite leer el contenido del archivo de forma asincronica

    if(err){//si el error no es nulo que lo muestre

        console.log(err)

        //throw err //THROW detiene la ejecucion del programa y nosda mas detalles del error
    }else{

        console.log(contenido)

    }

    console.log('mensaje.....')

})
*/
//el callback tiene 2 opciones: error y contenido o datos del archivo
//el contenido siempre sera un string o cadena de caracteres


/*fs.rename('index.html','main.html', (err)=>{

    if(err){

        throw err
    }

    console.log('nombre cambiado exitosamente')



})//nos permite cambiar el nombre del archivo indicando donde esta
//fs.rename(oldPath, newPath, callback) //se puede tambien poniendo la ruta y cambiandola a una nueva ruta*/

fs.appendFile('main.html','<p>usando appendfile</p>',(err)=>{

    if(err){

        throw err
    }

    console.log('archivo actualizado')


})//agrega contenido al final del archivo
//fs.appendFile(file, data[, options], callback)
//data: Los datos que se agregarán al archivo. Puede ser una cadena de caracteres, un objeto Buffer o un objeto Uint8Array.

fs.writeFile('main.html','contenido nuevo',(err)=>{


    if(err){

throw err

    }

    console.log('contenido reemplazado exitosamente')


})//reemplazar todo el contenido de archivo

//fs.writeFile(file, data[, options], callback)
//data: Los datos que se escribirán en el archivo. Puede ser una cadena de caracteres, un objeto Buffer o un objeto Uint8Array.

/*fs.unlink('eliminar.html',(err)=>{


    if(err){

        throw err
    }

    console.log('archivo eliminado exitosamente')

})//para eliminar archivos*/

//SI NO QUEREMOS ESTAS FUNCIONES ASINCRONAS LE AGREGAMOS EL SYNC Y YA (fs.appendfileSync)


/*---------------------------------------------------------------------------------------------------------------------*/

//MODULO EVENTOS:

const EventEmitter=require('events')
const { resolve } = require("path")
//podemos definir siempre las constantes igual que el nombre del modulo
//este evento events retorna una clase y esa clase se llama EventEmitter (no objeto)

console.log(EventEmitter)

const EmisorEventos = new EventEmitter() //recuerda que el modulo events es una clase, por eso lo instanciamos con new
//creando el objeto emisoreventos

EmisorEventos.on('compra',(total)=>{

    console.log('se realizo una compra por'+total)



})//cuando ocurra el evento compra, realizara cierta funcion
//el on es para asociar una funcion a un evento 

EmisorEventos.emit('compra',500)//para emitir o crear el evento llamado compra 

//PROMESAS:

//const promesacumplida=true

const promesacumplida=false;


const mipromesa= new Promise((resolve,reject)=>{

    setTimeout(()=>{


        if(promesacumplida){

            resolve('promesa cumplida');

        }else{

            reject('promesa rechazada...')
        }



    },3000)//añadimos un retraso a la funcion flecha

})                 


/*mipromesa.then((valor)=>{ //esta funcion se asocia solo para  exito (resolve)


    console.log(valor)
    console.log('el valor que pasamos a resolve o a reject se va asignar aqui al parametro valor')
    console.log('aqui decido que ocurre cuando se completa la promesa')


})*/


const manejarpromesacumplida=(valor)=>{

console.log(valor)


}

const manejarpromesarechazada=(razonrechazo)=>{

    console.log(razonrechazo)

}


mipromesa.then(manejarpromesacumplida,manejarpromesarechazada)


const estatuspedido=()=>{
    

    return Math.random() <0.8
}

for(let i=0;i<10;i++){
    console.log(estatuspedido())
}


const mipedidodepizza= new Promise((resolve,reject)=>{

    setTimeout(()=>{
        
        
        if(estatuspedido()){
            resolve('pedido exitoso, pizza en camino')
            
    }else{
        reject('ocurrio un error. por favor intente nuevamente')
    }

},3000)

})

const manejarpedido=(mensajedeconfirmacion)=>{

    console.log(mensajedeconfirmacion)


}

const rechazarpedido=(mensajedeerror)=>{

    console.log(mensajedeerror)

}


mipedidodepizza.then(manejarpedido,rechazarpedido)
/*
// otra forma alternativa:


mipedidodepizza
.then((mensajedeconfirmacion)=>{console.log(mensajedeconfirmacion)})//para exito

//con null:
.then(null,(mensajedeerror)=>{console.log(mensajedeerror)})//para error

//con catch:
.catch((mensajedeerror)=>{

    console.log(mensajedeerror)
})
*/

//otra forma mejor:

//method chaining:

mipedidodepizza.then(manejarpedido).catch(rechazarpedido)


//ASYNC AWAIT:



function ordenarproducto(producto){

    return new Promise((resolve,reject)=>{


        console.log(`ordenando:${producto} de dayanacodecamp.`)

        setTimeout(()=>{

            if(producto==='taza'){

                resolve('ordenando una taza con el logo de dayanacodecamp..')
            }else{

                reject('este producto no esta disponible actualmente')
            }

        },2000)

    })


}



function procesarpedido(respuesta){

    return new Promise ((resolve)=>{//no es necesario definir los 2 parametros

        console.log('procesando respuesta...')
        console.log(`la respuesta fue:"${respuesta}"`)

        setTimeout(()=>{

            resolve('gracias por tu compra, disfruta tu producto')

        },4000)

    })

}

//encadenamos promesas de forma tradicional:
/*
ordenarproducto('taza')
.then(respuesta=>{

    console.log('respuesta recibida')
    console.log(respuesta)//respueste tiene a resolve de ordenarproducto
    return procesarpedido(respuesta)//este then retorna la promesa

})

.then(respuestaprocesada=>{//valor retornado por promesa procesarpedido

    console.log(respuestaprocesada)//si es true hace el resolve de procesarpedido

})
.catch(error=>{
    console.log(error)
})*/

//encadenamos promesas con ASYNC AWAIT:

async function realizarpedido(producto){

    try{//podemos leer el codigo como si fuera sincrono gracias al await. espera que se complete la promesa

    const respuesta= await ordenarproducto(producto)

    console.log('respuesta recibida')

    const respuestaprocesada=await procesarpedido(respuesta)

    console.log(respuestaprocesada)

    }
    catch(error){

        console.log(error)
    }

}

realizarpedido('taza')

/*--------------------------------------------------------------------------------------------------------------------*/

//MODULO HTTP:
/*

const http=require('http');

const servidor = http.createServer((req,res)=>{



console.log('solicitud nueva')

    res.end('holi mundo') //para cuando termine el proceso que le pidio al server, entre parentesis el resultado que queremos
    //enviarle al cliente 


}); //metodo de http para crear un servidor
//cada ves que reciba una solicitud va a ejecutar la funcion dentro de los parentesis


//para que el servidor escuche necesitamos un puerto
const puerto=3000;

//recordar poder usar la convencion de constantes en mayuscula

servidor.listen(puerto,()=>{

    //console.log(`el servidor esta escuchando en el puerto${puerto}`)
    console.log(`el servidor esta escuchando en http://localhost:${puerto}`)

})//escuchar, decimos al servidor que comience a escuchar las solicitudes , estaria escuchando los procesos de ese puerto 3000
*/

 /*----------------------------------------------------------------------------------------------------------------- */

 //REQ Y RES:


 const http=require('http');

 const servidor = http.createServer((req,res)=>{
 
    
 
 /*console.log('===> req(solicitud)')
 //console.log(req)
 console.log(req.url)
 console.log(req.method)//muestra el metodo http
 console.log(req.headers)//muestra las cabeceras de la solicitud*/

 console.log('===> res(respuesta)')
 //console.log(res)
 console.log(res.statusCode)//codigo de estado de la respuesta

 res.setHeader('content-type','application/json')//clave:valor
console.log(res.getHeaders())
 res.end('tkm')
 }); 
 
 const puerto=3000;

 
servidor.listen(puerto,()=>{

    console.log(`el servidor esta escuchando en http://localhost:${puerto}`)

})


/*----------------------------------------------------------------------------------------------------- */

//MODULO URL


const miURL= new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1')//url de la solicitud
//una vez que la url llega al servidor se procesa

console.log(miURL.hostname)//www.ejemplo.org //nombre del host
console.log(miURL.pathname)//camino ///cursos/programacion
console.log(miURL.searchParams)//para ver los parametros query // { 'ordenar' => 'vistas', 'nivel' => '1' }
//searchParams es un objeto asi que podremos acceder a sus propiedades
console.log(typeof miURL.searchParams)
console.log(miURL.searchParams.get('ordenar'))//obtenemos el valor de ordenar//vistas
console.log(miURL.searchParams.get('nivel'))

