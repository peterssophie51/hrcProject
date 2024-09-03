import React from "react";
import { View } from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { StyleSheet, Dimensions } from "react-native";

export function RiverFlowTitle(props) {
    const dynamicFontSize = props.riverFlow.toString().length > 3
        ? 45 - (props.riverFlow.toString().length - 3) * 5
        : 45;

    const dynamicUnitFontSize = props.riverFlow.toString().length > 3
        ? 30 - (props.riverFlow.toString().length - 3) * 4
        : 30;

    const dynamicSuperscriptFontSize = props.riverFlow.toString().length > 3
        ? 20 - (props.riverFlow.toString().length - 3) * 1
        : 20;

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <CalibriBoldText title="RIVER" style={styles.title} />
                <CalibriBoldText title="FLOW" style={styles.title} />
            </View>
            <View style={styles.valueContainer}>
                <CalibriBoldText
                    title={props.riverFlow}
                    style={[styles.flow, { fontSize: dynamicFontSize }]}
                />
                <CalibriBoldText
                    style={[styles.units, { fontSize: dynamicUnitFontSize }]}
                    title="M"
                />
                <CalibriBoldText
                    style={[styles.superscript, { fontSize: dynamicSuperscriptFontSize }]}
                    title="3"
                />
                <CalibriBoldText
                    style={[styles.units, { fontSize: dynamicUnitFontSize }]}
                    title="/S"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Dimensions.get('window').width * 0.05,
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.12,
        marginLeft: Dimensions.get('window').width * 0.05,
        marginRight: Dimensions.get('window').width * 0.08,
        borderRadius: 20,
        backgroundColor: '#eeeeee',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20, 
    },
    titleContainer: {
        marginLeft: Dimensions.get('window').width * 0.02,
    },
    title: {
        fontSize: 25,
    },
    valueContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end', 
        marginLeft: Dimensions.get('window').width * 0.22,
    },
    flow: {
        marginLeft: Dimensions.get('window').width * 0.09,
        lineHeight: 50, 
    },
    units: {
        lineHeight: 50, 
        fontFamily: 'Calibri',
        marginLeft: 2, 
    },
    superscript: {
        lineHeight: 30, 
        fontFamily: 'Calibri',
        marginLeft: 1, 
        alignSelf: 'flex-start', 
    },
});
