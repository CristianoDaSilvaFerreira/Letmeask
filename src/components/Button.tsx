import { useState } from "react";

export function Button() {
  const [counter, setCaunter] = useState(0);

  function increment() {
    setCaunter(counter + 1);
  }
  return (
    <button onClick={increment}>
      {counter}
    </button>
  )
}