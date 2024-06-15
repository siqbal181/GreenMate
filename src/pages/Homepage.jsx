/* eslint-disable react/prop-types */
import MainInfoBox from '../components/MainInfoBox'
import './Homepage.css'
import { DailyQuestions } from '../components/DailyQuestions/DailyQuestions'
import AchievmentsWidget from '../components/AchievmentsWidget/AchievementsWidget'

const Homepage = ({ userData, badges }) => {
  return (
    <div className='page-container'>
      
      <MainInfoBox userData={userData} />
      <DailyQuestions />
      <AchievmentsWidget badges={badges} />
    </div>
  )
}

export default Homepage
