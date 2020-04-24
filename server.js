const express  = require("express");
const path  = require("path"); // to heroku deploy

// Connect to Atlas remote mongo database:
     const mongoose = require("mongoose");
     require("dotenv").config({ path: "variables.env" });
     mongoose
     .connect(process.env.MONGO_URI, { useNewUrlParser: true })
     .then(() => console.log("Atlas DB connected"))
     .catch(err => console.error(err));
// end Connect to Atlas remote mongo database

// models (mongoose schemas):
const Publication = require("./models/Publication");
const User        = require("./models/User");
// end models (mongoose schemas):

// GraphQL-Express middleware
const bodyParser = require("body-parser");
const { graphiqlExpress, graphqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const { typeDefs }  = require("./schema");
const { resolvers } = require("./resolvers");
const schema        = makeExecutableSchema({ typeDefs, resolvers });  // Create schema
// end GraphQL-Express middleware

const app = express();
   
// Create GraphiQL application
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
// Connect schemas with GraphQL
app.use("/graphql",  bodyParser.json(), graphqlExpress({ schema, context: { Publication, User } }) );

// vanilla routes
app.get('/script.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/script.js'));
});

const PORT = process.env.PORT || 4444;

/* if(process.env.NODE_ENV === "production"){
	app.use(express.static('client/build'));
	app.get('*', (req, res ) => { res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); })
} */

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
