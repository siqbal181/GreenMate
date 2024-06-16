/* eslint-disable react/prop-types */
import './Polarbear.css';

const Polarbear = ({ co2Saved }) => {
  // Assuming 1 ton of CO2 saved equates to saving 0.01 polar bears (example conversion)
  const polarBearsSaved = (co2Saved * 0.01).toFixed(2);

  return (
    <div className="polarbear-widget">
      <img src="/images/polar-bear.jpg" alt="Polar Bear" className="polarbear-image" />
      <div className="polarbear-info">
        <h3>Polar Bear Protection</h3>
        <p>You have saved {co2Saved} tons of CO2.</p>
        <p>This is equivalent to saving approximately {polarBearsSaved} polar bears!</p>
      </div>
    </div>
  );
};

export default Polarbear;

