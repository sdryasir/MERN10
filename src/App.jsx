import Header from "./components/Header";
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from "react";

function App() {


  let [num, setNum] = useState(101)

  let handleIncrement = () => {
    if(num>=100) return;
    setNum(num+1)
  }
  let handleDecrement = () => {
    if(num<=80) return;
    setNum(num-1)
  }

  return (
    <>
      <div>
        <p>{num}</p>
        <button disabled={num>=100 ? true : false} onClick={handleIncrement}>+</button>
        <button disabled={num<=80 ? true : false} onClick={handleDecrement}>-</button>
      </div>
    </>
  );
}

export default App;

