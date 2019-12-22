<img src="https://user-images.githubusercontent.com/25323947/71314950-8b217300-2420-11ea-9308-82cf7c796705.png" width="100%"></img>  

image uploaded with : https://felixhayashi.github.io/ReadmeGalleryCreatorForGitHub/

## B1 : Crea automáticamente un Backend Apollo Server para graphql en localhost (endpoint : http://localhost:4444/graphiql) con conexión a Atlas Mongo Db: 

Este repositorio (https://github.com/null-point-sys/express-apollo-graphql-starter.git) contiene: 

- Las dependencias (package.json)
- Los modelos (models/Publication.js y models/User.js) (documentos de Atlas)
- Los resolvers (resolvers.js)
- El esquema de datos (schema.js)
- Las variables de entorno (variables.env)

### • Bash script automátizado para el sistema operativo windows:

pushd C:\ 
&& git clone https://github.com/null-point-sys/express-apollo-graphql-starter.git
&& cd express-apollo-graphql-starter
&& npm install
&& npm run server

### • Como poner a correr este bash script automátizado en mi equipo:

Abre una consola de windows y pega todo el script anterior y dale enter.

### • Explicación del flujo de este bash script automátizado para el sistema operativo windows:

El puntero se para en C:\ con pushd C:\ luego git clona el repositorio https://github.com/null-point-sys/express-apollo-graphql-starter.git en la ruta C:\express-apollo-graphql-starter el bash script ingresa a esta carpeta y a continuación npm instala las dependencias desde package.json e instala en paralelo node js (node_modules), al finalizar se inicializa el proyecto con npm run server: el BACK graphiql queda corriendo en el navegador en http://localhost:4444/graphiql

---------------
### C: Para conectar con tu base de datos en Atlas Mongo DB:

• En el archivo /variables.env cambia user:password por tus propias credenciales de Atlas mongo DB.

• En el archivo /server.js descomenta las lineas -> //Connect to Atlas remote mongo database	

### Probar apollo server (backend) en localhost con conexión remota a Atlas Mongo DB

### • Consulta para crear el documento publications en atlas desde 
### B1: http://localhost:4444/graphiql o 
### B2: https://nombredetuapp.herokuapp.com/graphiql o 
### B3: https://38r91.sse.codesandbox.io/graphiql

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

### • Consulta para cargar las publicaciones desde atlas en el graphiql en 
### B1: http://localhost:4444/graphiql o 
### B2: https://nombredetuapp.herokuapp.com/graphiql o 
### B3: https://38r91.sse.codesandbox.io/graphiql

query{
  getAllPublications{
  	_id
  	name
  	category
  	likes
	}
}

---------------
### B2 : Crea automáticamente un Backend Apollo Server para graphql (endpoint : https://nombredetuapp.herokuapp.com/graphiql) en heroku con conexión a Atlas Mongo Db:

En los archivos de tu instalación del servidor en localhost:

• En el archivo /package.json ingresa tus propias versiones de node y npm que tienes corriendo en windows
  "engines": { "node": "v8.9.4","engines": { "npm": "v6.0.1" },
  
• En Heroku > settings > Config Vars y agrega las dos variables que tienes en el archivo variables.env

• Sigue el proceso de deploy indicado por tu app heroku para setear el git en la carpeta del servidor local.

• http://zen-it.herokuapp.com/graphiql -> aqui puedes ver un ejemplo de como queda el backend.

---------------
### B3 : Crea automáticamente un Backend Apollo Server para graphql (endpoint : https://38r91.sse.codesandbox.io/graphiql) en codesandbox con conexión a Atlas Mongo Db:

• Crea una cuenta gratuita en codesandbox

• Ingrea a la opción create sandbox

• Click en import project

• En la sección import from github 


• http://zen-it.herokuapp.com/graphiql -> aqui puedes ver un ejemplo de como queda el backend.


---------------

### A1. Probar el frontend Vanilla (app.html) en local | apollo server en localhost (endpoint: http://localhost:4444/graphiql) | BD en Atlas

• Puedes descargar el archivo app.html desde https://github.com/null-point-sys/express-apollo-graphql-app.html.git 
y accederlo desde cualquier navegador en tu equipo o celular (no requiere instalación con npm por consola ya que no depende de nodejs).

• El endpoint para hacer fetch desde vanilla es el que tiene el archivo por defecto: http://localhost:4444/graphiql

---------------
### A2: Probar el frontend vanilla (app.html) en local | apollo server en heroku (endpoint: https://nombredetuapp.herokuapp.com/graphiql) | BD en Atlas

• Puedes descargar el archivo app.html desde https://github.com/null-point-sys/express-apollo-graphql-app.html.git 
y accederlo desde cualquier navegador en tu equipo o celular (no requiere instalación con npm por consola ya que no depende de nodejs).

• En la línea 45 cambiamos el endpoint > fetch(`https://nombredetuapp.herokuapp.com/graphiql`, options)

• http://zen-it.herokuapp.com/graphiql -> aqui puedes ver un ejemplo de como queda el backend.

---------------
### A3. Probar el frontend vanilla (app.html) en local | apollo server en codesanbox (endpoint: https://38r91.sse.codesandbox.io/graphiql) | BD en codesandbox:

• Puedes descargar el archivo app.html desde https://github.com/null-point-sys/express-apollo-graphql-app.html.git 
y accederlo desde cualquier navegador en tu equipo o celular (no requiere instalación con npm por consola ya que no depende de nodejs).

• En la línea 45 cambiamos el endpoint > fetch(`https://38r91.sse.codesandbox.io/`, options)

  fetch(`https://38r91.sse.codesandbox.io/`, options)
			.then(res => res.json())
			.then(renderPublications);
			
• y en la línea 17 cambia el query ya que las vamos a cargar desde el mismo codesandbox:

  const getpublicationsQuery = () => `{ teams {
      id
      institution
      nickname
      color
      favorite
    } }`;

---------------
### A4. Probar el frontend vanilla (app.html) en heroku | apollo server en heroku | BD en Atlas:

• Sube el archivo app.html (https://github.com/null-point-sys/express-apollo-graphql-app.html.git) a una aplicaciómn heroku
y accedelo desde cualquier navegador en tu equipo o celular (no requiere instalación con npm por consola ya que no depende de nodejs).

https://nombredetuapp.herokuapp.com/app.html

---------------
### A5. Probar el frontend vanilla (app.html) en heroku | apollo server en codesandbox (endpoint: https://38r91.sse.codesandbox.io/graphiql) | BD en codesandbox:

Sube el archivo app.html (https://github.com/null-point-sys/express-apollo-graphql-app.html.git) a una aplicaciómn heroku
y accedelo desde cualquier navegador en tu equipo o celular (no requiere instalación con npm por consola ya que no depende de nodejs):

https://nombredetuapp.herokuapp.com/app.html

---------------
### A6. Probar el frontend vanilla (app.html) en codesandbox | apollo server en heroku (endpoint https://nombredetuapp.herokuapp.com/graphiql) | BD en Atlas:

Sube el archivo app.html (https://github.com/null-point-sys/express-apollo-graphql-app.html.git) a un codesandbox
y accedelo desde cualquier navegador en tu equipo o celular (no requiere instalación con npm por consola ya que no depende de nodejs).

---------------
### A7. Probar el frontend vanilla (app.html) en codesandbox | apollo server en codesandbox (endpoint: https://38r91.sse.codesandbox.io/graphiql) | BD en codesandbox:

Sube el archivo app.html (https://github.com/null-point-sys/express-apollo-graphql-app.html.git) a un codesandbox 
y accedelo desde cualquier navegador en tu equipo o celular (no requiere instalación con npm por consola ya que no depende de nodejs).

---------------
### A8. Probar el frontend vanilla (app.html) en hosting | apollo server en heroku (endpoint https://nombredetuapp.herokuapp.com/graphiql) | BD en Atlas:

Sube el archivo app.html (https://github.com/null-point-sys/express-apollo-graphql-app.html.git) a un hosting con filezilla o cualquier ftp y accedelo desde cualquier navegador en tu equipo o celular (no requiere instalación con npm por consola ya que no depende de nodejs).

https://www.midominio.com/app.html

---------------
### A9. Probar el frontend vanilla (app.html) en hosting | apollo server en codesandbox (endpoint: https://38r91.sse.codesandbox.io/graphiql) | BD en codesandbox:

Sube el archivo app.html (https://github.com/null-point-sys/express-apollo-graphql-app.html.git) a un hosting con filezilla o cualquier ftp y accedelo desde cualquier navegador en tu equipo o celular (no requiere instalación con npm por consola ya que no depende de nodejs).

https://www.midominio.com/app.html

----------------
### Opcional instalar una aplicación frontend react para el proyecto :

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




