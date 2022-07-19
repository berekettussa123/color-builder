import "./Select.scss";
import { useState } from "react";

function Select (props) {
  const [selected, setSelected] = useState(null);



  const handleSelection = (option) => {
    setSelected(option);
    // props.onSelection(option);
    console.log("--------yewwwwww")
  }

  // useEffect(() => {
  //   if (selected === null && props.options.length > 0) {
  //     handleSelection(props.options[0]);
  //   }
  // })

  const isSelected = (option) => {
    return selected && selected.value === option.value;
  }

  const gridLength = (len) => {
    if (props.wide) {
      if (len <= 5 ) {
        return String(len);
      } else {
        return "5";
      }
    } else {
      if (len >= 3) {
        return "3";
      } else {
        return "2";
      }
    }
  }

  return (
    <div className="select-container pb-4">
      { props.subtitle ? <h3 style={{color:'white',fontSize:'18px'}} className="subtitle mb-2">{props.subtitle}</h3> : null }
      <div className="modalselect" style={{}}>
        {props.options.map((option) => (
          <>
            <button
              style={{flex:'1',zIndex:''}}
              className={`option${isSelected(option) ? ' selected': ''}  px-4 py-2`}
              key={option.value}
              onClick={() => handleSelection(option)}
            >
              {option.text}
            </button>
          </>
        ))}
      </div>
    </div>
  );
}

export default Select;