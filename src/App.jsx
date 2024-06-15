import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Register } from './pages/Register/Register';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import BottomBar from './components/BottomBar';
import { DailyPlanning } from './pages/DailyPlanning/DailyPlanning';

const userData = {
  totalPoints: 100,
  dailyAvg: 10,
  monthAvg: 17
}

const AppContent = () => {
  const location = useLocation();

  const showNavOrBottom = location.pathname !== '/register';

  return (
    <>
      {showNavOrBottom && <Navbar />}
      <Routes>
        <Route path='/' element={<Homepage userData={userData} />} />
        <Route path='/daily-planning' element={<DailyPlanning />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      {showNavOrBottom && <BottomBar />}
    </>
  );
};

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
