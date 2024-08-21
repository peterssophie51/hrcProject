import React from "react";
import { View, StyleSheet, Dimensions, Text} from "react-native";
import { ProgressPill } from "./progressPill";
import { PercentageCardText } from "./percentageText";

export function PercentagePill(props) {
    return(
        <View style={styles.cardContainer}>
            <ProgressPill 
                type={props.type}
                max={props.max} 
                flowMeters={props.data}
            />
            <PercentageCardText 
                time={props.time}
                type={props.type}
                max={props.max}
                flowMeters={props.data}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    cardContainer: {
        marginTop: Dimensions.get('window').width * 0.04, 
        width: Dimensions.get('window').width * 0.425,
        height:Dimensions.get('window').height * 0.3, 
        marginLeft:Dimensions.get('window').width * 0.05, 
        borderRadius: 20,
        backgroundColor: '#eeeeee',
        alignContent: 'center'
    }
})