import React from "react";
import { View, StyleSheet, Dimensions, Text} from "react-native";

export function PercentagePill() {
    return(
        <View style={styles.cardContainer}>
           
        </View>
    )
}

const styles= StyleSheet.create({
    cardContainer: {
        marginTop: Dimensions.get('window').width * 0.04, 
        width: Dimensions.get('window').width * 0.425,
        height:Dimensions.get('window').width * 0.6, 
        marginLeft:Dimensions.get('window').width * 0.05, 
        borderRadius: 20,
        backgroundColor: '#eeeeee',
    }
})