import React from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import { CalibriBoldText} from '../fonts/calibriBoldFont'

export function ProgressPill(props) {

    var totalSum = 0
    var totalPercentage = 0
    
    props.flowMeters.forEach(meter => {
        totalSum = totalSum + meter.usage
    })

    if (props.max !== 0) {
        totalPercentage = totalSum/props.max
    }


    return (
        <View style={styles.pillContainer}>
            { props.type == 'totalled' && (
                <View style={[styles.totalContainer, {height: Dimensions.get('window').height * 0.26 * totalPercentage , 
                    marginTop: (Dimensions.get('window').height * 0.26) - (Dimensions.get('window').height * 0.26 * totalPercentage)}]}>
            
                </View>

            )}
            <View style={{marginTop: props.max == 0? 0 :
                (Dimensions.get('window').height * 0.26) - (Dimensions.get('window').height * 0.26 * totalPercentage)}}>
            { props.type === 'proportional' && props.flowMeters.map((item, index) => (
                    <View key={item.key} style={[styles.subContainer, 
                        {height: Dimensions.get('window').height * 0.26 * (item.usage/totalSum), backgroundColor:item.color, 
                            borderTopRightRadius: index == 0 ? 20 : 0, 
                            borderTopLeftRadius: index == 0 ? 20 : 0, 
                            borderBottomLeftRadius: (props.flowMeters.length - 1) == index ? 20 :0, 
                            borderBottomRightRadius: (props.flowMeters.length - 1) == index ? 20 :0 ,
                            backgroundColor: index & 1 ? '#00A7CF' : '#007DA5'}]}>
                        <CalibriBoldText title={index + 1} style={styles.flowMeterLabel}/></View>
                ))} 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pillContainer: {
        height: Dimensions.get('window').height * 0.26,
        width: Dimensions.get('window').width * 0.08,
        backgroundColor: '#95C6DD',
        margin: Dimensions.get('window').height * 0.02,
        borderRadius: 20,
        position: 'absolute'
    },
    totalContainer: {
        width: Dimensions.get('window').width * 0.08,
        backgroundColor: '#00A7CF',
        borderRadius: 20,
        position: 'absolute'
    },
    subContainer: {
        width: Dimensions.get('window').width * 0.08,
        justifyContent: 'center'
    },
    flowMeterLabel: {
        color: 'white', 
        textAlign: 'center', 
    }
})