import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./components/CheckOutPage";
import Home from "./components/Home/Home";
import NotFoundPage from "./components/Not Found Page/NotFoundPage";
import ProductDetailpage from "./components/productDetailsPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="products/:id" element={<ProductDetailpage />}></Route>
        <Route path="checkout/:id" element={<Checkout />}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
