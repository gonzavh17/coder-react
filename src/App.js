import "./App.css";
import NavBar from "./components/header/NavBar/NavBar";
import ItemListContainer from "./components/ItemList/ItemListContainer/ItemListContainer";
import Home from "./components/categories/Home/Home";
import All from "./components/categories/All/All";
import GalaxyA from "./components/categories/GalaxyA/GalaxyA";
import GalaxyS from "./components/categories/GalaxyS/GalaxyS";
import GalaxyZ from "./components/categories/GalaxyZ/GalaxyZ";
import Contact from "./components/categories/Contact/Contact";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/Detail/ItemDetailContainer/ItemDetailContainer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/All" element={<All />}></Route>
          <Route path="/GalaxyA" element={<GalaxyA />}></Route>
          <Route path="/GalaxyZ" element={<GalaxyZ />}></Route>
          <Route path="/GalaxyS" element={<GalaxyS />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/ItemDetail" element={<ItemDetailContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
