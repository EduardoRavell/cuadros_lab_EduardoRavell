import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Body from './components/Body/Body';
function App() {
  return (
    <div className="App">
      
      <header className="">
      <NavBar/>
      </header>
      <Body>
        <ItemListContainer/>
      </Body>
    </div>
  );
}

export default App;
