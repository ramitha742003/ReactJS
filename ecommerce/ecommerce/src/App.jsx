import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
//import Header from "./components/Header";
import Nav from "./components/Nav";
import Male from "./components/Male";
import Female from "./components/Female";
import Kids from "./components/Kids";
import Jewellery from "./components/Jewellery";
import Electronics from "./components/Electronics";
import Cart from "./components/Cart";
import "./App.css";
function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav cartdata={cart} />}>
            <Route
              path="/Male"
              element={<Male cartdata={cart} add={setCart} />}
            />
            <Route
              path="/Female"
              element={<Female cartdata={cart} add={setCart} />}
            />
            <Route
              path="/Kids"
              element={<Kids cartdata={cart} add={setCart} />}
            />
            <Route
              path="/Jewellery"
              element={<Jewellery cartdata={cart} add={setCart} />}
            />
            <Route
              path="/Electronics"
              element={<Electronics cartdata={cart} add={setCart} />}
            />
            <Route
              path="/Cart"
              element={<Cart cartdata={cart} remove={setCart} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
