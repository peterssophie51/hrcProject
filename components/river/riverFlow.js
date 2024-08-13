import React from "react";
import { View } from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export function RiverFlowTitle(props) {

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <CalibriBoldText title="RIVER" style={styles.title}/> {/*river flow data title*/}
                <CalibriBoldText title="FLOW" style={styles.title}/>
            </View>
            <View style={styles.value}>
                <CalibriBoldText title={props.riverFlow} style={styles.flow}/> {/*river flow data*/}
                    <CalibriBoldText style={styles.units} title='M'/> {/*units*/}
                        <CalibriBoldText style={styles.superscript} title='3'/> {/*superscript*/}
                    <CalibriBoldText style={styles.units} title='/S'/> {/*units*/}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: Dimensions.get('window').width * 0.05, 
        width: Dimensions.get('window').width * 0.9,
        height:Dimensions.get('window').height * 0.12, 
        marginLeft:Dimensions.get('window').width *0.05, 
        marginRight:Dimensions.get('window').width * 0.08,
        borderRadius: 20,
        backgroundColor: '#eeeeee',
        display: 'flex', 
        flexDirection: 'row'
    },
    titleContainer: {
        marginTop: Dimensions.get('window').height * 0.014,
        marginLeft: Dimensions.get('window').width * 0.05
    },
    title: {
        fontSize: 25,
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
    value: {
        display:'flex', 
        flexDirection:'row',
        marginTop: Dimensions.get('window').width * 0.04,
        marginLeft: Dimensions.get('window').width * 0.25
    }
})