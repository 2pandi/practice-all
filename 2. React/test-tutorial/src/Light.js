import { useState } from "react";

const Light = ({ name }) => {
  const [light, setLight] = useState(false);

  return (
    <div>
      <h1>
        {name} {light ? "on" : "off"}{" "}
      </h1>
      <button onClick={() => setLight(true)} disabled={light ? true : false}>
        ON
      </button>
      <button onClick={() => setLight(false)} disabled={!light ? true : false}>
        OFF
      </button>
    </div>
  );
};
export default Light;
