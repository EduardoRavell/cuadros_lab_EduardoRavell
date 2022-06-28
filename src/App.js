import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Body from './components/Body/Body';
function App() {
  return (
    <div className="App">
      
      <header className="header">
      <NavBar/>
      </header>
      <Body>
        <ItemListContainer titulo="Bienvenidos a CuadrosLab"/>
      </Body>
    </div>
  );
}

export default App;
