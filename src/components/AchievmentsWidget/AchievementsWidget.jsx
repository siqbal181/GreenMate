/* eslint-disable react/prop-types */
import "./AchievementsWidget.css"

const AchievementsWidget = ({ badges }) => {
  return (
    <div className="info-container">
      <span>Achivements Overview</span>
      <span>See more</span>
      <div className="badges-container">
        {badges.map((badge, index) => (
          index < 3 && (
            <div key={badge.id} className="badge">
              <img src={badge.imageUrl} alt={badge.name} />
              <span>{badge.name}</span>
            </div>
          )
        ))}
        </div>
    </div>
  )
}

export default AchievementsWidget
