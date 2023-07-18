
function saludar(nombre){

    return `hiii ${nombre}`

}

function saludarholamundo(){
    return `hola mundo`
}

//console.log(module.exports)//muestra objeto vacio
//module.exports es un objeto
//Con punto agregamos propiedades

//module.exports.saludar=saludar
//saludar es el nombre que le agregamos a la propiedad = que esta ligado a la funcion saludar

//console.log(module.exports)//muestra objeto que contiene una funcion

//module.exports.saludarmundo=saludarholamundo

//OTRA FORMA DE EXPORTAR:

module.exports={

    saludar:saludar,
    saludarmundo:saludarholamundo
}
//izq es como reconocera al enviar o utilizar en otro archivo y derec es lo que quedara guardado