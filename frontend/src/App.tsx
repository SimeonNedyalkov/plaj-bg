import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Notifications from "./Notifications";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </div>
  );
}

export default App;
