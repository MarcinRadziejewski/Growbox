import './TemperatureModal.css'

function TemperatureModal({openModal, setOpenModal, temperatureLimits, setTemperatureLimits}) {
  if(!openModal)
    return null

  let maxValue = temperatureLimits.maxTemperature;
  let minValue = temperatureLimits.minTemperature;


  function saveChanges(maxValue, minValue){
    if (maxValue > minValue){
      setTemperatureLimits({
        maxTemperature: maxValue,
        currentTemperature: temperatureLimits.currentTemperature,
        minTemperature: minValue
      })
      setOpenModal(false);
    }
  }

  return (
  <div className="overlay" onClick={() => setOpenModal(false)}>
  <div className="temperature-modal-container" onClick={e => e.stopPropagation()}>
    <p>Max temperature</p>
    <input type="text" 
    defaultValue={temperatureLimits.maxTemperature} 
    onChange={(e) => maxValue = e.target.value}/>

    <p>Min temperature</p>
    <input type="text" 
    defaultValue={temperatureLimits.minTemperature} 
    onChange={(e) => minValue = e.target.value}/>
    <button className="save-btn" onClick={() => saveChanges(maxValue, minValue)}>save</button>
  </div>
  </div>
  );
}

//sk-09kh6418c5c4e0b01267

export default TemperatureModal;