import AppRouter from "components/Router";
import { useEffect, useState } from "react";
import { authService, onAuthStateChangedFbase } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn ] = useState(false);
  
  useEffect(() => {
    onAuthStateChangedFbase(authService, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, []);

  return (
    <>
    {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
    </>
  );
}

export default App;

