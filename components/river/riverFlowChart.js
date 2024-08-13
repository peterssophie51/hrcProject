import React, { useState } from "react";
import { LineChart } from "react-native-gifted-charts";
import { Dimensions, View, StyleSheet, Text, Alert } from "react-native";

export function RiverFlowChart(props) {
    const data = props.currentData

    return(
        <View style={styles.container}>
            <LineChart 
                style={{zIndex:0}}
                data = {data} //set data og graph
                width={Dimensions.get('window').width * 0.75} 
                height={Dimensions.get('window').height * 0.35}
                maxValue={Math.max(...data.map(item => item.value)) * 1.1} //max value of graph is max value of data plus a bit
                noOfSections={12} // number of sections on y axis for numbers
                initialSpacing={0} //spacing between line and y axis
                yAxisTextStyle={styles.axis} //style of labels on y axis
                xAxisLabelTexts={props.currentLabels} //x label text
                xAxisLabelTextStyle={styles.axis} //style of labels on x axis
                color={'#00A7CF'} //color of line
                thickness={3}
                showVerticalLines //show vertical lines
                showValuesAsDataPointsText //when click, show the actual values as the label for data points

                dataPointsColor="#00A7CF" //color of data point on click
                focusEnabled //allow click of data point
                textShiftY={-10} //position data point
                textShiftX={-10} //position data point
                textColor="black" //color of text of data point
                textFontSize={12} 
                focusedDataPointColor={'#00A7CF'} //color of clicked data point
                focusedDataPointRadius={5} 
                showTextOnFocus={true} //show text label of data point on click
                showDataPointLabelOnFocus //show the data point when clicked
                showDataPointOnFocus
                delayBeforeUnFocus={5000} //wait 5000 ms before unfocusing clicked data point
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