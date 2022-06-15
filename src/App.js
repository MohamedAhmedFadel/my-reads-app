import { BrowserRouter, Routes, Route } from "react-router-dom"
 import './App.css';
import Home from "./component/home";
import Search from "./component/search";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search />} />
         
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
