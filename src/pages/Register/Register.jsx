import { useState } from 'react';
import "./Register.css";

export const Register = () => {
  const [transportMethods, setTransportMethods] = useState([]);
  const [showerOrBathOptions, setShowerOrBathOptions] = useState([]);
  const [disposableChoices, setDisposableChoices] = useState([]);

  const handleTransportChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setTransportMethods([...transportMethods, value]);
    } else {
      setTransportMethods(transportMethods.filter(item => item !== value));
    }
  };

  const handleShowerOrBathChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setShowerOrBathOptions([...showerOrBathOptions, value]);
    } else {
      setShowerOrBathOptions(showerOrBathOptions.filter(item => item !== value));
    }
  };

  const handleDisposableChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setDisposableChoices([...disposableChoices, value]);
    } else {
      setDisposableChoices(disposableChoices.filter(item => item !== value));
    }
  };

  return (
    <div>
      <p className='page-container register-title'>Registration Final Step</p>
    <form>
      <div className="transport-method">
        <p className="transport-question">What are your methods of transport?</p>
        <div className="transport-encasing">
          <label className="checkbox-label">
            <input type="checkbox" name="transport" value="Car" onChange={handleTransportChange} />
            <span className="emoji">🚗</span> Car
          </label>
          <label className="checkbox-label">
            <input type="checkbox" name="transport" value="Bike" onChange={handleTransportChange} />
            <span className="emoji">🚲</span> Bike
          </label>
          <label className="checkbox-label">
            <input type="checkbox" name="transport" value="Bus" onChange={handleTransportChange} />
            <span className="emoji">🚌</span> Bus
          </label>
          <label className="checkbox-label">
            <input type="checkbox" name="transport" value="Walk" onChange={handleTransportChange} />
            <span className="emoji">🚶</span> Walk
          </label>
        </div>
      </div>
      <div className="shower-or-bath">
        <p className="shower-question">Shower or bath (or neither 🙃)?</p>
        <div className="shower-encasing">
          <label className="checkbox-label">
            <input type="checkbox" name="showerOrBath" value="Shower" onChange={handleShowerOrBathChange} />
            <span className="emoji">🚿</span> Shower
          </label>
          <label className="checkbox-label">
            <input type="checkbox" name="showerOrBath" value="Bath" onChange={handleShowerOrBathChange} />
            <span className="emoji">🛁</span> Bath
          </label>
        </div>
      </div>
      <div className="disposable-choice">
        <p className="disposable-question">Team disposable?</p>
        <div className="disposable-encasing">
          <label className="checkbox-label">
            <input type="checkbox" name="disposable" value="Cup" onChange={handleDisposableChange} />
            <span className="emoji">🥤</span> Cup
          </label>
          <label className="checkbox-label">
            <input type="checkbox" name="disposable" value="Tote Bag" onChange={handleDisposableChange} />
            <span className="emoji">👜</span> Tote Bag
          </label>
        </div>
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
    </div>
  );
};
