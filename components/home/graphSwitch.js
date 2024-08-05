import React from "react";
import SwitchSelector from "react-native-switch-selector";

export function GraphSwitch() {
    const options = [
        { label: "01:00", value: "1" },
        { label: "01:30", value: "1.5" },
        { label: "02:00", value: "2" }
      ];
    return(
        <SwitchSelector
  options={options}
  initial={0}
  onPress={value => console.log(`Call onPress with value: ${value}`)}
/>
    )
}