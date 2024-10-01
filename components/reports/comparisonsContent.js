import { View, Text } from "react-native";
import { ComparisonsGraph } from "./comparisonGraph";
import { CheckboxCard } from "./checkBoxCard";

export function ComparisonsContent(props) {
    return (
        <View style={{display: 'flex', flexDirection:'column'}}>
            <ComparisonsGraph />
            <CheckboxCard flowmeters={props.flowmeters} />
        </View>
    )
}