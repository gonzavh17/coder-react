import './App.css';
import NavBar from './components/header/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>

      <ItemListContainer/>
    </div>
  );
}

export default App;
