import React from "react";
import { View, StyleSheet, Dimensions} from "react-native";
//importinc components
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";

//top consent information card in consents page
export function ConsentInfo(props) {

    var time = new Date(props.consentExpiration) //date created
    var date = time.toLocaleDateString('en-GB') + ', ' + time.toLocaleTimeString()  //date formatted for string use

    return(
        <View style={styles.container}>
            {/*header for consent expiration data*/}
            <CalibriBoldText title="CONSENT EXPIRATION" style={styles.subHeader}/> 
                {/*consent expiration data*/}
                <CalibriText title={date} style={styles.subText}/>
            {/*header for consent flow site data*/}
            <CalibriBoldText title="CONSENT FLOW SITE" style={styles.subHeader}/> 
                {/*consent flowsite data*/}
                <CalibriText title={props.consentFlowSite} style={styles.subText}/> 
            {/*header for annual max data*/}
            <CalibriBoldText title="ANNUAL MAX" style={styles.subHeader}/>
                <View style={styles.annualMaxContainer}>
                    {/*annual max data*/}
                    <CalibriText title={props.annualMax} style={styles.subText}/>
                        <CalibriText title='M' style={styles.subTextUnits}/>
                            <CalibriText title='3' style={styles.subTextSuperscript}/>
                </View>
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
    },
    annualMaxContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    subTextUnits: {
        fontSize: 16,
        lineHeight: 25
    },
    subTextSuperscript: {
        fontSize: 14,
        lineHeight: 20
    }
})