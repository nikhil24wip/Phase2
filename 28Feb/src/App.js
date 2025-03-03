import logo from './logo.svg';
import './App.css';
import First from './components/first/first';
import Second from './components/second/second';
import Third from './components/third/third';
import ButtonEx from './components/buttonex/buttonex';
import Four from './components/fourth/fourth';
import Five from './components/fifth/fifth';
import NameUpdater from './components/fifth/update';
import Counter from './components/counter/counter';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Menu from './components/menu/menu';
import Login from './components/login/login';

function App() {
  return (
    <div className="App">
      {/* <First/> <br/>
      <Second/> <br/>
      <Third firstname = "Nikhil" secondname = "Gupta" company = "Wipro"/> <br/>
      <ButtonEx/> <br/>
      <Four/> <br/>
      <Five/> <br/>
      <NameUpdater/> <br/>
      <Counter/> */}
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/first" element={<First />} />
      <Route path="/second" element={<Second />} />
      <Route path="/third" element={<Third firstname="Nikhil" lastname="Gupta" company="Wipro" />} />
      <Route path="/fourth" element={<Four/>} />
      <Route path="/fifth" element={<Five/>} />
      <Route path="/ButtonEx" element={<ButtonEx/>} />
      <Route path="/update" element={<NameUpdater/>} />
      <Route path="/counter" element={<Counter/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
