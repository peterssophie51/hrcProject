import { Dimensions, View, StyleSheet, Text } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { useState, useEffect, useMemo } from "react";
import { color } from "@rneui/base";
import { CalibriText } from "../fonts/calibriFont";

export function ComparisonsGraph(props) {
    const [labels, setLabels] = useState([' ']);
    const [data, setdata] = useState([{
        data: []
    }])

    useEffect(() => {
        const newData = []
        props.selectedData.map((item) => {
            if (item == 'Total Water Usage') {
                if (props.currentLabels[0] == '00:00') {
                    const list = []
                    props.totalWaterUsage[0].map((item) => {
                        const time = new Date(item.time);
                        const timeLabel = (props.currentLabels[0] === '00:00')
                            ? time.toLocaleDateString() + ', ' + time.toLocaleTimeString()
                            : props.currentLabels[0] === 'JAN' ? time.toLocaleDateString().slice(3,10) 
                            : time.toLocaleDateString().slice(0,10)
            
                        // memoized component for dataPointLabel
                        const dataPointLabelComponent = () => (
                            <View style={styles.label}>
                                <CalibriText title={'Total Water Usage'} />
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <CalibriText title={item.value.toFixed(3)} style={{ fontSize: 17 }} />
                                    <CalibriText title="M" style={{ fontSize: 15, lineHeight: 22 }} />
                                    <CalibriText title="3" style={{ fontSize: 13 }} />
                                </View>
                                <CalibriText title={timeLabel} />
                            </View>
                        );
                        list.push({
                            value:item.value,
                            time:item.time,
                            dataPointLabelComponent
                        })
                    })
                    newData.push({ data: list })
                } else if (props.currentLabels == 'sevenDay') {
                    const list = []
                    props.totalWaterUsage[1].map((item) => {
                        const time = new Date(item.time);
                        const timeLabel = (props.currentLabels[0] === '00:00')
                            ? time.toLocaleDateString() + ', ' + time.toLocaleTimeString()
                            : props.currentLabels[0] === 'JAN' ? time.toLocaleDateString().slice(3,10) 
                            : time.toLocaleDateString().slice(0,10)
            
                        // memoized component for dataPointLabel
                        const dataPointLabelComponent = () => (
                            <View style={styles.label}>
                                <CalibriText title={'Total Water Usage'} />
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <CalibriText title={item.value.toFixed(3)} style={{ fontSize: 17 }} />
                                    <CalibriText title="M" style={{ fontSize: 15, lineHeight: 22 }} />
                                    <CalibriText title="3" style={{ fontSize: 13 }} />
                                </View>
                                <CalibriText title={timeLabel} />
                            </View>
                        );
                        list.push({
                            value:item.value,
                            time:item.time,
                            dataPointLabelComponent
                        })
                    })
                    newData.push({ data: list })
                } else if (props.currentLabels == 'oneMonth') {
                    const list = []
                    props.totalWaterUsage[2].map((item) => {
                        const time = new Date(item.time);
                        const timeLabel = (props.currentLabels[0] === '00:00')
                            ? time.toLocaleDateString() + ', ' + time.toLocaleTimeString()
                            : props.currentLabels[0] === 'JAN' ? time.toLocaleDateString().slice(3,10) 
                            : time.toLocaleDateString().slice(0,10)
            
                        // memoized component for dataPointLabel
                        const dataPointLabelComponent = () => (
                            <View style={styles.label}>
                                <CalibriText title={'Total Water Usage'} />
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <CalibriText title={item.value.toFixed(3)} style={{ fontSize: 17 }} />
                                    <CalibriText title="M" style={{ fontSize: 15, lineHeight: 22 }} />
                                    <CalibriText title="3" style={{ fontSize: 13 }} />
                                </View>
                                <CalibriText title={timeLabel} />
                            </View>
                        );
                        list.push({
                            value:item.value,
                            time:item.time,
                            dataPointLabelComponent
                        })
                    })
                    newData.push({ data: list })
                } else if (props.currentLabels[0] == 'JAN') {
                    const list = []
                    props.totalWaterUsage[3].map((item) => {
                        const time = new Date(item.time);
                        const timeLabel = (props.currentLabels[0] === '00:00')
                            ? time.toLocaleDateString() + ', ' + time.toLocaleTimeString()
                            : props.currentLabels[0] === 'JAN' ? time.toLocaleDateString().slice(3,10) 
                            : time.toLocaleDateString().slice(0,10)
            
                        // memoized component for dataPointLabel
                        const dataPointLabelComponent = () => (
                            <View style={styles.label}>
                                <CalibriText title={'Total Water Usage'} />
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <CalibriText title={item.value.toFixed(3)} style={{ fontSize: 17 }} />
                                    <CalibriText title="M" style={{ fontSize: 15, lineHeight: 22 }} />
                                    <CalibriText title="3" style={{ fontSize: 13 }} />
                                </View>
                                <CalibriText title={timeLabel} />
                            </View>
                        );
                        list.push({
                            value:item.value,
                            time:item.time,
                            dataPointLabelComponent
                        })
                    })
                    newData.push({ data: list })
                }
            } else if (item == 'River Flow') {
                if (props.currentLabels[0] == '00:00') {
                    const list = []
                    props.riverFlow[0].map((item) => {
                        const time = new Date(item.time);
                        const timeLabel = (props.currentLabels[0] === '00:00')
                            ? time.toLocaleDateString() + ', ' + time.toLocaleTimeString()
                            : props.currentLabels[0] === 'JAN' ? time.toLocaleDateString().slice(3,10) 
                            : time.toLocaleDateString().slice(0,10)
            
                        // memoized component for dataPointLabel
                        const dataPointLabelComponent = () => (
                            <View style={styles.label}>
                                <CalibriText title={'River Flow'} />
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <CalibriText title={(item.value / 1000).toFixed(3)} style={{ fontSize: 17 }} />
                                    <CalibriText title="M" style={{ fontSize: 15, lineHeight: 22 }} />
                                    <CalibriText title="3" style={{ fontSize: 13 }} />
                                    <CalibriText title="/S" style={{ fontSize: 15, lineHeight: 22 }} />
                                </View>
                                <CalibriText title={timeLabel} />
                            </View>
                        );
                        if (props.flowsite != null) {
                            list.push({
                                value: item.value / 1000,
                                time:item.time,
                                dataPointLabelComponent
                            })
                        }
                    })
                    newData.push({ 
                        data: list, 
                        isSecondary: true, 
                        color: '#72BF44',
                        dataPointsColor: '#72BF44'
                    })
                } else if (props.currentLabels == 'sevenDay') {
                    const list = []
                    props.riverFlow[1].map((item) => {
                        const time = new Date(item.time);
                        const timeLabel = (props.currentLabels[0] === '00:00')
                            ? time.toLocaleDateString() + ', ' + time.toLocaleTimeString()
                            : props.currentLabels[0] === 'JAN' ? time.toLocaleDateString().slice(3,10) 
                            : time.toLocaleDateString().slice(0,10)
            
                        // memoized component for dataPointLabel
                        const dataPointLabelComponent = () => (
                            <View style={styles.label}>
                                <CalibriText title={'River Flow'} />
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <CalibriText title={((item.value) / 1000).toFixed(3)} style={{ fontSize: 17 }} />
                                    <CalibriText title="M" style={{ fontSize: 15, lineHeight: 22 }} />
                                    <CalibriText title="3" style={{ fontSize: 13 }} />
                                    <CalibriText title="/S" style={{ fontSize: 15, lineHeight: 22 }} />
                                </View>
                                <CalibriText title={timeLabel} />
                            </View>
                        );
                        list.push({
                            value:item.value /1000,
                            time:item.time,
                            dataPointLabelComponent,
                        })
                    })
                    newData.push({ 
                        data: list, 
                        isSecondary: true,
                        color: '#72BF44',
                        dataPointsColor: '#72BF44'
                    })
                } else if (props.currentLabels == 'oneMonth') {
                    const list = []
                    props.riverFlow[2].map((item) => {
                        const time = new Date(item.time);
                        const timeLabel = (props.currentLabels[0] === '00:00')
                            ? time.toLocaleDateString() + ', ' + time.toLocaleTimeString()
                            : props.currentLabels[0] === 'JAN' ? time.toLocaleDateString().slice(3,10) 
                            : time.toLocaleDateString().slice(0,10)
            
                        // memoized component for dataPointLabel
                        const dataPointLabelComponent = () => (
                            <View style={styles.label}>
                                <CalibriText title={'River Flow'} />
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <CalibriText title={(item.value /1000).toFixed(3)} style={{ fontSize: 17 }} />
                                    <CalibriText title="M" style={{ fontSize: 15, lineHeight: 22 }} />
                                    <CalibriText title="3" style={{ fontSize: 13 }} />
                                    <CalibriText title="/S" style={{ fontSize: 15, lineHeight: 22 }} />
                                </View>
                                <CalibriText title={timeLabel} />
                            </View>
                        );
                        list.push({
                            value:item.value /1000,
                            time:item.time,
                            dataPointLabelComponent
                        })
                    })
                    newData.push({ 
                        data: list, 
                        isSecondary: true,
                        color: '#72BF44',
                        dataPointsColor: '#72BF44'
                    })
                } else if (props.currentLabels[0] == 'JAN') {
                    newData.push(
                        {
                            data: []
                        }
                    )
                }
            } else if (props.flowmeters.find(obj => obj['name'] == item)) {
                const index = props.flowmeters.findIndex(obj => obj['name'] === item);
                if (props.currentLabels[0] == '00:00') {
                    const list = []
                    props.flowmeters[index]['data'][0].map((item) => {
                        const time = new Date(item.time);
                        const timeLabel = (props.currentLabels[0] === '00:00')
                            ? time.toLocaleDateString() + ', ' + time.toLocaleTimeString()
                            : props.currentLabels[0] === 'JAN' ? time.toLocaleDateString().slice(3,10) 
                            : time.toLocaleDateString().slice(0,10)
            
                        // memoized component for dataPointLabel
                        const dataPointLabelComponent = () => (
                            <View style={styles.label}>
                                <CalibriText title={props.flowmeters[index].nickname + ': ' + props.flowmeters[index].name} />
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <CalibriText title={item.value.toFixed(3)} style={{ fontSize: 17 }} />
                                    <CalibriText title="M" style={{ fontSize: 15, lineHeight: 22 }} />
                                    <CalibriText title="3" style={{ fontSize: 13 }} />
                                </View>
                                <CalibriText title={timeLabel} />
                            </View>
                        );
                        list.push({
                            value:item.value,
                            time:item.time,
                            dataPointLabelComponent
                        })
                    })
                    newData.push({ data: list })
                } else if (props.currentLabels[0] == 'JAN') {
                    const list = []
                    props.flowmeters[index]['data'][3].map((item) => {
                        const time = new Date(item.time);
                        const timeLabel = (props.currentLabels[0] === '00:00')
                            ? time.toLocaleDateString() + ', ' + time.toLocaleTimeString()
                            : props.currentLabels[0] === 'JAN' ? time.toLocaleDateString().slice(3,10) 
                            : time.toLocaleDateString().slice(0,10)
            
                        // memoized component for dataPointLabel
                        const dataPointLabelComponent = () => (
                            <View style={styles.label}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <CalibriText title={item.value.toFixed(3)} style={{ fontSize: 17 }} />
                                    <CalibriText title="M" style={{ fontSize: 15, lineHeight: 22 }} />
                                    <CalibriText title="3" style={{ fontSize: 13 }} />
                                </View>
                                <CalibriText title={timeLabel} />
                            </View>
                        );
                        list.push({
                            value:item.value,
                            time:item.time,
                            dataPointLabelComponent
                        })
                    })
                    newData.push({ data: list })
                } else if (props.currentLabels == 'sevenDay') {
                    const list = []
                    props.flowmeters[index]['data'][1].map((item) => {
                        const time = new Date(item.time);
                        const timeLabel = (props.currentLabels[0] === '00:00')
                            ? time.toLocaleDateString() + ', ' + time.toLocaleTimeString()
                            : props.currentLabels[0] === 'JAN' ? time.toLocaleDateString().slice(3,10) 
                            : time.toLocaleDateString().slice(0,10)
            
                        // memoized component for dataPointLabel
                        const dataPointLabelComponent = () => (
                            <View style={styles.label}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <CalibriText title={item.value.toFixed(3)} style={{ fontSize: 17 }} />
                                    <CalibriText title="M" style={{ fontSize: 15, lineHeight: 22 }} />
                                    <CalibriText title="3" style={{ fontSize: 13 }} />
                                </View>
                                <CalibriText title={timeLabel} />
                            </View>
                        );
                        list.push({
                            value:item.value,
                            time:item.time,
                            dataPointLabelComponent
                        })
                    })
                    newData.push({ data: list })
                } else if (props.currentLabels == 'oneMonth') {
                    const list = []
                    props.flowmeters[index]['data'][2].map((item) => {
                        const time = new Date(item.time);
                        const timeLabel = (props.currentLabels[0] === '00:00')
                            ? time.toLocaleDateString() + ', ' + time.toLocaleTimeString()
                            : props.currentLabels[0] === 'JAN' ? time.toLocaleDateString().slice(3,10) 
                            : time.toLocaleDateString().slice(0,10)
            
                        // memoized component for dataPointLabel
                        const dataPointLabelComponent = () => (
                            <View style={styles.label}>
                                <View style={{ display: 'flex', flexDirection: 'row' }}>
                                    <CalibriText title={item.value.toFixed(3)} style={{ fontSize: 17 }} />
                                    <CalibriText title="M" style={{ fontSize: 15, lineHeight: 22 }} />
                                    <CalibriText title="3" style={{ fontSize: 13 }} />
                                </View>
                                <CalibriText title={timeLabel} />
                            </View>
                        );
                        list.push({
                            value:item.value,
                            time:item.time,
                            dataPointLabelComponent
                        })
                    })
                    newData.push({ data: list })
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

    const [max, setMax] = useState(10);
    useEffect(() => {
        const allDataObjects = data.flatMap(item => item.data);
        const maxObject = allDataObjects.reduce((max, current) => {
            return current.value > max.value ? current : max;
        }, allDataObjects[0]);
        if (maxObject != undefined) {
            setMax(maxObject.value * 1.5)
            console.log(max)
        } else {
            setMax(12)
        }
    }, [data]);

    useEffect(() => {
        const generateDates = (numDays) => {
            const dates = [];
            const today = new Date();
            for (let i = 0; i < numDays; i++) {
                const date = new Date(today);
                date.setDate(today.getDate() - i);
                dates.push(date.toISOString().split('T')[0].slice(5));
            }
            // Reverse the array before returning
            return dates.reverse();
        };
    
        let newLabels;
        if (props.currentLabels === 'sevenDay') {
            newLabels = generateDates(7);
        } else if (props.currentLabels === 'oneMonth') {
            newLabels = generateDates(28);
        } else {
            newLabels = Array.isArray(props.currentLabels) ? props.currentLabels : [props.currentLabels];
        }
    
        setLabels(newLabels);
    }, [props.currentLabels]);


    return (
        <View style={styles.container}>
            <LineChart 
                key={data.length}
                style={styles.graph}
                dataSet={data} 
                width={props.selectedData.includes('River Flow') ? Dimensions.get('window').width * 0.7 : Dimensions.get('window').width * 0.75}
                height={Dimensions.get('window').height * 0.4}
                maxValue={max}
                noOfSections={12}
                yAxisTextStyle={styles.axis}
                xAxisLabelTexts={labels}
                xAxisLabelTextStyle={styles.axis}
                color={'#00A7CF'}
                initialSpacing={50}
                thickness={3}
                showVerticalLines
                secondaryYAxis={props.selectedData.includes('River Flow') ? {
                    maxValue: Math.max(...props.riverFlow[0].map(item => item.value / 1000), 10) * 1.5,
                    noOfSections: 12,
                    yAxisColor: '#72BF44',
                    yAxisTextStyle: {
                        color: '#72BF44'
                    }
                } : null}
                dataPointsColor="#00A7CF"
                dataPointsWidth={10}
                dataPointsHeight={10}
                focusEnabled
                textShiftX={-10}
                textShiftY={-10}
                textColor="black"
                textFontSize={12}
                focusedDataPointColor={'black'}
                focusedDataPointRadius={5}
                showTextOnFocus={true}

                delayBeforeUnFocus={5000}
                dataPointLabelShiftX={Dimensions.get('window').width * -0.115}
                dataPointLabelShiftY={-75}
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