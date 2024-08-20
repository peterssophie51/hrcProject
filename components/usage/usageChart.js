import React, { useState } from "react";
import { LineChart } from "react-native-gifted-charts";
import { Dimensions, View, StyleSheet, Text, Alert } from "react-native";

export function UsageChart(props) {

    return(
        <View style={styles.container}>
            <LineChart 
                style={{zIndex:0}}
                data = {props.currentData} 
                width={Dimensions.get('window').width * 0.75} 
                height={Dimensions.get('window').height * 0.35}
                maxValue={Math.max(...props.currentData.map(item => item.value)) * 1.1} 
                noOfSections={12} 
                initialSpacing={0}
                yAxisTextStyle={{fontSize:12}} 
                xAxisLabelTexts={props.currentLabels}
                xAxisLabelTextStyle={styles.xaxis}
                color={'#00A7CF'} 
                thickness={3}
                showVerticalLines 
                showValuesAsDataPointsText

                dataPointsColor="#00A7CF" 
                focusEnabled 
                textShiftY={-10} 
                textShiftX={-10}
                textColor="black" 
                textFontSize={12} 
                focusedDataPointColor={'#00A7CF'} 
                focusedDataPointRadius={5} 
                showTextOnFocus={true} 
                showDataPointLabelOnFocus 
                showDataPointOnFocus
                delayBeforeUnFocus={5000} 
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: (Dimensions.get('window').width * 0.1) + (Dimensions.get('window').height * 0.11), 
        marginLeft:Dimensions.get('window').width *0.04, 
        zIndex: 0,

    },
    xaxis: {
        fontSize: 12,
        marginLeft:20
    }
})