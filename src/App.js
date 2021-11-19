// import logo from "./logo.svg";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MenuPage, TransactionPage, ProductPage } from "./pages/index";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/sushi-food" element={<TransactionPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
