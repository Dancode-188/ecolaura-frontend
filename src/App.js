import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import VirtualConsultantPage from "./pages/VirtualConsultantPage";
import DIYResourcesPage from "./pages/DIYResourcesPage";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import "./styles/global.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/products" component={ProductListPage} />
            <Route path="/products/:id" component={ProductDetailPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/consultant" component={VirtualConsultantPage} />
            <Route path="/diy-resources" component={DIYResourcesPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
