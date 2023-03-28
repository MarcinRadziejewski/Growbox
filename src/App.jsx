import './App.css';
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { MyGrowboxes } from './MyGrowboxes';
import { Tomato } from './Tomato';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/MyGrowboxes" element={<MyGrowboxes />}/>
      <Route path="/MyGrowboxes/:Tomato" element={<Tomato />}/>
    </Routes>
  )
}

export default App;
