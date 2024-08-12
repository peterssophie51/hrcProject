import React from "react";
import { Text, View, Button } from "react-native";
import { List } from "react-native-paper";
import { StyleSheet, Dimensions } from "react-native";
import { RestrictionInfo } from "./restrictionInfo";

export function FlowbasedRestriction() {
     const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);
    return (
        <View>
        <List.Accordion style={styles.container}
        left={() => <RestrictionInfo restrictionTitle={'CURRENT FLOW BASED RESTRICTION: '} restriction={'NONE'}
        data={{
          instaneous: 41.5,
          dailyRestriction: 2000
        }}
        right={() => <Text style={{marginLeft:-100, fontSize: 20, zIndex: 2}}>Test</Text>}
        />} 

        >
        <List.Item left={ () => 
            <View>
                <RestrictionInfo restrictionTitle={'FLOW BASED RESTRICTION: '} restriction={'ONE'}
                    data={{ flowAtRestriction: 13.900, instaneous: 20.75, dailyRestriction: 2000}}/>
                <RestrictionInfo restrictionTitle={'FLOW BASED RESTRICTION: '} restriction={'TWO'}
                    data={{ flowAtRestriction: 11.100, dailyRestriction: 140}} />
            </View>
            
        } style={styles.dropDown}/>
      </List.Accordion>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: Dimensions.get('window').width * 0.04, 
        width: Dimensions.get('window').width * 0.9,
        height:Dimensions.get('window').height * 0.38, 
        marginLeft:Dimensions.get('window').width *0.05, 
        marginRight:Dimensions.get('window').width * 0.08,
        borderRadius: 20,
        backgroundColor: '#eeeeee',
        
    },
    dropDown: {
        marginTop: Dimensions.get('window').width * -0.04,
        backgroundColor: '#eeeeee',
        marginLeft: Dimensions.get('window').width *0.05, 
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.74,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
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
