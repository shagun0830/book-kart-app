import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Navbar,
  Footer,
  Header,
  Login,
  Register,
  ContactUs,
  About,
  Shop,
  Cart,
  Payment,
  Success,
} from "./export";
import { CartProvider } from "react-use-cart";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          {/* Swtich tag is replaced by Routes tag */}
          <Route
            exact
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/contactUs" element={<ContactUs />} />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={
              <CartProvider>
                <Header />
              </CartProvider>
            }
          />
          <Route
            exact
            path="/shop"
            element={
              <CartProvider>
                <Shop />
              </CartProvider>
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <CartProvider>
                <Cart />
              </CartProvider>
            }
          />
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/success" element={<Success />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
