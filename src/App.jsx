import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/register' element={<Register/>}/>
          {/* <Route path='/' element={<HomePage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
