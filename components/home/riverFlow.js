import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";

export function RiverFlow(props) {
    const riverFlow = 45.7
    const restriction = 30.22
    const restrictionText = "RESTRICTION AT " + restriction
    const timePeriod = '20:00 (NZST) June 14th 2024'
    const timePeriodText = 'Last Recorded at ' + timePeriod
    return(
        <View style={styles.container}>
            <View style={styles.topTextContainer}>
                <CalibriBoldText title={riverFlow} style={styles.flow}/>
                    <CalibriBoldText style={styles.units} title='M'/>
                        <CalibriBoldText style={styles.superscript} title='3'/>
                    <CalibriBoldText style={styles.units} title='/S'/>
                <View style={{display:'flex', flexDirection:'column'}}>
                    <CalibriBoldText title="CURRENT RIVER" style={styles.title} />
                    <CalibriBoldText title="FLOW" style={styles.title} />
                </View>
            </View>
            <View style={styles.subTextContainer}>
                <CalibriText style={styles.subText} title={restrictionText} />
                <CalibriText style={styles.subText} title={timePeriodText} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: Dimensions.get('window').width * 0.05, 
        width: Dimensions.get('window').width * 0.9,
        height:Dimensions.get('window').height * 0.15, 
        marginLeft:Dimensions.get('window').width *0.05, 
        marginRight:Dimensions.get('window').width * 0.08,
        borderRadius: 20,
        backgroundColor: '#eeeeee'
    },
    topTextContainer: {
        display:'flex',
        flexDirection:'row',
    },
    flowContainer: {
        flexDirection:'row', 
        alignItems:'flex-start', 
        justifyContent:'center', 
        marginLeft:Dimensions.get('window').width * 0.04, 
        marginTop:Dimensions.get('window').width * 0.01
    },
    flow: {
        fontSize:45,
        marginLeft: Dimensions.get('window').width * 0.04
    },
    superscript: {
        fontSize:20,
        textAlign:'center',
        lineHeight:50,
        fontFamily:'Calibri'
    },
    units: {
        fontSize:30,
        lineHeight:70,
        fontFamily:'Calibri'
    },
    title: {
        marginTop:Dimensions.get('window').width * 0.011,
        marginBottom: Dimensions.get('window').height * -0.009,
        fontSize:20,
        textAlign:'left',
        marginLeft: Dimensions.get('window').width * 0.15
    },
    subTextContainer:{
        marginTop: Dimensions.get('window').height * -0.005
    },
    subText: {
        fontSize: 18,
        marginLeft: Dimensions.get('window').width * 0.04,
    }
})