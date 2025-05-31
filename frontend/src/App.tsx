import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import AccountNavigation from "./AccountNavigation";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "./Cart/Cart";
import UserSettings from "./User/UserSettings";
import Settings from "./Settings";
function App() {
  const [loading, setLoading] = useState(true);
  const [loadingDone, setLoadingDone] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setLoadingDone(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader />
        ) : (
          <>
            {loadingDone && (
              <>
                {/* <motion.div
                  key="location.pathname"
                  className="slide-in"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 0 }}
                  exit={{ scaleY: 1 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                > */}
                <motion.div
                  key="location.pathname"
                  className="slide-out"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{
                    duration: 1,

                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Navigation />
                  <AccountNavigation />
                  <Cart />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/userSettings" element={<UserSettings />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </motion.div>
                {/* </motion.div> */}
              </>
            )}
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
