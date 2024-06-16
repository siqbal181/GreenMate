/* eslint-disable react/prop-types */
import './Polarbear.css';

const Polarbear = () => {
  // Assuming 1 ton of CO2 saved equates to saving 0.01 polar bears (example conversion)

  return (
    <div className="polarbear-widget">
      <img src="/images/polar-bear.jpg" alt="Polar Bear" className="polarbear-image" />
      <div className="polarbear-info">
        <h3>Polar Bear Protection</h3>
        <p>You have saved 0.8 tons of CO2.</p>
        <p>This is equivalent to saving approximately 2 polar bears!</p>
      </div>
    </div>
  );
};

export default Polarbear;

