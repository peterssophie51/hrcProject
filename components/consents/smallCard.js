import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
//import components
import { CalibriText } from "../fonts/calibriFont";

//small cards, based on true/false in middle of consents page
export function SmallCard(props) {

    console.log(props.trueImage)
    console.log(props.falseImage)
    return (
        //styling colour of card depending on whether true or false (default red and change to red if true)
        <View style={[styles.container, props.value && {backgroundColor:'#72BF44'}]}>
            {/*setting image in card depending on whether true or false*/}
            <Image source={props.value == true 
                ? props.trueImage
                : props.falseImage}
                style={[styles.image, props.style]}/> 
            <CalibriText title={props.title} style={styles.text}/>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{ //styling container of small card
        marginTop: Dimensions.get('window').width * 0.04, 
        width: Dimensions.get('window').width * 0.425,
        height:Dimensions.get('window').width * 0.35, 
        marginLeft:Dimensions.get('window').width * 0.05, 
        borderRadius: 20,
        backgroundColor: '#CE202F',
        alignItems: 'center'
    },
    image: { //styling image shown in small card
        width: Dimensions.get('window').width * 0.15,
        marginTop: Dimensions.get('window').height * 0.02,
    },
    text: { //styling text in small card
        color: 'white',
        textAlign: 'center',
        fontSize: 19, 
        marginTop: Dimensions.get('window').height * 0.01
    }
})