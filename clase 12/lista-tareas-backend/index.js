const server = require ("express");
const bodyParser = require ("body-parser");

const app = server();


const todoListApp = server();
todoListApp.use(bodyParser.json());

const port = 3001;

const contenidoLista = [
    {texto: "Tarea 1 XX", completada: false},
    {texto: "Tarea 2 XX", completada: false},
    {texto: "Tarea 3 ", completada: true},
    {texto: "Tarea 4 ", completada: false}

]

todoListApp.get ("/start", (request, response) => {
    response.send (contenidoLista);
})

//get con busqueda de 1 valor
//ejemplo http://localhost:3001/start?texto=Tarea 1
todoListApp.get ("/tarea/:valorBuscado", (request, response) => {
    const {valorBuscado} = request.params;
    let tareasBuscadas = contenidoLista.filter(
        tarea => {
            const textoTarea = tarea.texto.toLowerCase()
            const textoBuscado = valorBuscado.toLowerCase()
            return textoTarea.includes(textoBuscado)
        }
    )
    response.send (tareasBuscadas);
})

todoListApp.post ("/tarea", (request, response) => {
    const body = request.body;
    console.log (body);
    contenidoLista.push (body);
    response.sendStatus (200);
})

todoListApp.patch ("/tarea/:id", (request, response) => {
    const body = request.body;
    const texto = body.texto;
    const nuevoEstado = body.completada;
    const indice = contenidoLista.findIndex(tarea => tarea.texto === texto);
    contenidoLista[indice].completada = nuevoEstado;
    console.log (contenidoLista[indice]);
    response.sendStatus (200);
})

todoListApp.delete ("/tarea/:valorBuscado", (request, response) => {
    const {valorBuscado} = request.params;
    const indice = contenidoLista.findIndex(tarea => tarea.texto === valorBuscado);
    console.log (indice);
    if (indice >= 0) {
        contenidoLista.splice (indice, 1);
        response.sendStatus (200);
    }else{
        response.sendStatus (404);
    }    
})

app.listen(port, () => {console.log("aplicacion corriendo en el puerto 3001")})
