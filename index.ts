import { route } from "./routes/route";
import Server from "./classes/server"
import bodyParser from "body-parser";
import cors from "cors";

const server = new Server();

//BodyParser
server.app.use( bodyParser.urlencoded({ extended : true}));
server.app.use( bodyParser.json());

// Config CORD ( para que se pueda llamar el servicio de diferente dominios)
server.app.use( cors({ origin: true, credentials:true}))

//Rutas de Servicios
server.app.use('/',route )

server.start( () =>{
    console.log(`Servidor esta corriento en el puetos ${ server.port}`)
})