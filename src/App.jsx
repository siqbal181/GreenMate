import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage userData={userData} />} />
        </Routes>
        <BottomBar />
      </BrowserRouter>
    </>
  );
}

export default App;
