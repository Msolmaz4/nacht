

import './App.css';

import Cards from './components/Card/Cards';

import NavBar from './components/NavBar';
import Search from './components/Search'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Search/>
    
     <Cards/>
    </div>
  );
}

export default App;
