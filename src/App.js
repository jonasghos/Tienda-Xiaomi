
import './App.css';
import { NavBar } from './components/NavBar'
import  {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import { ItemCount } from './components/ItemListContainer/ItemCount';
 
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting = "Hello Coders!!!"/>

      <ItemCount/>
    </div>
  );
}

export default App;
