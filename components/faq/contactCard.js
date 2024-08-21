import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";

export function ContactCard(props) {
    return(
        <View style={styles.container}>
            <CalibriBoldText title={props.title} style={styles.contacts}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.9,
        marginLeft: Dimensions.get('window').width * 0.05,
        marginTop: Dimensions.get('window').height * 0.02,
        backgroundColor: '#eeeeee',
        borderRadius: 20
    },
    contacts: {
        fontSize: 25,
        margin: Dimensions.get('window').width * 0.05
    }
})