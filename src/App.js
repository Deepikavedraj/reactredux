// import Navbar from './Navbar';
// import {Routes,Route} from 'react-router-dom';
import Counter from './features/counter/Counter';
import Coin from './features/coin/Coin';
import Theame from './features/theame/Theame';


import './App.css';

function App() {
  return (
    <div className="App">
        {/* <Navbar /> */}
      
      <Coin />
      <Counter />
      <Theame/>
    </div>
  
  //   <Routes>
       
  //   <Route path="/" element={<Navbar/>} />
  //   <Shop/>
  //   <Route path="/ToDo" element={<ToDo/>} />
  //  </Routes>
  );
}

export default App;
