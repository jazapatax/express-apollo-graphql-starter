## Crea una aplicación BACKEND Apollo server (B) y Base de datos Mongo DB (C) desacoplados entre si, es decir cada uno en su propia infraestructura:

Combinaciones posibles:

B1 : Backend en localhost | C : BD en Atlas Mongo DB

B2 : Backend en heroku | C : BD en Atlas Mongo DB

B3 : Backend en codesandbox | C : BD en Atlas Mongo DB

<img src="https://user-images.githubusercontent.com/25323947/71322289-fb1d1100-2493-11ea-8e04-21f02988a0cd.png" width="100%"></img>   

image uploaded with : https://felixhayashi.github.io/ReadmeGalleryCreatorForGitHub/

Este repositorio (https://github.com/null-point-sys/express-apollo-graphql-starter.git) contiene: 

- Las dependencias (package.json)
- Los modelos (models/Publication.js y models/User.js) (documentos de Atlas)
- Los resolvers (resolvers.js)
- El esquema de datos (schema.js)
- Las variables de entorno (variables.env)

---------------
## B1 : Crea automáticamente un Backend Apollo Server para graphql en localhost (endpoint : http://localhost:4444/graphiql) con conexión a Atlas Mongo Db:

• Bash script automátizado para el sistema operativo windows:

pushd C:\ 
&& git clone https://github.com/null-point-sys/express-apollo-graphql-starter.git
&& cd express-apollo-graphql-starter
&& npm install
&& npm run server

• Como poner a correr este bash script automátizado en mi equipo:

Abre una consola de windows y pega todo el script anterior y dale enter.

• Explicación del flujo de este bash script automátizado para el sistema operativo windows:

El puntero se para en C:\ con pushd C:\ luego git clona el repositorio https://github.com/null-point-sys/express-apollo-graphql-starter.git en la ruta C:\express-apollo-graphql-starter el bash script ingresa a esta carpeta y a continuación npm instala las dependencias desde package.json e instala en paralelo node js (node_modules), al finalizar se inicializa el proyecto con npm run server: el BACK graphiql queda corriendo en el navegador en http://localhost:4444/graphiql

---------------
### C: Para conectar con tu base de datos en Atlas Mongo DB:

• En el archivo /variables.env cambia user:password por tus propias credenciales de Atlas mongo DB.

• En el archivo /server.js descomenta las lineas -> //Connect to Atlas remote mongo database	

---------------
### B2 : Crea automáticamente un Backend Apollo Server para graphql (endpoint : https://nombredetuapp.herokuapp.com/graphiql) en heroku con conexión a Atlas Mongo Db:

En los archivos de tu instalación del servidor en localhost:

• En el archivo /package.json ingresa tus propias versiones de node y npm que tienes corriendo en windows
  "engines": { "node": "v8.9.4","engines": { "npm": "v6.0.1" },
  
• En Heroku > settings > Config Vars y agrega las dos variables que tienes en el archivo variables.env

• Sigue el proceso de deploy indicado por tu app heroku para setear el git en la carpeta del servidor local.

• http://zen-it.herokuapp.com/graphiql -> aqui puedes ver un ejemplo de como queda el backend.

---------------
### B3 : Crea automáticamente un Backend Apollo Server para graphql (endpoint : https://ozt8r.sse.codesandbox.io/graphiql) en codesandbox con conexión a Atlas Mongo Db:

• Crea una cuenta gratuita en codesandbox

• Ingrea a la opción create sandbox

• Click en import project

• En la sección import from github ingresa la url de este repositorio : https://github.com/null-point-sys/express-apollo-graphql-starter.git

• Click en generate sandbox y listo! sigue los pasos para inicializar tu base de datos descomentando la inicialización en server.js y poniendo tus datos en el archivo variables.env 

• https://ozt8r.sse.codesandbox.io/graphiql -> aqui puedes ver un ejemplo de como queda el backend en codesandbox

---------------
### • Consulta para crear el documento publications en atlas (C) desde graphiql (B1, B2 o B3):

mutation{
  addPublication(
    name         : "pub 1"
    description  : "description of the pub1"
    category     : "category 1"
    instructions : "asas fas ad"
    username     : "username 1"){
      name
      category
      description
      instructions
      username
    }
}

### • Consulta para cargar las publicaciones desde atlas (C) en el graphiql (B1, B2 o B3):

query{
  getAllPublications{
  	_id
  	name
  	category
  	likes
	}
}

### • Consulta para crear un nuevo usuario con la mutation signupUser en atlas (C) desde el graphiql (B1, B2 o B3):

mutation{
  signupUser(username:"aaa",email:"asd@asd.co",password:"123456"){token}
}

----------------
### Opcional: instalar una aplicación FRONTEND react en (B1) -> directorio C:\express-apollo-graphql-starter 

pushd C:\express-apollo-graphql-starter 
&& npm install -g create-react-app 
&& npm uninstall -g create-react-app
&& yarn create create-react-app client
&& mkdir C:\express-apollo-graphql-starter\client\src\components
&& move C:\express-apollo-graphql-starter\client\src\App.js C:\express-apollo-graphql-starter\client\src\components
&& move C:\express-apollo-graphql-starter\client\src\App.css C:\express-apollo-graphql-starter\client\src\components
&& mkdir C:\express-apollo-graphql-starter\client\src\queries
&& cd C:\express-apollo-graphql-starter\client\src\queries
&& type nul > index.js
&& npm run dev
&& yarn start

Frontend react client app > localhost:3000  
  
En /server.js comentar app.use("/graphiql",...

Después de const PORT = process.env.PORT || 4444;
Agregar:
const path  = require("path");
if(process.env.NODE_ENV === "production"){
	app.use(express.static('client/build'));
	app.get('*', (req, res ) => { res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); })
}

si tienes /client/src/index.js cambia cons client ApolloClient url a la url de heroku: "https://myappname.herokuapp.com/graphql"

cambia package.json con las dependencias heroku post-build y client.




