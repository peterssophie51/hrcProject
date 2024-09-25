import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
//importing components
import { CalibriBoldText } from "../fonts/calibriBoldFont";

//component to indicate whether users can take water or not
export function TakeWater(props) {
    return(
        //changing the background colour of the card depending on whether can take or not
        <View style={[styles.container, props.take && {backgroundColor:'#72BF44'}]}>
            {/*changing image depending on whether can take or not*/}
            <Image source={props.take == true  
                ? require('../../images/tickWhiteThick.png')
                : require('../../images/crossWhiteThick.png')}
                style={[styles.image, props.take && {width:Dimensions.get('window').width * 0.12}]}/>
            {/*changing displayed text depending on whether can take or not*/}
            <CalibriBoldText title={props.take == true 
                ? 'Can take water!'
                : "Can't take water"
            } style={styles.text}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{ //styling take water container of card
        marginTop: Dimensions.get('window').width * 0.05, 
        width: Dimensions.get('window').width * 0.9,
        height:Dimensions.get('window').height * 0.08, 
        marginLeft:Dimensions.get('window').width *0.05, 
        marginRight:Dimensions.get('window').width * 0.08,
        borderRadius: 20,
        display:'flex',
        flexDirection:'row',
        backgroundColor: '#CE202F'
    },
    text: { //styling text within card
        color:'white', 
        marginLeft: Dimensions.get('window').width * 0.07, 
        fontSize:35, 
        marginTop: '2%'
    },
    image: { //styling image in card
        height: Dimensions.get('window').height * 0.05,
        width:Dimensions.get('window').height * 0.05,
        marginLeft: Dimensions.get('window').height * 0.03,
        marginTop: Dimensions.get('window').height * 0.015
        
    }
})