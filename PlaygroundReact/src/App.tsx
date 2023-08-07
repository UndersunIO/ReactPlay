import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <p>{count}</p>
      </nav>
      <main>
        <h1>Hello Vite + ReactTS!</h1>
      </main>
    </>
  );
}
export default App;
