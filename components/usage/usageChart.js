import React, { useState, useEffect } from "react";
import { LineChart } from "react-native-gifted-charts";
import { Dimensions, View, StyleSheet } from "react-native";

//component for graph of usage
export function UsageChart(props) {
    const data = props.currentData 
    const [labels, setLabels] = useState([]);

    // recalculate labels when currentLabels or data changes
    useEffect(() => {
        console.log(data);
        if (props.currentLabels === 'sevenDay' || props.currentLabels === 'oneMonth') {
            const newLabels = data.map((item) => {
                var date = new Date(item.time)
                 return date.toLocaleDateString('en-GB').slice(0, 5)
            }) 
            setLabels(newLabels);
        } else {
            setLabels(props.currentLabels || []); // handle cases where currentLabels might be undefined
        }
    }, [props.currentLabels, data]);
    

    return (
        <View style={styles.container}>
            <LineChart 
                style={{ zIndex: 0 }}
                data={data} // Setting data in graph
                width={Dimensions.get('window').width * 0.75} 
                height={Dimensions.get('window').height * 0.35}
                maxValue={Math.max(...data.map(item => item.value)) === 0 ? 10 : Math.max(...data.map(item => item.value)) * 1.1} 
                noOfSections={12} // Sections vertically
                yAxisTextStyle={{ fontSize: 12 }} 
                xAxisLabelTexts={labels}
                xAxisLabelTextStyle={styles.xaxis}
                color={'#00A7CF'} 
                thickness={3}
                showVerticalLines // Vertical lines on graph
                showValuesAsDataPointsText // Show values on click
                dataPointsColor="#00A7CF" 
                focusEnabled // Allow datapoints click
                textShiftY={-10} // Text shift for data point values
                textShiftX={-10} // Text shift for data point values
                textColor="black" 
                textFontSize={12} 
                focusedDataPointColor={'#00A7CF'} 
                focusedDataPointRadius={5} 
                showTextOnFocus={true} 
                showDataPointLabelOnFocus // Show labels on click
                showDataPointOnFocus // Show datapoint circle on click
                delayBeforeUnFocus={5000} // Time before datapoint and label disappear
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { // Styling the container of the graph
        marginTop: (Dimensions.get('window').width * 0.1) + (Dimensions.get('window').height * 0.11), 
        marginLeft: Dimensions.get('window').width * 0.04, 
        zIndex: 0,
    },
    xaxis: { // Styling the text in the x-axis
        fontSize: 12,
        marginLeft: 20
    }
});
