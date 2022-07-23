import "./Select.scss";
import { useEffect, useState } from "react";

function Select (props) {
  const [selected, setSelected] = useState(null);

  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth && window.innerWidth <= 600);
  }, []);

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
        { props.options.map((option) => (
          <>
            {props.on5 === "two"&&<button
              style={{flex:'1',minWidth:'116px',maxWidth:'116px',zIndex:''}}
              className={`option${isSelected(option) ? ' selected': ''}  px-4 py-2`}
              key={option.value}
              onClick={() => handleSelection(option)}
            >
              {option.text}
            </button>}
            {props.on4 === "two"&&<button
              style={{flex:'1',minWidth:'179px',maxWidth:'179px',zIndex:''}}
              className={`option${isSelected(option) ? ' selected': ''}  px-4 py-2`}
              key={option.value}
              onClick={() => handleSelection(option)}
            >
              {option.text}
            </button>}
            {props.on3 === "two"&&<button
              style={{flex:'1',minWidth:'116px',maxWidth:'116px',zIndex:''}}
              className={`option${isSelected(option) ? ' selected': ''}  px-4 py-2`}
              key={option.value}
              onClick={() => handleSelection(option)}
            >
              {option.text}
            </button>}
            {props.on2 === "two"&&<button
              style={{flex:'1',minWidth:'179px',maxWidth:'179px',zIndex:''}}
              className={`option${isSelected(option) ? ' selected': ''}  px-4 py-2`}
              key={option.value}
              onClick={() => handleSelection(option)}
            >
              {option.text}
            </button>}
            {!windowWidth&&props.on5==="one"&&<button
              style={{flex:'1'}}
              className={`option${isSelected(option) ? ' selected': ''}  px-4 py-2`}
              key={option.value}
              onClick={() => handleSelection(option)}
            >
              {option.text}
            </button>}
            {windowWidth&&props.on5==="one"&&<button
              style={{flex:'1',minWidth:'116px',maxWidth:'116px',zIndex:''}}
              className={`option${isSelected(option) ? ' selected': ''}  px-4 py-2`}
              key={option.value}
              onClick={() => handleSelection(option)}
            >
              {option.text}
            </button>}
            {!windowWidth&&props.on4==="one"&&<button
              style={{flex:'1'}}
              className={`option${isSelected(option) ? ' selected': ''}  px-4 py-2`}
              key={option.value}
              onClick={() => handleSelection(option)}
            >
              {option.text}
            </button>}
            {windowWidth&&props.on4==="one"&&<button
              style={{flex:'1',minWidth:'178px',maxWidth:'179px',zIndex:''}}
              className={`option${isSelected(option) ? ' selected': ''}  px-4 py-2`}
              key={option.value}
              onClick={() => handleSelection(option)}
            >
              {option.text}
            </button>}
            {props.on3==="one"&&<button
              style={{flex:'1'}}
              className={`option${isSelected(option) ? ' selected': ''}  px-4 py-2`}
              key={option.value}
              onClick={() => handleSelection(option)}
            >
              {option.text}
            </button>}
            {props.on2==="one"&&<button
              style={{flex:'1'}}
              className={`option${isSelected(option) ? ' selected': ''}  px-4 py-2`}
              key={option.value}
              onClick={() => handleSelection(option)}
            >
              {option.text}
            </button>}
            
          </>
        ))}
      </div>
    </div>
  );
}

export default Select;