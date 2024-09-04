import React, { useState } from "react";
import { LineChart } from "react-native-gifted-charts";
import { Dimensions, View, StyleSheet } from "react-native";

//graph shown on the river page
export function RiverFlowChart(props) {
    const data = props.currentData

    return(
        <View style={styles.container}>
            <LineChart 
                style={{zIndex:0}}
                data = {data} //setting data in graph
                width={Dimensions.get('window').width * 0.75} 
                height={Dimensions.get('window').height * 0.35}
                maxValue={Math.max(...data.map(item => item.value)) * 1.1} 
                noOfSections={12} //sections verticlaly
                initialSpacing={0} //spacing between first value and y axis
                yAxisTextStyle={styles.axis} 
                xAxisLabelTexts={props.currentLabels}
                xAxisLabelTextStyle={styles.axis}
                color={'#00A7CF'} 
                thickness={3}
                showVerticalLines //vertical lines on graph
                showValuesAsDataPointsText //show values on click

                dataPointsColor="#00A7CF" 
                focusEnabled //allow datapoints click
                textShiftY={-10} //text shift for data point values
                textShiftX={-10} //text shift for data point values
                textColor="black" 
                textFontSize={12} 
                focusedDataPointColor={'#00A7CF'} 
                focusedDataPointRadius={5} 
                showTextOnFocus={true} 
                showDataPointLabelOnFocus //show labels on click
                showDataPointOnFocus //show datapoint circle on click
                delayBeforeUnFocus={5000} //time before datatpoint and label doesnt show
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: { //styling the contaienr of the river flow chart
        marginTop: Dimensions.get('window').width * 0.05, 
        marginLeft:Dimensions.get('window').width *0.04, 
    },
    axis: { ///stylig the axis
        fontSize: 12
    }
})