import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";

export function RestrictionInfo(props) {
    return(
        <View>
            <Text style={styles.titleContainer}>
                <CalibriBoldText title={props.restrictionTitle} style={styles.titleHead}/>
                <CalibriText title={props.restriction} style={styles.titleRestriction}/>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: Dimensions.get('window').height * 0.015,
        marginLeft: Dimensions.get('window').width * 0.045
    },
    titleHead: {
        color: '#72BF44',
        fontSize: 27
    },
    titleRestriction: {
        color: 'black',
        fontSize: 27
    }
})