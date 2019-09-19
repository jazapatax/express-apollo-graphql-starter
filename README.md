# express-apollo-graphql-starter

windows cmd automation script:

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
