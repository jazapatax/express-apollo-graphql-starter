# express-apollo-graphql-starter (use null-point-sys/express-apollo-graphql-starter2)

Node JS NPM Windows CMD automation script to run express server in localhost:4444/graphiql browser url with package.json apollo graphql dependencies and frontend in react in localhos:3000

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
&& npm install -g create-react-app 
&& create-react-app client
&& npm run dev

Frontend react client app > localhost:3000

Backend apollo-graphql > localhost:4444/graphiql

localhost:4444/graphiql > 

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

localhost:4444/graphiql > 

query{
  getAllPublications{
  	_id
  	name
  	category
  	likes
	}
}
