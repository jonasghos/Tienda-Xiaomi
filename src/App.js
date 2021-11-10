
import './App.css';
import { NavBar } from './components/NavBar'
import  {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
 
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting = "Hello Coders!!!"/>
    </div>
  );
}

export default App;
