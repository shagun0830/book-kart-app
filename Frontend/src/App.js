import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Footer, Header, Login, Register, ContactUs, About, Shop, Cart, Payment, Success} from "./export"
import { CartProvider } from "react-use-cart"


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes> {/* Swtich tag is replaced by Routes tag */}
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Register" element={<Register/>}/>
          <Route exact path="/ContactUs" element={<ContactUs/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/" element={<CartProvider><Header/></CartProvider>}/>
          <Route exact path="/Shop" element={<CartProvider><Shop/></CartProvider>}/>
          <Route exact path="/Cart" element={<CartProvider><Cart/></CartProvider>}/>
          <Route exact path="/Payment" element={<Payment/>}/>
          <Route exact path="/Success" element={<Success/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
