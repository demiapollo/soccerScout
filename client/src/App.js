import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PlayerProfile from "./pages/PlayerProfile";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("jwtToken");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {/* Header Here */}
<PlayerProfile />
          <div>
            <Routes>
              {/* <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/playerProfile/:id" element={<PlayerProfile />} /> */}
            </Routes>
          </div>
          {/* Footer Here */}
        </div>
      </Router>
    </ApolloProvider>
  );
};
export default App;

// Home Page ----- // PlayerList Component
// Sign up Page ----- // SignupForm Component
// profile page ---- // PlayerList (My Players) // PlayerList (Following Playyers)
// Create Player Page ----- // CreatePlayerForm Component
// Search Feature Component ------ // Search Tabs Component // Profile Dropdown Component OR Login/Signup Component

// Tabs Result Page ----- // Tab List Component // PlayerList Component

// Player Profile Page ----- // Player Profile Component // Comment Box Component // Comment List Component // Follow Button Component
