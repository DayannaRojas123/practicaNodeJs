const http=require('http')
const {infoCursos} =require('./cursos')



const servidor=http.createServer((req,res)=>{

    //const metodo=req.method
    const {method}=req //accedemos al metodo de req

    switch(method){

        case 'GET': return manejarSolicitudGET(req,res)
        case 'POST': return manejarSolicitudPOST(req,res)
        default:
            console.log(res.statusCode )
            res.statusCode =501
            console.log(`el metodo usado no puede ser manejado por el servidor ${method}`)
            console.log(res.statusCode )
            //break

    }  

    

})

function manejarSolicitudGET(req,res){//esto podria ser el cliente

   // const path =req.url

    const {url: path}=req

    console.log(res.statusCode)//200 ok

if(path === '/'){

    //res.writeHead(200,{'Content-Type':'application/json'}) //enviar una respuesta HTTP al cliente para escribir encabezados de respuesta,
    // que incluyen el código de estado HTTP y los encabezados adicionales, antes de que se envíe el cuerpo 
    //de la respuesta

   return res.end('bienvenidos a mi servidor y API creado con node.js')


}else if(path==='/cursos'){


    return res.end(JSON.stringify(infoCursos))


}else if(path==='/cursos/programacion'){

return res.end(JSON.stringify(infoCursos.programacion))


}
res.statusCode = 404
res.end('el recurso solicitado no existe...')

}

function manejarSolicitudPOST(req,res){

    const path =req.url
    
    if(path==='/cursos/programacion'){

        
    let cuerpo

    req.on('data', (contenido)=>{

        cuerpo = contenido.toString()
    }
    )



req.on('end', () => {
  console.log(cuerpo)
  console.log(typeof cuerpo)

  //convertimos a un objeto js
  cuerpo = JSON.parse(cuerpo)

  console.log(typeof cuerpo)
  console.log(cuerpo.titulo)

  return  res.end('se recibio solicitud post')
})


      // return  res.end('se recibio solicitud post')

        //aqui usamos rest client para hacer la solicitud post al servidor
    }


}
















const puerto=3001

servidor.listen(puerto,()=>{

    console.log(`el servidor esta escuchando en http://localhost:${puerto}`)

})