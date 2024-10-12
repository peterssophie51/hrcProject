import React from "react";
import { View } from "react-native";
import { StyleSheet, Dimensions } from "react-native";
//importing components
import { CalibriBoldText } from "../fonts/calibriBoldFont";

//component for the top of the river page showing river flow card
export function RiverFlowTitle(props) {
    //calculating font size of the river flow based on if length is greater than 3
    const dynamicFontSize = props.riverFlow != null ? props.riverFlow.toString().length > 3
        ? 45 - (props.riverFlow.toString().length - 3) * 5 : 45
        : 45;
    //calculating the font size of the river flow units  based on if the length of the river flow is greater than 3
    const dynamicUnitFontSize = props.riverFlow != null ? props.riverFlow.toString().length > 3
        ? 35 - (props.riverFlow.toString().length - 3) * 4 : 35
        : 35;
    //calculating the font size of the superscript in the units based on if the length of the river flow is greater than 3
    const dynamicSuperscriptFontSize = props.riverFlow != null ? props.riverFlow.toString().length > 3
        ? 20 - (props.riverFlow.toString().length - 3) * 1 : 20
        : 20;

    return (
        <View style={styles.card}>
            <View style={styles.container}>
                {/*container for river flow title to data*/}
                <View style={styles.titleContainer}>
                    {/*river flow title*/}
                    <CalibriBoldText title="CURRENT RIVER" style={styles.title} />
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
                        title="m"
                    />
                    {/*river flow units superscript*/}
                    <CalibriBoldText
                        style={[styles.superscript, { fontSize: dynamicSuperscriptFontSize }]}
                        title="3"
                    />
                    {/*river flow units*/}
                    <CalibriBoldText
                        style={[styles.units, { fontSize: dynamicUnitFontSize }]}
                        title="/s"
                    />
                </View>
            </View>
            <View style={{height:5}}></View>
            <View style={styles.container}>
                {/*container for river flow title to data*/}
                <View style={styles.titleContainer}>
                    {/*river flow title*/}
                    <CalibriBoldText title="RIVER FLOW AT" style={styles.title} />
                    <CalibriBoldText title="3AM" style={styles.title} />
                </View>
                {/*container for river flow data*/}
                <View style={styles.valueContainer}>
                    {/*river flow data*/}
                    <CalibriBoldText
                        title={props.riverFlowAtCompliance}
                        style={[styles.flow, { fontSize: dynamicFontSize }]}
                    />
                    {/*river flow units*/}
                    <CalibriBoldText
                        style={[styles.units, { fontSize: dynamicUnitFontSize }]}
                        title="m"
                    />
                    {/*river flow units superscript*/}
                    <CalibriBoldText
                        style={[styles.superscript, { fontSize: dynamicSuperscriptFontSize }]}
                        title="3"
                    />
                    {/*river flow units*/}
                    <CalibriBoldText
                        style={[styles.units, { fontSize: dynamicUnitFontSize }]}
                        title="/s"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: Dimensions.get('window').width * 0.05,
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.155,
        marginLeft: Dimensions.get('window').width * 0.05,
        borderRadius: 20,
        backgroundColor: '#eeeeee',
        alignContent: 'center',
        justifyContent: 'center'
    },
    container: { //styling the container of the top river flow card
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleContainer: { //stying the container of the title to the card
        marginLeft: Dimensions.get('window').width * 0.05,
    },
    title: { //styling the title of the card
        fontSize: 18,
    },
    valueContainer: { //styling the container to the river flow values
        flexDirection: 'row',
        alignItems: 'flex-end', 
        marginLeft: Dimensions.get('window').width * 0.43,
        position: 'absolute'
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
