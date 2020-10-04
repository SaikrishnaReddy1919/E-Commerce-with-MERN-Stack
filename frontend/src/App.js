import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <main>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
        </main>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
