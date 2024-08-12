import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";

export function VerticalData(props) {
    return(
        <View style={styles.verticalContainer}>
            <CalibriBoldText title={props.rate} style={styles.verticalDataTitle}/>
            <View style={styles.verticalDataTitleContainer}>
                <CalibriText title="M" style={styles.verticalDataTitleUnits}/>
                <CalibriText title="3" style={styles.verticalDataTitleSuperscript}/>
                <CalibriText title={'/' + props.time} style={styles.verticalDataTitleUnits}/>
            </View>
            <CalibriBoldText title={props.data} style={styles.verticalData} />
</View>
    )
}

const styles = StyleSheet.create({
    verticalContainer: {
        backgroundColor: '#cccccc',
        borderRadius: 20,
        width: Dimensions.get('window').width * (0.8/3),
        height: Dimensions.get('window').height * 0.15,
        marginLeft: Dimensions.get('window').width * 0.025,
        alignItems: 'center'
    },
    verticalDataTitleContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    verticalDataTitle: {
        fontSize: 18,
        marginTop: Dimensions.get('window').height * 0.005
    },
    verticalDataTitleUnits: {
        fontSize: 15,
    }, 
    verticalDataTitleSuperscript: {
        fontSize: 12
    },
    verticalData: {
        fontSize: 40,
        color: '#243746',
        marginTop: Dimensions.get('window').height * 0.01
    }
})