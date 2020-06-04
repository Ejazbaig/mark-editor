import React from "react";

function TextBox(props) {
  return (
    <div>
      <input
        type="text"
        className="textBox"
        onChange={props.handleChange}
        ref={props.inputRef}
      ></input>
    </div>
  );
}

export default TextBox;
