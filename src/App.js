
import './App.css';
import AllList from './components/AllList';

// import Data from './components/Data';
import Navbar from "./components/Navbar";
import SliderFirst from './components/SliderFirst';
import TopMovers from './components/TopMovers';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <SliderFirst/>
     <TopMovers/>
     <AllList/>
     
    </div>
  );
}

export default App;
