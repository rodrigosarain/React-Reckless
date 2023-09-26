import { useState } from "react";

export const Home = () => {
  const [counter, funcionCounter] = useState();
  console.log(counter);
  console.log(funcionCounter);

  return (
    <div>
      {/* <h1>{counter}</h1>
      <button onClick={sumar}>Sumar</button> */}
    </div>
  );
};
