import { Dimensions, View, StyleSheet } from "react-native";
import { LineChart } from "react-native-gifted-charts";

export function ComparisonsGraph() {
    const data = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];
    return (
        <View style={styles.container}>
            <LineChart 
                style={styles.graph}
                data={data} 
                width={Dimensions.get('window').width * 0.75}
                height={Dimensions.get('window').height * 0.35}
                maxValue={50}
                noOfSections={12}
                yAxisTextStyle={styles.axis}
                xAxisLabelTexts={['Mon', 'Tue', 'Wed', 'Thurs']}
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
        marginLeft: Dimensions.get('window').width *-0.8, 
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