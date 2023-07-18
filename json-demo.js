
const curso= require("./curso.json")

console.log(curso)

console.log(typeof curso)

console.log(curso.temas)

//JSON.parse para convertir formato json a javascript

//JSON.stringify para convertir formato js a json

//objeto -> cadena de caracteres
//cadena de caracteres en formato JSON

let infocursojson=JSON.stringify(curso)
console.log(typeof infocursojson)


//cadena de caracteres -> objeto
let infocursoobjeto=JSON.parse(infocursojson)
console.log(typeof infocursoobjeto)

console.log(infocursoobjeto.titulo)