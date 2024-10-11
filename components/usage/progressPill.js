import React from "react";
import { useEffect } from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
//importing components
import { CalibriBoldText} from '../fonts/calibriBoldFont'

//component showing the pill progress bar
export function ProgressPill(props) {
    const totalSum = props.flowmeters.reduce((sum, meter) => sum + meter[props.usage], 0);
    const totalPercentage = props.max !== 0 ?  Math.min(totalSum / props.max, 1) : 0;

    return (
        <View style={styles.pillContainer}>
            { props.type == 'totalled' && ( //set height of totalled pill 
                <View style={[styles.totalContainer, {height: Dimensions.get('window').height * 0.26 * totalPercentage , 
                    marginTop: (Dimensions.get('window').height * 0.26) - (Dimensions.get('window').height * 0.26 * totalPercentage)}]}>
                </View>

            )}
            <View style={{marginTop:  0 }}>
            { props.type === 'proportional' && props.flowmeters.map((item, index) => { //map through list of flowmeters to create <View> for each flowmeter
                   return (
                    <View key={index} style={[styles.subContainer, 
                        {height: totalSum > 0 ? (item[props.usage] / totalSum) * Dimensions.get('window').height * 0.26 : 0,
                            backgroundColor:item.color, 
                            borderTopRightRadius: index == 0 ? 20 : 0, 
                            borderTopLeftRadius: index == 0 ? 20 : 0, 
                            borderBottomLeftRadius: (props.flowmeters.length- 1) == index ? 20 : props.flowmeters[index + 1][props.usage] == 0 ? 20 : 0, 
                            borderBottomRightRadius: (props.flowmeters.length - 1) == index ? 20 : props.flowmeters[index + 1][props.usage] == 0 ? 20 : 0,
                            backgroundColor: index & 1 ? '#00A7CF' : '#007DA5'}]}>
                        <CalibriBoldText title={index + 1} style={styles.flowMeterLabel}/></View>
                )})} 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pillContainer: { //styling the container for the pill
        height: Dimensions.get('window').height * 0.26,
        width: Dimensions.get('window').width * 0.08,
        backgroundColor: '#95C6DD',
        margin: Dimensions.get('window').height * 0.02,
        borderRadius: 20,
        position: 'absolute'
    },
    totalContainer: { //styling the container for the totalled view pill
        width: Dimensions.get('window').width * 0.08,
        backgroundColor: '#00A7CF',
        borderRadius: 20,
        position: 'absolute'
    },
    subContainer: { //styling the container for each flowmeter view
        width: Dimensions.get('window').width * 0.08,
        justifyContent: 'center'
    },
    flowMeterLabel: { //styling the label within the value for each flowmeter
        color: 'white', 
        textAlign: 'center', 
    }
})