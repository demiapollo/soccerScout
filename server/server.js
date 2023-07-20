const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const path = require("path"); // do we need this one?

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// // starting the server
// const startServer = async () => {
//   await server.start();

//   // Gql requests coming into our express server will be forwarded to our Apollo Server
//   // this creates an endpoint to GraphQL for our server
//   server.applyMiddleware({ app });

//   app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
// };

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer();

// startServer();
