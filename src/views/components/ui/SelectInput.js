import "./SelectInput.scss";
import { useState } from "react";

function SelectInput(props) {
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    setInput(value);
    props.onSelection(value);
  }

  return (
    <div className="select-input-container mb-4">
      { props.subtitle ? <h3 className="subtitle mb-2">{props.subtitle}</h3> : null }
      <div className="input-container">
        <input
          placeholder="Enter your text..."
          type="text"
          value={input}
          onChange={(e) => handleInput(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SelectInput;