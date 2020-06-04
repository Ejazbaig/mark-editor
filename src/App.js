import React, { useState, useRef } from "react";
import "./App.css";
import Panel from "./Components/Panel";

function App() {
  const [bold, setBold] = useState([false]);
  const [italized, setItalized] = useState([false]);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  const handleChange = (e) => {
    const input = inputRef.current.value;
    const output = outputRef.current.innerText;
    if (input.length > output.length) {
      const newText = input.slice(output.length);
      formatText(newText);
    } else {
      transferText();
    }
  };

  const onBoldClick = (event) => {
    event.target.setAttribute("class", !bold ? "selected" : "");
    if (!bold) {
      outputRef.current.innerHTML += "<strong></strong>";
    }
    setBold(!bold);
    inputRef.current.focus();
  };
  const onItalicsClick = (event) => {
    event.target.setAttribute("class", !italized ? "selected" : "");
    if (!italized) {
      outputRef.current.innerHTML += "<i></i>";
    }
    setItalized(!italized);
    inputRef.current.focus();
  };
  const formatText = (text) => {
    switch (true) {
      case bold:
        let allBolded = outputRef.current.getElementsByTagName("strong");
        let lastBolded = allBolded[allBolded.length - 1];
        lastBolded.innerText += text;
        break;
      case italized:
        let allItalized = outputRef.current.getElementsByTagName("i");
        let lastItalized = allItalized[allItalized.length - 1];
        lastItalized.innerText += text;
        break;
      default:
        outputRef.current.innerHTML += text;
        break;
    }
  };
  const transferText = () => {
    const input = inputRef.current.value;
    const output = outputRef.current.innerHTML;
    let inputCounter = input.length - 1,
      outputCounter = output.length - 1,
      isTag = false;
    while (outputCounter > -1) {
      if (output[outputCounter] === ">") {
        isTag = true;
        outputCounter -= 1;
        continue;
      }
      if (isTag) {
        isTag = output[outputCounter] !== "<";
        outputCounter -= 1;
        continue;
      }
      if (inputCounter <= -1) {
        outputRef.current.innerHTML = outputRef.current.innerHTML.slice(
          outputCounter + 1
        );
        break;
      } else {
        let temp = outputRef.current.innerHTML;
        temp =
          temp.slice(0, outputCounter) +
          input[inputCounter] +
          temp.slice(outputCounter + 1);
        outputRef.current.innerHTML = temp;
        inputCounter -= 1;
        outputCounter -= 1;
      }
    }
  };

  return (
    <Panel
      handleChange={handleChange}
      onBoldClick={onBoldClick}
      onItalicsClick={onItalicsClick}
      outputRef={outputRef}
      inputRef={inputRef}
    />
  );
}

export default App;
