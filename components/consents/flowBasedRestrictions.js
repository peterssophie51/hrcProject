import React from "react";
import { View, StyleSheet, Dimensions} from "react-native";
import { List } from "react-native-paper";
//importing components
import { RestrictionInfo } from "./restrictionInfo";

//accordion list of all flow based restrictions at bottom of consents page
export function FlowbasedRestriction() {
    const [expanded, setExpanded] = React.useState(false); //set whether accordion is expanded or not
    const [currentRestriction, setcurrentRestriction] = React.useState('NONE') //set which flow based restriction is currently in effect
    //all data for different flow based restrictions
    const restrictions= [
        {   
            id: 0,
            restriction:'NONE', 
            flowAtRestriction: 41.58, 
            instantaneous:1.605, 
            hourlyRestriction: '', 
            dailyRestriction: 200,
            annualRestriction: ''
        },
        {
            id:1,
            restriction:'ONE', 
            flowAtRestriction: 13.9007, 
            instantaneous: 20.75, 
            hourlyRestriction: '', 
            dailyRestriction: 2000,
            annualRestriction: ''
        },
        {
            id: 2,
            restriction:'TWO', 
            flowAtRestriction: 11.100, 
            instantaneous: '', 
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
        //expand the flow based restrictions (if there are restrictions to show)
        onPress={() => { 
            if (restrictions.length !== 1) {
                setExpanded(!expanded);
            }
        }}
        //show current flow based restriction data
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
                    instantaneous: restrictions[index].instantaneous,
                    hourlyRestriction: restrictions[index].hourlyRestriction,
                    dailyRestriction: restrictions[index].dailyRestriction,
                    annualRestriction: restrictions[index].annualRestriction
                }}
            />} 
        >
    
        <List.Item left={ () => 
            <View>
                 {restrictions.map((item, itemIndex) => { 
                    //do not repeat the current flow based restrictions
                    if (itemIndex === index) {
                        return null; 
                    }
                    return (
                        //render the flow based restriction
                        <RestrictionInfo 
                            key={item.id}
                            lessMore={'less'}
                            restrictionTitle={'FLOW BASED RESTRICTION: '} 
                            restriction={item.restriction} 
                            visible={itemIndex === maxIndex || (itemIndex === maxIndex - 1 && index === maxIndex)} 
                            expanded={expanded} setExpanded={setExpanded}
                            data={{ 
                                flowAtRestriction: item.flowAtRestriction,
                                instantaneous: item.instantaneous,
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
    container:{ //style the container of the flow based restrictions
        marginTop: Dimensions.get('window').width * 0.04, 
        width: Dimensions.get('window').width * 0.9,
        height:Dimensions.get('window').height * 0.45, 
        marginLeft:Dimensions.get('window').width *0.05, 
        marginRight:Dimensions.get('window').width * 0.08,
        borderRadius: 20,
        backgroundColor: '#eeeeee',
        
    },
    dropDown: { //style the container of all other flow based restrictions
        marginTop: Dimensions.get('window').width * -0.04,
        backgroundColor: '#eeeeee',
        marginLeft: Dimensions.get('window').width *0.05, 
        width: Dimensions.get('window').width * 0.9,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
})
