import AppRouter from "components/Router";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn ] = useState(false);
  return (
    <AppRouter isLoggedIn={isLoggedIn} />
  );
}

export default App;
