import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Register } from './pages/Register/Register';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import BottomBar from './components/BottomBar';
import Leaderboard from './components/Leaderboard';
import AchievementPage from './components/AchievementPage';
import { DailyPlanning } from './pages/DailyPlanning/DailyPlanning';
import AwardImg1 from './assets/award1.png';
import AwardImg2 from './assets/award2.png';
import AwardImg3 from './assets/award3.png';
import AwardImg4 from './assets/award4.png';
import Modal from './components/Modal/Modal';
import { useState, useEffect } from 'react';
import axios from 'axios';

const myBadges = [
  { id: 1, name: 'Green Start', imageUrl: AwardImg1 },
  { id: 2, name: 'Eco Progress', imageUrl: AwardImg2 },
  { id: 3, name: 'Carbon Champion', imageUrl: AwardImg3 },
  { id: 4, name: 'Sustainability Steps', imageUrl: AwardImg4 }
];

const AppContent = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Alice Johnson',
    points: 820,
    dailyAverage: 8,
    avgThisMonth: 12,
    rank: 1
  });

  const showNavOrBottom = location.pathname !== '/register';

  useEffect(() => {
    axios.get(`https://api-7qig.onrender.com/data/Alice%20Johnson`)
      .then((response) => {
        setUserData(response.data);
        console.log(`data: ${response.data}`)
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }
  , []);


  return (
    <>
      {showNavOrBottom && <Navbar setShowModal={setShowModal}/>}
      {showModal && <Modal setShowModal={setShowModal}  />}
      <Routes>
        <Route path='/' element={<Homepage userData={userData} badges={myBadges} />} />
        <Route path='/daily-planning' element={<DailyPlanning />} />
        <Route path='/register' element={<Register />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/achievements' element={<AchievementPage />} />
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
