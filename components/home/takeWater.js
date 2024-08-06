import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";

export function TakeWater(props) {
    return(
        <View style={[styles.container, props.take && {backgroundColor:'#72BF44'}]}>
            <Image source={props.take == true 
                ? require('../../images/tickWhiteThick.png')
                : require('../../images/crossWhiteThick.png')}
                style={[styles.image, props.take && {width:65}]}/>
            <CalibriBoldText title={props.take == true
                ? 'Can take water!'
                : "Can't take water"
            } style={styles.text}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: Dimensions.get('window').width * 0.05, 
        width: Dimensions.get('window').width * 0.9,
        height:Dimensions.get('window').height * 0.11, 
        marginLeft:Dimensions.get('window').width *0.05, 
        marginRight:Dimensions.get('window').width * 0.08,
        borderRadius: 20,
        display:'flex',
        flexDirection:'row',
        backgroundColor: '#CE202F'
    },
    text: {
        color:'white', 
        marginLeft: Dimensions.get('window').width * 0.05, 
        fontSize:35, 
        marginTop: '5.5%'
    },
    image: {
        height: Dimensions.get('window').height * 0.07,
        width:Dimensions.get('window').height * 0.07,
        margin: Dimensions.get('window').height * 0.02,
        
    }
})