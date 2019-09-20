# express-apollo-graphql-starter (use null-point-sys/express-apollo-graphql-starter2)

Node JS NPM Windows CMD automation script to run express server in localhost:4444/graphiql browser url with package.json apollo graphql dependencies

(Script de automatización de Node JS NPM en la consola de windows para arrancar servidor express en la url localhost:4444 con package.json con dependencias para apollo-graphql)

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

in localhost:4444/graphiql

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
