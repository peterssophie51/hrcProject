import React, { useState, useEffect, useMemo } from "react";
import { LineChart } from "react-native-gifted-charts";
import { Dimensions, View, StyleSheet, Text } from "react-native";
import { CalibriText } from "../fonts/calibriFont";

//component for graph of usage
export function UsageChart(props) {
    const data = useMemo(() => {
        return props.currentData.map((item) => {
            const time = new Date(item.time);
            const timeLabel = (props.currentLabels[0] === '01:00')
                ? time.toLocaleDateString() + ', ' + time.toLocaleTimeString()
                : props.currentLabels[0] === 'JAN' ? time.toLocaleDateString().slice(3,10) 
                : time.toLocaleDateString().slice(0,10)
            
            // memoized component for dataPointLabel
            const dataPointLabelComponent = () => (
                <View style={styles.label}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <CalibriText title={item.value} style={{ fontSize: 17 }} />
                        <CalibriText title="M" style={{ fontSize: 15, lineHeight: 22 }} />
                        <CalibriText title="3" style={{ fontSize: 13 }} />
                    </View>
                    <CalibriText title={timeLabel} />
                </View>
            );

            return {
                ...item,
                dataPointLabelComponent
            };
        });
    }, [props.currentData, props.currentLabels]);


    const [labels, setLabels] = useState([]);

    // recalculate labels when currentLabels or data changes
    useEffect(() => {
        if (props.currentLabels === 'sevenDay' || props.currentLabels === 'oneMonth') {
            const newLabels = data.map((item) => {
                var date = new Date(item.time)
                 return date.toLocaleDateString('en-GB').slice(0, 5)
            }) 
            setLabels(newLabels);
        } else {
            setLabels(props.currentLabels); // handle cases where currentLabels might be undefined
        }
    }, [props.currentLabels, data]);
    

    return (
        <View style={styles.container}>
            <LineChart 
                style={{ zIndex: 0 }}
                data={data} //setting data in graph
                width={Dimensions.get('window').width * 0.75} 
                height={Dimensions.get('window').height * 0.35}
                maxValue={Math.max(...data.map(item => item.value)) === 0 ? 10 : Math.max(...data.map(item => item.value)) * 1.1} 
                noOfSections={10} // sections vertically
                yAxisTextStyle={{ fontSize: 12 }} 
                xAxisLabelTexts={labels}
                xAxisLabelTextStyle={styles.xaxis}
                color={'#00A7CF'} 
                initialSpacing={50}
                thickness={3}
                showVerticalLines //vertical lines on graph

                dataPointsColor="#00A7CF" 
                dataPointsWidth={10}
                dataPointsHeight={10}
                focusEnabled //allow datapoints click
                textShiftY={-10} //text shift for data point values
                textShiftX={-10} //text shift for data point values
                textColor="black" 
                textFontSize={12} 
                focusedDataPointColor={'#00A7CF'} 
                focusedDataPointRadius={5} 
                showTextOnFocus={true} 
                showDataPointLabelOnFocus // show labels on click
                
                delayBeforeUnFocus={10000} // time before datapoint and label disappear
                dataPointLabelShiftX={Dimensions.get('window').width * -0.115} //move labels for datapoints to the left
                dataPointLabelShiftY={-45} //move labels for datapoints up
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { // Styling the container of the graph
        marginTop: Dimensions.get('window').height * 0.01 , 
        marginLeft: Dimensions.get('window').width * 0.03, 
        zIndex: 0,
    },
    xaxis: { // styling the text in the x-axis
        fontSize: 12,
    },
    label: {
        justifyContent: 'center', 
        alignItems: 'center', // Center horizontally
        borderRadius: 0, 
        padding: 5,
        backgroundColor: 'white',
        width: Dimensions.get('window').width * 0.36 // add padding
    }
});
