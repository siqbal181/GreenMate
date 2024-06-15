import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register/Register';
import { DailyQuestions } from './components/DailyQuestions/DailyQuestions';

function App() {
  return (
    <>
      <BrowserRouter>
        <DailyQuestions/>
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
