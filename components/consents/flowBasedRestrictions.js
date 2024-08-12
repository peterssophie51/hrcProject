import React from "react";
import { Text, View } from "react-native";
import { List } from "react-native-paper";
import { StyleSheet, Dimensions } from "react-native";
import { RestrictionInfo } from "./restrictionInfo";

export function FlowbasedRestriction() {
    return (
        <List.Accordion style={styles.container}
        left={() => <RestrictionInfo restrictionTitle={'CURRENT FLOW BASED RESTRICTION: '} restriction={'NONE'}
        data={{
          flowAtRestriction: 45, 
          instaneous: 34, 
          hourlyRestriction: 28, 
          annualRestriction: 2800, 
          dailyRestriction: 40
        }}/>} >
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
        height:Dimensions.get('window').height * 0.4, 
        marginLeft:Dimensions.get('window').width *0.05, 
        marginRight:Dimensions.get('window').width * 0.08,
        borderRadius: 20,
        backgroundColor: '#eeeeee',
    },
    dropDown: {
        marginTop: Dimensions.get('window').width * -0.05,
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
