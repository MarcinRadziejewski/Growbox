import './AddGrowboxModal.css';
import { useState } from 'react';

export function AddGrowboxModal({ addGrowboxModalOpen, setAddGrowboxModalOpen }) {
  const [newGrowbox, setNewGrowbox] = useState({
    name: "",
    species: "",
    maxTemperature: undefined,
    minTemperature: undefined,
    maxSoilMoisture: undefined,
    minSoilMoisture: undefined,
    maxAirHumidity: undefined,
    minAirHumidity: undefined,
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newGrowbox.maxAirHumidity);
    console.log(newGrowbox.minAirHumidity);
  }
  const [limitQuestionModalOpen, setLimitQuestionModalOpen] = useState(false);
  const [ownTemperatureValuesModalOpen, setOwnTemperatureValuesModalOpen] = useState(false);
  const [ownSoilMoistureValuesModalOpen, setOwnSoilMoistureValuesModalOpen] = useState(false);
  const [ownAirHumidityValuesModalOpen, setOwnAirHumidityValuesModalOpen] = useState(false);
  
  if(addGrowboxModalOpen === true){
    return (
      <div className="overlay" onClick={() => {setAddGrowboxModalOpen(false); setNewGrowbox({...newGrowbox, name: "", species: ""})}}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>

          <form onSubmit={() => {handleSubmit; setAddGrowboxModalOpen(false); setLimitQuestionModalOpen(true);}}>
            <label htmlFor="name">Name your growbox</label>
            <input type="text" onChange={(e) => setNewGrowbox({...newGrowbox, name: e.target.value})} value={newGrowbox.name} name="name" id="name" />
            <label htmlFor="species">Add a species</label>
            <input type="text" onChange={(e) => setNewGrowbox({...newGrowbox, species: e.target.value})} value={newGrowbox.species} name="name" id="name" />
            <input type="submit" value="next" className="submit-btn"/>
          </form>
          </div>
      </div>
  )
  }

  if(limitQuestionModalOpen === true){
  return (
    <div className="overlay" onClick={() => {setLimitQuestionModalOpen(false)}}>
        <div className="modal-container first-question" onClick={e => e.stopPropagation()}>
            <p>Would you like to use default limit values for your plant?</p>
            <div className="btn-container">
              <button id="yes" onClick={() => {setLimitQuestionModalOpen(false); }}>yes</button>
              <button id="no" onClick={() => {setLimitQuestionModalOpen(false); setOwnTemperatureValuesModalOpen(true); }}>no</button>
            </div>
        </div>
    </div>
  )
  }


  if(ownTemperatureValuesModalOpen === true){
    return (
      <div className="overlay" onClick={() => {setOwnTemperatureValuesModalOpen(false); setNewGrowbox({...newGrowbox, maxTemperature: undefined, minTemperature: undefined})}}>
          <div className="modal-container " onClick={e => e.stopPropagation()}>
            
            <form onSubmit={(e) => {handleSubmit(e); setOwnTemperatureValuesModalOpen(false); setOwnSoilMoistureValuesModalOpen(true);}}>
              <label htmlFor="maxTemp">Max temperature</label>
              <input type="text" onChange={(e) => setNewGrowbox({...newGrowbox, maxTemperature: e.target.value})}
              value={newGrowbox.maxTemperature || ""} name="maxTemp" id="maxTemp" />
              <label htmlFor="minTemp">Min temperature</label>
              <input type="text" onChange={(e) => setNewGrowbox({...newGrowbox, minTemperature: e.target.value})} 
              value={newGrowbox.minTemperature || ""} name="minTemp" id="minTemp" />
              <div className="btn-container">
                <input value="back" className="submit-btn"
                onClick={() => {setOwnTemperatureValuesModalOpen(false); setAddGrowboxModalOpen(true);}}>
                </input>
                <input type="submit" value="next" className="submit-btn"/>
              </div>
            </form>
          </div>
      </div>
    )
  }
  if (ownSoilMoistureValuesModalOpen === true){
    return (
      <div className="overlay" onClick={() => {setOwnSoilMoistureValuesModalOpen(false); setNewGrowbox({...newGrowbox, maxSoilMoisture: undefined, minSoilMoisture: undefined})}}>
          <div className="modal-container " onClick={e => e.stopPropagation()}>

            <form onSubmit={(e) => {handleSubmit(e); setOwnSoilMoistureValuesModalOpen(false); setOwnAirHumidityValuesModalOpen(true);}}>
              <label htmlFor="maxTemp">Max soil moisture</label>
              <input type="text" onChange={(e) => setNewGrowbox({...newGrowbox, maxSoilMoisture: e.target.value})}
              value={newGrowbox.maxSoilMoisture || ""} name="maxTemp" id="maxTemp" />
              <label htmlFor="minTemp">Min soil moisture</label>
              <input type="text" onChange={(e) => setNewGrowbox({...newGrowbox, minSoilMoisture: e.target.value})} 
              value={newGrowbox.minSoilMoisture || ""} name="minTemp" id="minTemp" />
              <input type="submit" value="next" className="submit-btn"/>
            </form>

            <div className="btn-container">
              <button onClick={() => {setOwnSoilMoistureValuesModalOpen(false); setOwnTemperatureValuesModalOpen(true);}}>back</button>
            </div>
          </div>
      </div>
    )
  }

  if (ownAirHumidityValuesModalOpen === true){
    return (
      <div className="overlay" onClick={() => {setOwnAirHumidityValuesModalOpen(false); setNewGrowbox({...newGrowbox, maxAirHumidity: undefined, minSoilMoisture: undefined})}}>
          <div className="modal-container " onClick={e => e.stopPropagation()}>

            <form onSubmit={(e) => {handleSubmit(e); setOwnAirHumidityValuesModalOpen(false); /*Tu dodaj żeby tworzyło nowy growbox*/ }}>
              <label htmlFor="maxTemp">Max air humidity</label>
              <input type="text" onChange={(e) => setNewGrowbox({...newGrowbox, maxAirHumidity: e.target.value})}
              value={newGrowbox.maxAirHumidity || ""} name="maxTemp" id="maxTemp" />
              <label htmlFor="minTemp">Min air humidity</label>
              <input type="text" onChange={(e) => setNewGrowbox({...newGrowbox, minAirHumidity: e.target.value})} 
              value={newGrowbox.minAirHumidity || ""} name="minTemp" id="minTemp" />
              <input type="submit" value="next" className="submit-btn"/>
            </form>

            <div className="btn-container">
              <button onClick={() => {setOwnAirHumidityValuesModalOpen(false); setOwnSoilMoistureValuesModalOpen(true);}}>back</button>
            </div>
          </div>
      </div>
    )
  }
  

}


