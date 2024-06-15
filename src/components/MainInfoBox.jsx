/* eslint-disable react/prop-types */
import './MainInfoBox.css'

const MainInfoBox = ({userData}) => {

  return (
    <div className='flex-container info-container'>
      <div className="main-info-left">
        <h1 className='main-info-title'>Scores</h1>
        <h2 className="main-info-total">Total so far: { userData.totalPoints }</h2>
        <h2 className="main-info-avg">Daily average: { userData.dailyAvg }</h2>
        <h2 className="main-info-avg">Average this month: { userData.dailyAvg }</h2>
      </div>
      <div className="main-info-right">
        <img src="/images/circles1.png" alt="progress circle graph" className="info-circles" />
      </div>
    </div>
  )
}

export default MainInfoBox
