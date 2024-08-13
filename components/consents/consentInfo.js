import React from "react";
import { View, StyleSheet, Dimensions} from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";

export function ConsentInfo(props) {

    return(
        <View style={styles.container}>
            <CalibriBoldText title="CONSENT EXPIRATION" style={styles.subHeader}/> {/*consent expiration date title*/}
                <CalibriText title={props.consentExpiration} style={styles.subText}/> {/*consent expiration date*/}
            <CalibriBoldText title="CONSENT FLOW SITE" style={styles.subHeader}/> {/*consent flowsite title*/}
                <CalibriText title={props.consentFlowSite} style={styles.subText}/> {/*consent flowsite*/}
            <CalibriBoldText title="ANNUAL MAX" style={styles.subHeader}/> {/*annual max of abstraction for consent title*/}
                <CalibriText title={props.annualMax} style={styles.subText}/> {/*annual max of abstraction for consent*/}
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        marginTop: Dimensions.get('window').width * 0.04, 
        width: Dimensions.get('window').width * 0.9,
        height:Dimensions.get('window').height * 0.28, 
        marginLeft:Dimensions.get('window').width *0.05, 
        marginRight:Dimensions.get('window').width * 0.08,
        borderRadius: 20,
        backgroundColor: '#eeeeee',
    },
    subHeader: {
        color: '#72BF44',
        fontSize: 25,
        marginTop:Dimensions.get('window').height * 0.015, 
        marginLeft: Dimensions.get('window').height * 0.02
    },
    subText: {
        color:'black',
        fontSize:20, 
        marginLeft: Dimensions.get('window').height * 0.02
    }
})