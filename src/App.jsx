import Display from "./components/display";
import styles from "./App.module.css";
import Buttonscontainer from "./components/Buttonscontainer";
import { useState } from "react";


function App() {
  const [calVal, setCalVal] = useState("");
  const onButttonClick = (buttonText) =>{
    if (buttonText === "c"){
      setCalVal("");
    }else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
      }  else {
          const newDisplayValue = calVal + buttonText;
          setCalVal(newDisplayValue);
        }
      };
     

  return (
  <div className={styles.calculator}>
  <Display displayValue={calVal} ></Display>
  <Buttonscontainer onButtonClick={onButttonClick}
    ></Buttonscontainer>
  </div>
  )
  }

export default App;
