const http =require('http')

const server = http.createServer((request,response)=>{
    console.log('ruta' + request.url)
    switch(request.url){
        case '/':
             response.writeHead(200, {'Content_type':'application/json'})
            // response.statusCode(200)
            // response.statusMessage('que onda')
            response.end(JSON.stringify('Hola mundo'))
            break;
        default:
            response.writeHead(404, {'Content_type':'text/plain'})
            // response.statusCode(404) 
            response.end('no hay pagina')   



    }
})

server.listen(3056, ()=>{
    console.log('escuchando en el puerto 3000')
})