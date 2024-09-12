import React from "react";
import { View, StyleSheet, Dimensions} from "react-native";
import { List } from "react-native-paper";
// importing components
import { RestrictionInfo } from "./restrictionInfo";

// accordion list of all flow based restrictions at bottom of consents page
export function FlowbasedRestriction(props) {
    const [expanded, setExpanded] = React.useState(false); // set whether accordion is expanded or not
    const [currentRestriction, setcurrentRestriction] = React.useState('NONE'); // set which flow based restriction is currently in effect

    // index in restriction list for current flow based restriction
    const index = props.restrictions.findIndex(item => item.restriction === currentRestriction); 
    const validIndex = index !== -1 ? index : 0; // default to 0 if no match is found

    // max index of list ignoring current consent
    const maxIndex = props.restrictions.length - 1;

    return (
        <View>
        <List.Accordion 
            style={styles.container} 
            expanded={expanded}
            // expand the flow based restrictions (if there are restrictions to show)
            onPress={() => { 
                if (props.restrictions.length !== 1) {
                    setExpanded(!expanded);
                }
            }}
            // show current flow based restriction data
            left={() => 
                <RestrictionInfo 
                    restrictionTitle={'CURRENT FLOW BASED RESTRICTION: '} 
                    restriction={props.restrictions[validIndex].restriction} 
                    visible={(expanded === true || props.restrictions.length === 1) ? false : true} 
                    lessMore={'more'} 
                    expanded={expanded} 
                    setExpanded={setExpanded}
                    data={{ 
                        flowAtRestriction: props.restrictions[validIndex].flowAtRestriction,
                        instantaneous: props.restrictions[validIndex].instantaneous,
                        hourlyRestriction: props.restrictions[validIndex].hourlyRestriction,
                        dailyRestriction: props.restrictions[validIndex].dailyRestriction,
                        annualRestriction: props.restrictions[validIndex].annualRestriction
                    }}
                />} 
            >
            <List.Item 
                left={ () => 
                    <View>
                         {props.restrictions.map((item, itemIndex) => { 
                            // do not repeat the current flow based restrictions
                            if (itemIndex === validIndex) {
                                return null; 
                            }
                            return (
                                // render the flow based restriction
                                <RestrictionInfo 
                                    key={item.id}
                                    lessMore={'less'}
                                    restrictionTitle={'FLOW BASED RESTRICTION: '} 
                                    restriction={item.restriction} 
                                    visible={itemIndex === maxIndex || (itemIndex === maxIndex - 1 && validIndex === maxIndex)} 
                                    expanded={expanded} 
                                    setExpanded={setExpanded}
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
                } 
                style={[styles.dropDown, {height:(Dimensions.get('window').height * 0.45 + 
                        (Dimensions.get('window').height * 0.4 * (props.restrictions.length -2)))}]} 
            />
        </List.Accordion>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{ // style the container of the flow based restrictions
        marginTop: Dimensions.get('window').width * 0.04, 
        width: Dimensions.get('window').width * 0.9,
        height:Dimensions.get('window').height * 0.45, 
        marginLeft:Dimensions.get('window').width *0.05, 
        marginRight:Dimensions.get('window').width * 0.08,
        borderRadius: 20,
        backgroundColor: '#eeeeee',
    },
    dropDown: { // style the container of all other flow based restrictions
        marginTop: Dimensions.get('window').width * -0.04,
        backgroundColor: '#eeeeee',
        marginLeft: Dimensions.get('window').width *0.05, 
        width: Dimensions.get('window').width * 0.9,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
})
