import React from "react";
import { LineChart } from "react-native-gifted-charts";
import { Dimensions, View, StyleSheet } from "react-native";

export function RiverFlowChart() {
    const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]
    return(
        <View style={styles.container}>
            <LineChart 
                data = {data} 
                width={Dimensions.get('window').width * 0.7} 
                height={Dimensions.get('window').height * 0.35}
                maxValue={120}
                noOfSections={12}
                initialSpacing={Dimensions.get('window').width * 0.05}
                yAxisTextStyle={styles.axis}
                xAxisLabelTexts={['1 hour', '2 hour', '3 hour', '4 hour']}
                xAxisLabelTextStyle={styles.axis}
                color={'#00A7CF'}
                thickness={3}
                dataPointsColor="#00A7CF"
                dataPointsRadius={0}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Dimensions.get('window').width * 0.05, 
        marginLeft:Dimensions.get('window').width *0.05, 
    },
    axis: {
        fontSize: 12
    }
})