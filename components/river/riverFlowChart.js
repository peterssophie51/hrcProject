import React, { useState, useEffect, useMemo } from "react";
import { LineChart } from "react-native-gifted-charts";
import { Dimensions, View, StyleSheet } from "react-native";
import { CalibriText } from "../fonts/calibriFont";

//graph shown on the river page
export function RiverFlowChart(props) {
    const data = useMemo(() => {
        return props.currentData.map((item) => {
            const time = new Date(item.time);
            const timeLabel = props.currentLabels[0] === '00:00'
                ? time.toLocaleDateString('en-GB') + ', ' + time.toLocaleTimeString()
                : props.currentLabels[0] === 'JAN' ? time.toLocaleDateString('en-GB').slice(3,10) 
                : time.toLocaleDateString('en-GB').slice(0,10)
            
            // memoized component for dataPointLabel
            const dataPointLabelComponent = () => (
                <View style={styles.label}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <CalibriText title={item.value /1000} style={{ fontSize: 17 }} />
                        <CalibriText title="M" style={{ fontSize: 15, lineHeight: 22 }} />
                        <CalibriText title="3" style={{ fontSize: 13 }} />
                        <CalibriText title="/S" style={{ fontSize: 15, lineHeight: 22 }} />
                    </View>
                    <CalibriText title={timeLabel} />
                </View>
            );

            return {
                ...item,
                value: item.value /1000,
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
            setLabels(props.currentLabels || []); // handle cases where currentLabels might be undefined
        }
    }, [props.currentLabels, props.currentData]);

    const flowAtRestrictions = data.map((item) => {
        return { value: props.flowAtRestriction };
    });

    
    return(
        <View style={styles.container}>
            <LineChart 
                style={{zIndex:0}}
                data = {data} //setting data in graph
                data2={flowAtRestrictions}
                width={Dimensions.get('window').width * 0.75} 
                height={Dimensions.get('window').height * 0.35}
                maxValue={Math.max(...data.map(item => item.value)) == 0 ? 10 : Math.max(...data.map(item => item.value), ...flowAtRestrictions.map(item => item.value)) * 1.1} 
                noOfSections={12} //sections verticlaly
                yAxisTextStyle={styles.axis} 
                xAxisLabelTexts={labels}
                xAxisLabelTextStyle={styles.axis}
                color1={'#00A7CF'} 
                color2={'#CE202F'}
                initialSpacing={50} //spacing between first value and y axis
                thickness={3}
                showVerticalLines //vertical lines on graph

                dataPointsColor1="#00A7CF"
                dataPointsColor2="#CE202F"
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

                delayBeforeUnFocus={5000} //time before datatpoint and label doesnt show
                dataPointLabelShiftX={Dimensions.get('window').width * -0.115}
                dataPointLabelShiftY={-45}
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
    },
    label: {
        justifyContent: 'center', 
        alignItems: 'center', // Center horizontally
        borderRadius: 0, 
        padding: 5,
        backgroundColor: 'white',
        width: Dimensions.get('window').width * 0.36 // add padding
    }
})