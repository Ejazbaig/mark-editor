import React from "react";
import TextBox from "./TextBox";

function Panel(props) {
  return (
    <>
      <div className="mainDiv">
        <p className="markDownParagraph" ref={props.outputRef}></p>
        <div className="myDiv">
          <TextBox
            handleChange={props.handleChange}
            textValue={props.textValue}
            inputRef={props.inputRef}
          />
          <hr></hr>
          <div className="buttonWrapper">
            <div className="buttonDiv" onClick={props.onBoldClick}>
              <button className="button">B</button>
            </div>
            <div className="buttonDiv" onClick={props.onItalicsClick}>
              <button className="button">I</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Panel;
