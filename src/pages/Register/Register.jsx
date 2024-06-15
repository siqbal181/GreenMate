import "./Register.css"

export const Register = () => {
  return (
    <>
      <div className="transport-method">
        <p className="transport-question">What is your method of transport?</p>
        <div className="transport-encasing">
          <div className="car-box">
            <h1>🚗</h1>
          </div>
          <div className="bike-box">
            <h1>🚲</h1>
          </div>
          <div className="train-box">
            <h1>🚌</h1>
          </div>
          <div className="walk-box">
            <h1>🚶</h1>
          </div>
        </div>
      </div>
      <div className="shower-or-bath">
        <p className="shower-question">Shower or bath (or neither 🙃)</p>
        <div className="shower-encasing">
        <div className="shower-box">
            <h1>🚿</h1>
          </div>
          <div className="bath-box">
            <h1>🛁</h1>
          </div>
        </div>
      </div>
      <p className="disposable-question">Team disposable?</p>
      <div className="tote-encasing">
        <div className="cup-box">
            <h1>🥤</h1>
          </div>
          <div className="tote-box">
            <h1> 👜</h1>
          </div>
        </div>
    </>
  )
}