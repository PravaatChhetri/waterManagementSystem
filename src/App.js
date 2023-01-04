import "./App.css";
import ResponsiveDrawer from "./HeaderNav";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeGrid from "./pages/HomeGrid";
import SCADADisp from "./pages/SCADADisp";
import ValveController from "./pages/ValveController";
import AlarmEvents from "./pages/AlarmEvents";
import EventLog from "./pages/EventLog";
import WaterFlowDisplay from "./pages/WaterFlowDisplay";


function App() {
  
  return (
      <div className="App">
        <Router>
        <ResponsiveDrawer />
        <Routes>
          <Route path="/" element={<HomeGrid/>}/>
          <Route path="/SCADA-Display" element={<SCADADisp/>}/>
          <Route path="/Water-Flow-Display" element={<WaterFlowDisplay/>}/>
          <Route path="/Valve-Controller" element={<ValveController/>}/>
          <Route path="/Alarms-and-Events" element={<AlarmEvents/>}/>
          <Route path="/Event-Log" element={<EventLog/>}/>
          <Route path="/Log-Out" element={<h1 className="text-center">Log Out</h1>}/>
          <Route path="*" element={<h1 className="text-center">404: Not Found</h1>}/>

        </Routes>

        </Router>

      </div>
  );
}

export default App;
