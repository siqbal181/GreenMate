/* eslint-disable react/prop-types */
import MainInfoBox from '../components/MainInfoBox'
import './Homepage.css'
import {DailyQuestions} from '../components/DailyQuestions/DailyQuestions'

const Homepage = ({ userData }) => {
  return (
    <div className='page-container'>
      
      <MainInfoBox userData={userData} />
      <DailyQuestions />
    </div>
  )
}

export default Homepage
