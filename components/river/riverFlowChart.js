import React, { useState } from "react";
import { LineChart } from "react-native-gifted-charts";
import { Dimensions, View, StyleSheet, Text, Alert } from "react-native";

export function RiverFlowChart(props) {
    const data = props.currentData

    return(
        <View style={styles.container}>
            <LineChart 
                style={{zIndex:0}}
                data = {data} 
                width={Dimensions.get('window').width * 0.75} 
                height={Dimensions.get('window').height * 0.35}
                maxValue={Math.max(...data.map(item => item.value)) * 1.1} 
                noOfSections={12} 
                initialSpacing={0}
                yAxisTextStyle={styles.axis} 
                xAxisLabelTexts={props.currentLabels}
                xAxisLabelTextStyle={styles.axis}
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
        marginTop: Dimensions.get('window').width * 0.05, 
        marginLeft:Dimensions.get('window').width *0.04, 
    },
    axis: {
        fontSize: 12
    }
})