import { Dimensions, View, StyleSheet } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { useState, useEffect } from "react";
import { color } from "@rneui/base";

export function ComparisonsGraph(props) {
    const [labels, setLabels] = useState([]);
    const [data, setdata] = useState( [{
        data: []
    }])

    useEffect(() => {
        console.log('blah')
        const newData = []
        props.selectedData.map((item) => {
            if (item == 'Total Water Usage') {
                if (props.currentLabels[0] == '00:00') {
                    newData.push(
                        {
                            data: props.totalWaterUsage[0]
                        }
                    )
                } else if (props.currentLabels == 'sevenDay') {
                    newData.push(
                        {
                            data: props.totalWaterUsage[1],
                        }
                    )
                } else if (props.currentLabels == 'oneMonth') {
                    newData.push(
                        {
                            data: props.totalWaterUsage[2]
                        }
                    )
                } else if (props.currentLabels[0] == 'JAN') {
                    newData.push(
                        {
                            data: props.totalWaterUsage[3]
                        }
                    )
                }
            } else if (item == 'River Flow') {
                if (props.currentLabels[0] == '00:00') {
                    newData.push(
                        {
                            data: props.riverFlow[0]
                        }
                    )
                } else if (props.currentLabels == 'sevenDay') {
                    newData.push(
                        {
                            data: props.riverFlow[1]
                        }
                    )
                } else if (props.currentLabels == 'oneMonth') {
                    newData.push(
                        {
                            data: props.riverFlow[2]
                        }
                    )
                } else if (props.currentLabels[0] == 'JAN') {
                    newData.push(
                        {
                            data: props.riverFlow[3]
                        }
                    )
                }
            } else if (props.flowmeters.find(obj => obj['name'] == item)) {
                const index = props.flowmeters.findIndex(obj => obj['name'] === item);
                if (props.currentLabels[0] == '00:00') {
                    newData.push(
                        {
                            data: props.flowmeters[index]['data'][0]
                        }
                    )
                } else if (props.currentLabels[0] == 'JAN') {
                    newData.push(
                        {
                            data: props.flowmeters[index]['data'][3]
                        }
                    )
                } else if (props.currentLabels == 'sevenDay') {
                    newData.push(
                        {
                            data: props.flowmeters[index]['data'][1]
                        }
                    )
                } else if (props.currentLabels == 'oneMonth') {
                    newData.push(
                        {
                            data: props.flowmeters[index]['data'][2]
                        }
                    )
                } 
            }
        }
        )
    
    if (props.selectedData.length > 0) {
        setdata(newData)
    } else {
        setdata( [{
            data: []
        }])
    }
    }, [props.currentLabels, props.selectedData])


    
    return (
        <View style={styles.container}>
            <LineChart 
                key={data.length}
                style={styles.graph}
                dataSet={data} 
                width={Dimensions.get('window').width * 0.75}
                height={Dimensions.get('window').height * 0.35}
                maxValue={2500}
                noOfSections={12}
                yAxisTextStyle={styles.axis}
                xAxisLabelTexts={['a', 'b']}
                xAxisLabelTextStyle={styles.axis}
                color={'#00A7CF'}
                initialSpacing={50}
                thickness={3}
                showVerticalLines

                dataPointsColor="#00A7CF"
                dataPointsWidth={10}
                dataPointsHeight={10}
                focusEnabled
                textShiftX={-10}
                textShiftY={-10}
                textColor="black"
                textFontSize={12}
                focusedDataPointColor={'#00A7CF'}
                focusedDataPointRadius={5}
                showTextOnFocus={true}

                delayBeforeUnFocus={5000}
                dataPointLabelShiftX={Dimensions.get('window').width * -0.115}
                dataPointLabelShiftY={-45}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: Dimensions.get('window').width * 0, 
        marginTop: Dimensions.get('window').height * 0.02
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