import "./SelectColor.scss";
import { useState } from "react";

function SelectColor (props) {
  const [selected, setSelected] = useState(null);

  const handleSelection = (color) => {
    setSelected(color);
    props.onSelection(color);
  }

  // useEffect(() => {
  //   if (selected === null && props.colors.length > 0) {
  //     handleSelection(props.colors[0]);
  //   }
  // })

  const isSelected = (option) => {
    return selected && selected.value === option.value;
  }

  return (
    <div className="select-container mb-4">
      { props.subtitle ? <h3 className="subtitle mb-2">{props.subtitle}</h3> : null }
      <div className={`grid grid-cols-7 gap-2.5`}>
        {props.colors.map((color) => (
          <>
            <button
              className={`color${isSelected(color) ? ' selected': ''}`}
              style={{ backgroundColor: color.value }}
              key={color.value}
              onClick={() => handleSelection(color)}
            ></button>
          </>
        ))}
      </div>
    </div>
  );
}

export default SelectColor;