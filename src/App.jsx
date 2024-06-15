import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register/Register';
// import { DailyQuestions } from './components/DailyQuestions/DailyQuestions';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import BottomBar from './components/BottomBar';

const userData = {
  totalPoints: 100,
  dailyAvg: 10
}

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage userData={userData} />} />
        
          <Route path='/register' element={<Register/>}/>
        </Routes>
        <BottomBar />
      </BrowserRouter>
    </>
  );
}

export default App;
