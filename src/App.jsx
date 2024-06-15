import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register/Register';
// import { DailyQuestions } from './components/DailyQuestions/DailyQuestions';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import BottomBar from './components/BottomBar';
import Leaderboard from './components/Leaderboard';
import AchievementPage from './components/AchievementPage';

const userData = {
  totalPoints: 100,
  dailyAvg: 10
}

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage userData={userData} />} />
        
          <Route path='/register' element={<Register/>}/>
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/achievements' element={<AchievementPage />} />
        </Routes>
        <BottomBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
