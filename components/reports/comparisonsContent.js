import { View, Text } from "react-native";
import { ComparisonsGraph } from "./comparisonGraph";
import { CheckboxCard } from "./checkBoxCard";
import { ComparisonRadios } from "./comparisonRadios";

export function ComparisonsContent(props) {
    return (
        <View style={{display: 'flex', flexDirection:'column'}}>
            <ComparisonsGraph />
            <CheckboxCard flowmeters={props.flowmeters} />
            <ComparisonRadios />
        </View>
    )
}