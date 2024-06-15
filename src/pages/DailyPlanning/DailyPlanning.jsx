import{ useState } from 'react';
import "./DailyPlanning.css";

const sustainabilityChecklists = {
  'go to work': ['Walk to work', 'Bring reusable cup for coffee', 'Use public transportation'],
  'go shopping': ['Use reusable bags', 'Choose locally sourced products', 'Avoid single-use plastics'],
  'take a shower': ['Shower less than 5 minutes', 'Use eco-friendly shower products', 'Turn off water when not needed'],
  'work from home': ['Use natural light instead of artificial', 'Minimize paper usage', 'Unplug unused electronics']
};

const allPlans = [
  { id: 'go to work', label: 'Go to work' },
  { id: 'go shopping', label: 'Go shopping' },
  { id: 'take a shower', label: 'Take a shower' },
  { id: 'work from home', label: 'Work from home' }
];

export const DailyPlanning = () => {
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handlePlanSelection = (plan) => {
    if (selectedPlans.includes(plan)) {
      setSelectedPlans(selectedPlans.filter(item => item !== plan));
    } else {
      setSelectedPlans([...selectedPlans, plan]);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const renderChecklists = () => {
    return selectedPlans.map(plan => (
      <div key={plan}>
        <h3>{plan}</h3>
        <ul>
          {sustainabilityChecklists[plan].map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ));
  };

  const handleCheckboxChange = (event) => {
    const { id } = event.target;
    handlePlanSelection(id);
  };

  return (
    <div className="page-container daily-planning">
      {!submitted ? (
        <div>
          <h2>Daily Planning Checklist</h2>
          <p>Select your daily plans:</p>
          {allPlans.map(plan => (
            <label key={plan.id}>
              <input
                type="checkbox"
                id={plan.id}
                checked={selectedPlans.includes(plan.id)}
                onChange={handleCheckboxChange}
              />
              {plan.label}
            </label>
          ))}
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <h2>Sustainability Checklist for Today</h2>
          {renderChecklists()}
        </div>
      )}
    </div>
  );
};
