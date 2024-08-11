import React from "react";
import { Text, View } from "react-native";
import { List } from "react-native-paper";
import { StyleSheet, Dimensions } from "react-native";

export function FlowbasedRestriction() {
    return (
        <List.Accordion style={styles.container}
        left={() => <Text style={styles.currentText}>Current flowbased restriction component goes here</Text>} >
        <List.Item left={ () => 
            <View>
                <Text style={styles.droppedText}>Other flowbased restriction</Text>
                <Text style={styles.droppedText}>Other flowbased restriction</Text>
                <Text style={styles.droppedText}>Other flowbased restriction</Text>
                <Text style={styles.droppedText}>Other flowbased restriction</Text>
            </View>
            
        } style={styles.dropDown}/>
      </List.Accordion>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: Dimensions.get('window').width * 0.04, 
        width: Dimensions.get('window').width * 0.9,
        height:Dimensions.get('window').height * 0.2, 
        marginLeft:Dimensions.get('window').width *0.05, 
        marginRight:Dimensions.get('window').width * 0.08,
        borderRadius: 20,
        backgroundColor: '#eeeeee',
    },
    dropDown: {
        marginTop: Dimensions.get('window').width * -0.1,
        backgroundColor: '#eeeeee',
        marginLeft: Dimensions.get('window').width *0.05, 
        width: Dimensions.get('window').width * 0.9,
        borderRadius: 20,
        height: Dimensions.get('window').height * 0.45
    },
    currentText: {
        fontSize: 30,
        marginLeft: Dimensions.get('window').width * 0.05
    },
    droppedText: {
        fontSize: 30, 
        marginLeft: Dimensions.get('window').width * 0.05,
        marginTop: Dimensions.get('window').height * 0.01
    }
})
