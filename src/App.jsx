import './App.scss';
import Header from './Header';
import Body from './Body';
import { ListProvider } from './Context/ListContext';


function App() {
  return (
    <div className="App">
      <ListProvider>
        <Header/>
        <Body/>
      </ListProvider>
    </div>
  );
}

export default App;
