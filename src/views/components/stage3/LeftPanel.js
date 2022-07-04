import { useState } from "react";

import OptionAccordion from "../../components/ui/OptionAccordion";
import Select from "../../components/ui/Select";
import SelectInput from "../../components/ui/SelectInput";
import SelectColor from "../../components/ui/SelectColor";
import ColorCircle from "../../components/ui/ColorCircle";

function LeftPanel(props) {
  const [state, setState] = useState({});

  const setOptions = (value, option) => {
    const newState = {
      ...state,
      [value]: option,
    }
    setState(newState);
  }
  return (
    <div style={{marginTop:'5rem'}}>
      <OptionAccordion
        title="Mixed Options"
        stage={props.stage}
        selectedOption={
          <ColorCircle
            color={state.colorOption && state.colorOption.value}
          />
        }
      >
        <SelectInput
          subtitle="Text"
          onSelection={(option) => setOptions("textOption", option)}
        />
        <SelectColor
          subtitle="Color"
          colors={[
            { value: "#C62828" },
            { value: "#AD1457" },
            { value: "#6A1B9A" },
            { value: "#4527A0" },
            { value: "#283593" },
            { value: "#1565C0" },
            { value: "#0277BD" },
            { value: "#00838F" },
            { value: "#00695C" },
            { value: "#2E7D32" },
            { value: "#C62828" },
            { value: "#AD1457" },
            { value: "#6A1B9A" },
            { value: "#4527A0" },
            { value: "#283593" },
            { value: "#1565C0" },
            { value: "#0277BD" },
            { value: "#00838F" },
            { value: "#00695C" },
            { value: "#2E7D32" },
          ]}
          onSelection={(option) => setOptions("colorOption", option)}
        />
        <Select
          subtitle="Selection"
          options={[
            {
              text: "Option1",
              value: 1
            },
            {
              text: "Option2",
              value: 2
            }
          ]}
          onSelection={async (option) => setOptions("selectOption", option)}
        />
      </OptionAccordion>
    </div>
  )
}

export default LeftPanel;