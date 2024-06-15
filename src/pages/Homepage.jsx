/* eslint-disable react/prop-types */
import MainInfoBox from '../components/MainInfoBox'
import './Homepage.css'
import {DailyQuestions} from '../components/DailyQuestions/DailyQuestions'
// import AchievementPage from '../components/AchievementPage'

const Homepage = ({ userData }) => {
  return (
    <div className='page-container'>
      
      <MainInfoBox userData={userData} />
      <DailyQuestions />
      {/* <AchievementPage /> */}
    </div>
  )
}

export default Homepage
