import React, { useState } from "react";
import { LineChart } from "react-native-gifted-charts";
import { Dimensions, View, StyleSheet } from "react-native";

export function RiverFlowChart(props) {
    const data = props.currentData

    return(
        <View style={styles.container}>
            <LineChart 
                data = {data} 
                width={Dimensions.get('window').width * 0.75} 
                height={Dimensions.get('window').height * 0.35}
                maxValue={Math.max(...data.map(item => item.value)) * 1.1}
                noOfSections={12}
                initialSpacing={Dimensions.get('window').width * 0.02}
                yAxisTextStyle={styles.axis}
                xAxisLabelTexts={props.currentLabels}
                xAxisLabelTextStyle={styles.axis}
                color={'#00A7CF'}
                thickness={3}
                dataPointsColor="#00A7CF"
                dataPointsRadius={0}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Dimensions.get('window').width * 0.05, 
        marginLeft:Dimensions.get('window').width *0.04, 
    },
    axis: {
        fontSize: 12
    }
})