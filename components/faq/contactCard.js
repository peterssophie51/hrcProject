import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity, Linking } from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";

export function ContactCard(props) {

    const handlePress = async () => {
        const url = `${props.method}:${props.link}`;
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log(`Cannot open this URL: ${url}`);
        }
    };
    
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress}>
                <CalibriBoldText title={props.title} style={styles.contacts} />
            </TouchableOpacity>
        </View>
    );
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
});
