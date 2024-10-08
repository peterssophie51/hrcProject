import React from "react";
import { View } from "react-native";
import { StyleSheet, Dimensions } from "react-native";
//importing components
import { CalibriBoldText } from "../fonts/calibriBoldFont";

//component for the top of the river page showing river flow card
export function RiverFlowTitle(props) {
    //calculating font size of the river flow based on if length is greater than 3
    const dynamicFontSize = props.riverFlow.toString().length > 3
        ? 45 - (props.riverFlow.toString().length - 3) * 5
        : 45;
    //calculating the font size of the river flow units  based on if the length of the river flow is greater than 3
    const dynamicUnitFontSize = props.riverFlow.toString().length > 3
        ? 30 - (props.riverFlow.toString().length - 3) * 4
        : 30;
    //calculating the font size of the superscript in the units based on if the length of the river flow is greater than 3
    const dynamicSuperscriptFontSize = props.riverFlow.toString().length > 3
        ? 20 - (props.riverFlow.toString().length - 3) * 1
        : 20;

    return (
        <View style={styles.container}>
            {/*container for river flow title to data*/}
            <View style={styles.titleContainer}>
                {/*river flow title*/}
                <CalibriBoldText title="RIVER" style={styles.title} />
                <CalibriBoldText title="FLOW" style={styles.title} />
            </View>
            {/*container for river flow data*/}
            <View style={styles.valueContainer}>
                {/*river flow data*/}
                <CalibriBoldText
                    title={props.riverFlow}
                    style={[styles.flow, { fontSize: dynamicFontSize }]}
                />
                {/*river flow units*/}
                <CalibriBoldText
                    style={[styles.units, { fontSize: dynamicUnitFontSize }]}
                    title="M"
                />
                {/*river flow units superscript*/}
                <CalibriBoldText
                    style={[styles.superscript, { fontSize: dynamicSuperscriptFontSize }]}
                    title="3"
                />
                {/*river flow units*/}
                <CalibriBoldText
                    style={[styles.units, { fontSize: dynamicUnitFontSize }]}
                    title="/S"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { //styling the container of the top river flow card
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
    titleContainer: { //stying the container of the title to the card
        marginLeft: Dimensions.get('window').width * 0.02,
    },
    title: { //styling the title of the card
        fontSize: 25,
    },
    valueContainer: { //styling the container to the river flow values
        flexDirection: 'row',
        alignItems: 'flex-end', 
        marginLeft: Dimensions.get('window').width * 0.22,
    },
    flow: { //styling the river flow value
        marginLeft: Dimensions.get('window').width * 0.09,
        lineHeight: 50, 
    },
    units: { //tyling the river flow value units
        lineHeight: 50, 
        fontFamily: 'Calibri',
        marginLeft: 2, 
    },
    superscript: { //styling the river flow units superscript
        lineHeight: 30, 
        fontFamily: 'Calibri',
        marginLeft: 1, 
        alignSelf: 'flex-start', 
    },
});
