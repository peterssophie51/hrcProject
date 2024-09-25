import React from "react";
import { View, StyleSheet, Dimensions} from "react-native";
//importing components
import { ProgressPill } from "./progressPill";
import { PercentageCardText } from "./percentageText";

//card including percentage bar, percentage and text
export function PercentagePill(props) {
    return(
        <View style={styles.cardContainer}>
            {/*progress pill component*/}
            <ProgressPill 
                type={props.type}
                max={props.max} 
                flowmeters={props.flowmeters}
                usage={props.usage}
            />
            {/*percentage text component*/}
            <PercentageCardText 
                time={props.time}
                type={props.type}
                max={props.max}
                flowmeters={props.flowmeters}
                usage={props.usage}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    cardContainer: { //styling the container for the components
        marginTop: Dimensions.get('window').width * 0.04, 
        width: Dimensions.get('window').width * 0.425,
        height:Dimensions.get('window').height * 0.3, 
        marginLeft:Dimensions.get('window').width * 0.05, 
        borderRadius: 20,
        backgroundColor: '#eeeeee',
        alignContent: 'center'
    }
})