import React from "react";
import { View, StyleSheet, Dimensions} from "react-native";
//importinc components
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";

//top consent information card in consents page
export function ConsentInfo(props) {
    return(
        <View style={styles.container}>
            {/*header for consent expiration data*/}
            <CalibriBoldText title="CONSENT EXPIRATION" style={styles.subHeader}/> 
                {/*consent expiration data*/}
                <CalibriText title={props.consentExpiration} style={styles.subText}/>
            {/*header for consent flow site data*/}
            <CalibriBoldText title="CONSENT FLOW SITE" style={styles.subHeader}/> 
                {/*consent flowsite data*/}
                <CalibriText title={props.consentFlowSite} style={styles.subText}/> 
            {/*header for annual max data*/}
            <CalibriBoldText title="ANNUAL MAX" style={styles.subHeader}/>
                {/*annual max data*/}
                <CalibriText title={props.annualMax} style={styles.subText}/>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{ //styling for container of all data
        marginTop: Dimensions.get('window').width * 0.04, 
        width: Dimensions.get('window').width * 0.9,
        height:Dimensions.get('window').height * 0.28, 
        marginLeft:Dimensions.get('window').width *0.05, 
        marginRight:Dimensions.get('window').width * 0.08,
        borderRadius: 20,
        backgroundColor: '#eeeeee',
    },
    subHeader: { //styling of headers for data in card
        color: '#72BF44',
        fontSize: 25,
        marginTop:Dimensions.get('window').height * 0.015, 
        marginLeft: Dimensions.get('window').height * 0.02
    },
    subText: { //styling for data in card
        color:'black',
        fontSize:20, 
        marginLeft: Dimensions.get('window').height * 0.02
    }
})