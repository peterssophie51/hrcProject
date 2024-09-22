import React from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
//importing components
import { CalibriBoldText} from '../fonts/calibriBoldFont'

//component showing the pill progress bar
export function ProgressPill(props) {
    var totalSum = 0 
    var totalPercentage = 0

    props.flowmeters.map((meter) => {
        totalSum = totalSum + meter[props.usage] //total sum of usage 
    })

    if (props.max !== 0) { //calculating percentage usage based on max
        totalPercentage = totalSum/props.max
        if (totalPercentage > 1) { //set percenatge to 1 if usage over maximum
            totalPercentage = 1
        }
    }

    return (
        <View style={styles.pillContainer}>
            { props.type == 'totalled' && ( //set height of totalled pill 
                <View style={[styles.totalContainer, {height: Dimensions.get('window').height * 0.26 * totalPercentage , 
                    marginTop: (Dimensions.get('window').height * 0.26) - (Dimensions.get('window').height * 0.26 * totalPercentage)}]}>
                </View>

            )}
            <View style={{marginTop: props.max == 0? 0 :
                (Dimensions.get('window').height * 0.26) - (Dimensions.get('window').height * 0.26 * totalPercentage)}}>
            { props.type === 'proportional' && props.flowmeters.map((item, index) => ( //map through list of flowmeters to create <View> for each flowmeter
                    <View key={item['name']} style={[styles.subContainer, 
                        {height: props.max == 0 || totalPercentage == 1 ? 
                            Dimensions.get('window').height * 0.26 * (item[props.usage]/totalSum) : 
                            Dimensions.get('window').height * 0.26 * (item[props.usage]/props.max), 
                            backgroundColor:item.color, 
                            borderTopRightRadius: index == 0 ? 20 : 0, 
                            borderTopLeftRadius: index == 0 ? 20 : 0, 
                            borderBottomLeftRadius: (props.flowmeters.length - 1) == index ? 20 :0, 
                            borderBottomRightRadius: (props.flowmeters.length - 1) == index ? 20 :0 ,
                            backgroundColor: index & 1 ? '#00A7CF' : '#007DA5'}]}>
                        <CalibriBoldText title={index + 1} style={styles.flowMeterLabel}/></View>
                ))} 
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