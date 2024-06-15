import { useState, useEffect } from 'react';
import './DailyPlanning.css';

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
  const [completedChecklists, setCompletedChecklists] = useState({});
  const [allCompleted, setAllCompleted] = useState(false);
  const [showSustainabilityChecklist, setShowSustainabilityChecklist] = useState(false);

  // Update allCompleted whenever completedChecklists changes
  useEffect(() => {
    const isAllCompleted = selectedPlans.every(plan => {
      return sustainabilityChecklists[plan].every(item =>
        completedChecklists[plan] && completedChecklists[plan][item]
      );
    });
    setAllCompleted(isAllCompleted);
  }, [completedChecklists, selectedPlans]);

  const handlePlanSelection = (plan) => {
    if (selectedPlans.includes(plan)) {
      setSelectedPlans(selectedPlans.filter(item => item !== plan));
    } else {
      setSelectedPlans([...selectedPlans, plan]);
    }
  };

  const handleCheckboxChange = (plan, item) => {
    const updatedChecklists = { ...completedChecklists };
    if (!updatedChecklists[plan]) {
      updatedChecklists[plan] = {};
    }
    updatedChecklists[plan][item] = !updatedChecklists[plan][item];
    setCompletedChecklists(updatedChecklists);
  };

  const handleSubmitPlans = () => {
    setShowSustainabilityChecklist(true);
  };

  const handleBackToPlanning = () => {
    setSelectedPlans([]);
    setCompletedChecklists({});
    setAllCompleted(false);
    setShowSustainabilityChecklist(false); // Reset back to initial state
  };

  const renderChecklists = () => {
    return selectedPlans.map(plan => (
      <div key={plan}>
        <h3>{plan}</h3>
        <ul>
          {sustainabilityChecklists[plan].map(item => (
            <li key={item}>
              <label>
                <input
                  type="checkbox"
                  checked={completedChecklists[plan] && completedChecklists[plan][item]}
                  onChange={() => handleCheckboxChange(plan, item)}
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div className="page-container daily-planning">
      {!showSustainabilityChecklist ? (
        <div>
          <h2>Daily Planning Checklist</h2>
          <p>Select your daily plans:</p>
          {allPlans.map(plan => (
            <label key={plan.id} className="checkbox-label">
              <input
                type="checkbox"
                id={plan.id}
                checked={selectedPlans.includes(plan.id)}
                onChange={() => handlePlanSelection(plan.id)}
              />
              {plan.label}
            </label>
          ))}
          <br />
          <button onClick={handleSubmitPlans} disabled={selectedPlans.length === 0}>Submit Plans</button>
        </div>
      ) : (
        <div>
          <h2>Sustainability Checklist for Today</h2>
          {renderChecklists()}
          {allCompleted && <p className="completion-message">You have completed everything!</p>}
          <button onClick={handleBackToPlanning}>Change Plans</button>
        </div>
      )}
    </div>
  );
};