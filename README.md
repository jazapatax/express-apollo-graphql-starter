
<img src="https://user-images.githubusercontent.com/25323947/71303686-1e5b9980-238a-11ea-91b3-06939c318a06.png" width="90%"></img> 

image uploaded with : https://felixhayashi.github.io/ReadmeGalleryCreatorForGitHub/

## Crea automáticamente un Backend Apollo Server para graphql con conexión a Atlas Mongo Db: 

Este repositorio (https://github.com/null-point-sys/express-apollo-graphql-starter.git) contiene: 

- Las dependencias (package.json)
- Los modelos (models/Publication.js y models/User.js) (documentos de Atlas)
- Los resolvers (resolvers.js)
- El esquema de datos (schema.js)
- El front vanilla (index.html y script.js)
- Las variables de entorno (variables.env)

### • Bash script automátizado para el sistema operativo windows:

pushd C:\ 
&& git clone https://github.com/null-point-sys/express-apollo-graphql-starter.git
&& cd express-apollo-graphql-starter
&& git clone https://github.com/null-point-sys/express-apollo-graphql-starter2.git 
&& npm install 
&& cd express-apollo-graphql-starter2 
&& move server.js C:\express-apollo-graphql-starter 
&& cd C:\express-apollo-graphql-starter 
&& rmdir /s /Q C:\express-apollo-graphql-starter\express-apollo-graphql-starter2
&& npm run server

### • Como poner a correr este bash script automátizado en mi equipo:

Abre una consola de windows y pega todo el script anterior y dale enter.

### • Explicación del flujo de este bash script automátizado para el sistema operativo windows:

Una vez git clona este primer repositorio https://github.com/null-point-sys/express-apollo-graphql-starter.git en la ruta C:\express-apollo-graphql-starter el bash script ingresa a esta carpeta y clona seguidamente el repositorio https://github.com/null-point-sys/express-apollo-graphql-starter2.git que contiene solo un archivo el server.js apollo express del proyecto y a continuación npm instala las dependencias desde package.json e instala en paralelo node js (node_modules), al finalizar se inicializa el proyecto con npm run server: el BACK graphiql queda corriendo en el navegador en localhost:4444/graphiql y el FRONT en vanilla javascript queda corriendo con localhost:4444

---------------
### Para probar desde esta instalación en localhost con conexión remota a Atlas Mongo DB

### • Para conectar con tu base de datos en Atlas Mongo DB:

En el archivo /variables.env cambia user:password por tus propias credenciales de Atlas mongo DB.
En el archivo /server.js descomenta las lineas -> //Connect to Atlas remote mongo database	

### • Consulta para crear el documento publications en atlas desde localhost:4444/graphiql:

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

### • Consulta para cargar las publicaciones desde atlas en localhost:4444/graphiql:

query{
  getAllPublications{
  	_id
  	name
  	category
  	likes
	}
}

### • Para probar el front end Vanilla, apollo server en localhost y cargar datos desde Atlas MongoDB:

Puedes descargar el archivo app.html desde https://github.com/null-point-sys/express-apollo-graphql-app.html.git 
y accederlo desde cualquier navegador en tu equipo o celular (no requiere instalación).

El endpoint para hacer fetch desde vanilla es : http://localhost:4444/graphql

### • Para probar el front vanilla, apollo server en codesanbox y cargar datos desde alli mismo:

Puedes descargar el archivo app.html desde https://github.com/null-point-sys/express-apollo-graphql-app.html.git  y ejecutarlo desde cualquier navegador, no requiere instalaciones de paquetes desde npm ni instalar nodejs y en la consola del navegador obtendras los datos almacenados en un json en codesandbox. 

En script.js linea 63 cambia el endpoint del fetch hacia el apollo server: https://38r91.sse.codesandbox.io/:

  fetch(`https://38r91.sse.codesandbox.io/`, options)
			.then(res => res.json())
			.then(renderPublications);
			
y en la línea 17 cambia el query:

  const getpublicationsQuery = () => `{ teams {
      id
      institution
      nickname
      color
      favorite
    } }`;

---------------
### • Deploy a heroku para probar desde una dirección url en una instalación en un servidor web:

1. En el archivo /package.json ingresa tus propias versiones de node y npm que tienes corriendo en windows
  "engines": { "node": "v8.9.4" },
  "engines": { "npm": "v6.0.1" },
  
2. En Heroku > settings > Config Vars y agrega las dos variables que tienes en el archivo variables.env

3. En el archivo del front vanilla script.js > line 45 > fetch(`https://name-of-my-app.herokuapp.com/graphql`, options)

   ingresa la url de tu app heroku.
   
---------------


----------------
### • Opcional instalar una aplicación frontend react para el proyecto :

&& npm install -g create-react-app 
&& npx create-react-app client
&& mkdir D:\express-apollo-graphql-starter\client\src\components
&& move D:\express-apo llo-graphql-starter\client\src\App.js D:\express-apollo-graphql-starter\client\src\components
&& move D:\express-apollo-graphql-starter\client\src\App.css D:\express-apollo-graphql-starter\client\src\components
&& mkdir D:\express-apollo-graphql-starter\client\src\queries
&& cd D:\express-apollo-graphql-starter\client\src\queries
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




