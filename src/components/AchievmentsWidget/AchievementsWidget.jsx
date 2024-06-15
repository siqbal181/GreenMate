/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./AchievementsWidget.css";

const AchievementsWidget = ({ badges }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/achievements");
  };

  return (
    <div className="info-container widget-container">
      <span>Achievements Overview</span>
      <span className="see-more-text" onClick={handleNavigate}>See more</span>
      <div className="badges-container">
        {badges.slice(0, 3).map((badge) => (
          <div key={badge.id} className="badge">
            <img src={badge.imageUrl} alt={badge.name} className="badge-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementsWidget;
