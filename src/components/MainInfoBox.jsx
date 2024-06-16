/* eslint-disable react/prop-types */
import './MainInfoBox.css'

const MainInfoBox = ({userData}) => {
  const firstName = userData.name;
  console.log(firstName.split(""))
  return (
    <div className='flex-container info-container'>
      <div className="main-info-left">
        <h1 className='main-info-title'>Hi {(userData.name).split(" ")[0]}!</h1>
        <h2 className="main-info-total">Total so far: { userData.points }</h2>
        <h2 className="main-info-avg">Daily average: { userData.dailyAverage }</h2>
        <h2 className="main-info-avg">Avg this month: { userData.avgThisMonth }</h2>
      </div>
      <div className="main-info-right">
        <img src="/images/circles1.png" alt="progress circle graph" className="info-circles" />
      </div>
    </div>
  )
}

export default MainInfoBox
