import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register/Register';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import BottomBar from './components/BottomBar';
import { DailyPlanning } from './pages/DailyPlanning/DailyPlanning';

const userData = {
  totalPoints: 100,
  dailyAvg: 10
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage userData={userData} />} />
          <Route path='/daily-planning' element={<DailyPlanning/>} />
          <Route path='/register' element={<Register/>}/>
        </Routes>
        <BottomBar />
      </BrowserRouter>
    </>
  );
}

export default App;
