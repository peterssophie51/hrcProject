import React from "react";
import { View, StyleSheet, Dimensions} from "react-native";
//importing components
import { ProgressPill } from "./progressPill";
import { PercentageCardText } from "./percentageText";
import { CalibriBoldText } from "../fonts/calibriBoldFont";

//card including percentage bar, percentage and text
export function PercentagePill(props) {
    return(
        <View style={styles.container}>
        <CalibriBoldText style={styles.title} title={props.title} />
        <View>
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
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        marginTop: Dimensions.get('window').width * 0.04, 
        width: Dimensions.get('window').width * 0.425,
        height:Dimensions.get('window').height * 0.36, 
        borderRadius: 20,
        backgroundColor: '#eeeeee',
        alignContent: 'center',
        marginLeft:Dimensions.get('window').width * 0.05, 
        
    },
    title: {
        fontSize: 25,
        marginTop: Dimensions.get('window').width * 0.03,
        textAlign: 'center'
    }
})