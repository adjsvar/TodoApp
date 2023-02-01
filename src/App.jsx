import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Add from './Add';
import './App.css'
import Home from './Home';

function App() { 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/add' element={<Add />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter> 
  )
}

export default App
