import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import PlayerProfile from "./pages/PlayerProfile";
import Countries from "./pages/Countries";

import { StoreProvider } from "./context";

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

          <StoreProvider>
            <Navbar />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/playerProfile/:playerId"
                  element={<PlayerProfile />}
                />
              </Routes>
            </div>
          </StoreProvider>

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
