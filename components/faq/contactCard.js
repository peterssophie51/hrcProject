import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity, Linking } from "react-native";
//import components
import { CalibriBoldText } from "../fonts/calibriBoldFont";

//individual component for each contact card with clickable link
export function ContactCard(props) {
    //function to take user to link when clicked
    const handlePress = async () => {
        const url = `${props.method}:${props.link}`; //url with method (what kind of link) and link
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            console.log(`Cannot open this URL: ${url}`);
        } //error message if link does not work
    };
    
    return (
        <View style={styles.container}>
            {/*make card touchable*/}
            <TouchableOpacity onPress={handlePress}>
                {/*title of contact*/}
                <CalibriBoldText title={props.title} style={styles.contacts} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { //style container of contact card
        width: Dimensions.get('window').width * 0.9,
        marginLeft: Dimensions.get('window').width * 0.05,
        marginTop: Dimensions.get('window').height * 0.02,
        backgroundColor: '#eeeeee',
        borderRadius: 20
    },
    contacts: { //style contact information text
        fontSize: 25,
        margin: Dimensions.get('window').width * 0.05
    }
});
