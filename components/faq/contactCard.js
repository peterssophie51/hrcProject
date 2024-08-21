import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";

export function ContactCard(props) {
    return(
        <View style={styles.container}>
            <CalibriBoldText title="Horizons Website" style={styles.contacts}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.9,
        margin: Dimensions.get('window').width * 0.05,
        backgroundColor: '#eeeeee',
        borderRadius: 20
    },
    contacts: {
        fontSize: 25,
        margin: Dimensions.get('window').width * 0.05
    }
})