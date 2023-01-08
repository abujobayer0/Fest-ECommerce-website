import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import NotFoundPage from "./components/Not Found Page/NotFoundPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
