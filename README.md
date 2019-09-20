## Backend : express-apollo-graphql-starter (use null-point-sys/express-apollo-graphql-starter2)
## Frontend : vanilla 

Node JS NPM Windows CMD automation script to run express server in localhost:4444/graphiql browser url with package.json apollo graphql dependencies.

• DevOps:

pushd D:\ 
&& git clone https://github.com/null-point-sys/express-apollo-graphql-starter.git
&& npm install
&& cd express-apollo-graphql-starter
&& git clone https://github.com/null-point-sys/express-apollo-graphql-starter2.git 
&& npm install 
&& cd express-apollo-graphql-starter2 
&& move server.js D:\express-apollo-graphql-starter 
&& cd D:\express-apollo-graphql-starter 
&& rmdir /s /Q D:\express-apollo-graphql-starter\express-apollo-graphql-starter2
&& npm run server

• /variables.env > change user:password to your own Atlas mongo DB data credentials.
	
• /server.js     > uncomment //Connect to Atlas remote mongo database	

• localhost:4444/graphiql > 

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

query{
  getAllPublications{
  	_id
  	name
  	category
  	likes
	}
}

• Optional :

&& npm install -g create-react-app 
&& create-react-app client
&& mkdir D:\express-apollo-graphql-starter\client\src\components
&& move D:\express-apollo-graphql-starter\client\src\App.js D:\express-apollo-graphql-starter\client\src\components
&& move D:\express-apollo-graphql-starter\client\src\App.css D:\express-apollo-graphql-starter\client\src\components
&& mkdir D:\express-apollo-graphql-starter\client\src\queries
&& cd D:\express-apollo-graphql-starter\client\src\queries
&& type nul > index.js
&& npm run dev

Frontend react client app > localhost:3000

• Deploy to heroku:

/package.json:
  "engines": { "node": "v8.9.4" },
  
/server.js...

comment app.use("/graphiql",...

After const PORT = process.env.PORT || 4444;
Add:
const path  = require("path");
if(process.env.NODE_ENV === "production"){
	app.use(express.static('client/build'));
	app.get('*', (req, res ) => { res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); })
}

if have /client/src/index.js change cons client ApolloClient url to the heroku url.

heroku account > settings > Config Vars add : the 4 config vars of variables.env file
