import React from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import { CalibriText } from "../fonts/calibriFont";

export function TakeCard() {
    return (
        <View style={styles.container}>
            <Image source={require('../../images/tickWhiteThick.png')} style={styles.image}/>
            <CalibriText title={'You can take water\n today'} style={styles.complianceText}/>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        marginTop: Dimensions.get('window').width * 0.04, 
        width: Dimensions.get('window').width * 0.425,
        height:Dimensions.get('window').width * 0.425, 
        marginLeft:Dimensions.get('window').width * -0.03, 
        marginRight:Dimensions.get('window').width * 0.08,
        borderRadius: 20,
        backgroundColor: '#72BF44',
    },
    image: {
        height: Dimensions.get('window').width * 0.16,
        width: Dimensions.get('window').width * 0.2,
        marginTop: Dimensions.get('window').height * 0.02,
        marginLeft: Dimensions.get('window').width * 0.12,
        width:75,
    },
    complianceText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 19, 
        marginTop: Dimensions.get('window').height * 0.01
    }
})