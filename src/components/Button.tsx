import { useState, useEffect } from "react";

export function Button() {
  const [counter, setCaunter] = useState(0);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  function increment() {
    setCaunter(oldCounter => oldCounter + 1);
    console.log(counter);
  
  }
  return (
    <button onClick={increment}>
      {counter}
    </button>
  )
}