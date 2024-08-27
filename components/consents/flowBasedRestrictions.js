import React from "react";
import { View, } from "react-native";
import { List } from "react-native-paper";
import { StyleSheet, Dimensions } from "react-native";
import { RestrictionInfo } from "./restrictionInfo";

export function FlowbasedRestriction() {
    const [expanded, setExpanded] = React.useState(false); //set whether accordion is expanded or not
    const [currentRestriction, setcurrentRestriction] = React.useState('NONE') //set which flow based restriction is currently in effect

    //all data for different flow based restrictions
    const restrictions= [
        {   
            id: 0,
            restriction:'NONE', 
            flowAtRestriction: '', 
            instaneous: 41.5, 
            hourlyRestriction: '', 
            dailyRestriction: 2000,
            annualRestriction: ''
        },
        {
            id:1,
            restriction:'ONE', 
            flowAtRestriction: 13.900, 
            instaneous: 20.75, 
            hourlyRestriction: '', 
            dailyRestriction: 2000,
            annualRestriction: ''
        },
        {
            id: 2,
            restriction:'TWO', 
            flowAtRestriction: 11.100, 
            instaneous: '', 
            hourlyRestriction: '', 
            dailyRestriction: 140,
            annualRestriction: ''
        }, 
    ]
  
    const index = restrictions.findIndex(item => item.restriction === currentRestriction); //index in restriction list for current flow based restriction
    const maxIndex =restrictions.length -1 //max index of list


    return (
        <View>
        <List.Accordion style={styles.container} 
        expanded={expanded}
        onPress={() => { 
            if (restrictions.length !== 1) {
                setExpanded(!expanded);
            }
        }}
        left={() => 
            <RestrictionInfo 
                restrictionTitle={'CURRENT FLOW BASED RESTRICTION: '} 
                restriction={restrictions[index].restriction} 
                visible={(expanded == true || restrictions.length == 1) ? false : true} 
                lessMore={'more'} 
                expanded={expanded} 
                setExpanded={setExpanded}
                data={{ 
                    flowAtRestriction: restrictions[index].flowAtRestriction,
                    instaneous: restrictions[index].instaneous,
                    hourlyRestriction: restrictions[index].hourlyRestriction,
                    dailyRestriction: restrictions[index].dailyRestriction,
                    annualRestriction: restrictions[index].annualRestriction
                }}
            />} 
        >
        <List.Item left={ () => 
            <View>
                 {restrictions.map((item, itemIndex) => { 
                    if (itemIndex === index) {
                        return null; 
                    }
                    return (
                        <RestrictionInfo 
                            key={item.id}
                            restrictionTitle={'FLOW BASED RESTRICTION: '} 
                            restriction={item.restriction} 
                            visible={itemIndex === maxIndex || (itemIndex === maxIndex - 1 && index === maxIndex)} 
                            expanded={expanded} setExpanded={setExpanded}
                            data={{ 
                                flowAtRestriction: item.flowAtRestriction,
                                instaneous: item.instaneous,
                                hourlyRestriction: item.hourlyRestriction,
                                dailyRestriction: item.dailyRestriction,
                                annualRestriction: item.annualRestriction
                    	    }} 
                        />
                    );
                })}
            </View>
            
        } style={[styles.dropDown, {height:(Dimensions.get('window').height * 0.45 + 
                (Dimensions.get('window').height * 0.4 * (restrictions.length -2)))}]} />
      </List.Accordion>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: Dimensions.get('window').width * 0.04, 
        width: Dimensions.get('window').width * 0.9,
        height:Dimensions.get('window').height * 0.45, 
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
