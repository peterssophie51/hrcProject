import React from "react";
import { Dimensions, View } from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { Switch } from "react-native-switch";

export function AlertCard () {
const [enabled, setEnabled] = useState(false);
  const toggleSwitch = () => setEnabled(!enabled);

    return (
        <View style={styles.container}>
            <View style={styles.textcontainer}>
            <CalibriBoldText title='Total Water Usage' style={styles.title}/>
            </View>
            <View style={styles.switchContainer}>
            <Switch 
                value={enabled}
                onPress={toggleSwitch}
                circleSize={Dimensions.get('window').width * 0.07}
                barHeight={Dimensions.get('window').width * 0.08}
                switchWidthMultiplier={2}
                backgroundActive={'#72BF44'}
                backgroundInactive={'#CCCCCC'}
                circleActiveColor={'#243746'}
                circleInActiveColor={'#243746'}
                renderActiveText={false}
                renderInActiveText={false}
            />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE',
        width: Dimensions.get('window').width * 0.9,
        marginTop: Dimensions.get('window').width * 0.04, 
        marginLeft: 3,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        padding: 20
    },
    title: {
        fontSize: 22
    },
    switchContainer: {
        justifyContent: 'center',
    },
    textcontainer: {
        width: Dimensions.get('window').width * 0.65
    }
})