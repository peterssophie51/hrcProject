import React from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import { CalibriText } from "../fonts/calibriFont";

export function SmallCard(props) {
    return (
        <View style={[styles.container, props.value && {backgroundColor:'#72BF44'}]}>
            <Image source={props.value == true 
                ? require('../../images/tickWhiteThick.png')
                : require('../../images/crossWhiteThick.png')}
                style={[styles.image, props.value && {width:Dimensions.get('window').width * 0.185}]}/>
            <CalibriText title={props.title} style={styles.text}/>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        marginTop: Dimensions.get('window').width * 0.04, 
        width: Dimensions.get('window').width * 0.425,
        height:Dimensions.get('window').width * 0.4, 
        marginLeft:Dimensions.get('window').width * 0.05, 
        borderRadius: 20,
        backgroundColor: '#CE202F',
    },
    image: {
        height: Dimensions.get('window').width * 0.15,
        width: Dimensions.get('window').width * 0.15,
        marginTop: Dimensions.get('window').height * 0.02,
        marginLeft: Dimensions.get('window').width * 0.13,
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 19, 
        marginTop: Dimensions.get('window').height * 0.01
    }
})