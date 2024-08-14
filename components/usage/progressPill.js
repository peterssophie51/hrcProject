import React from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";

export function ProgressPill(props) {
    const type ='proportional'
    let totalPercentage = 0.7
    const max = 20

    const items=[{value: 'Flowmeter One', usage: 30, color: 'pink'}, {value:'Flowmeter One', usage: 40, color:'orange'}]

    if (type === 'proportional') {
        let totalSum = 0

        props.flowMeters.forEach(meter => {
            totalSum = totalSum + meter.usage
        })
    
        totalPercentage = totalSum/max
    }

    return(
        <View style={styles.pillContainer}>
            <View style={[styles.totalContainer, {height: Dimensions.get('window').height * 0.26 * totalPercentage , 
                marginTop: (Dimensions.get('window').height * 0.26) - (Dimensions.get('window').height * 0.26 * totalPercentage)}]}>
            </View>
            <View style={{marginTop: (Dimensions.get('window').height * 0.26) - (Dimensions.get('window').height * 0.26 * totalPercentage)}}>
            { type === 'proportional' && items.map((item, index) => (
                    <View style={[styles.subContainer, {height: Dimensions.get('window').height * 0.26 * (item.usage/max), backgroundColor:item.color}]}></View>
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
        borderRadius: 20
    }
})