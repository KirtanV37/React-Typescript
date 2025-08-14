import { useState } from "react";

const State = () => {
  const [item, setItem] = useState<boolean>(false);

  return (
    <div>
      <h2>{item.toString()}</h2>
      <button onClick={() => setItem(!item)}>Toggle</button>
    </div>
  );
};

export default State;
