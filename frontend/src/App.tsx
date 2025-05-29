import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Notifications from "./Notifications";
import AccountNavigation from "./AccountNavigation";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navigation />
          <AccountNavigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
