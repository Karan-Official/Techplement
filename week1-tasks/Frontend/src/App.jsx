import './App.css';
import Home from './Pages/Home';
import About from './Pages/about';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  )
}

export default App
