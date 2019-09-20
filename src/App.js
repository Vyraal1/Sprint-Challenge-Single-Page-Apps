import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Navigation />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/Characters" component={Header} />
    </main>
  );
}
