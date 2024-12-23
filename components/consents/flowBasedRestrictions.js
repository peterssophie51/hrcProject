import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions} from "react-native";
import { List } from "react-native-paper";
// importing components
import { RestrictionInfo } from "./restrictionInfo";

// accordion list of all flow based restrictions at bottom of consents page
export function FlowbasedRestriction(props) {
    const [expanded, setExpanded] = React.useState(false); // set whether accordion is expanded or not
    const [currentRestriction, setcurrentRestriction] = React.useState(''); // set which flow based restriction is currently in effect
    useEffect(() => {
        function getRestriction(value, restrictions) {
            for (let i = 1; i < restrictions.length; i++) { // Start from index 1
                const item = restrictions[i];
        
                // Check if flfowAtRestriction is a number and not an empty string
                if (typeof item.flowAtRestriction === 'number' && value > item.flowAtRestriction) {
                    return restrictions[i - 1].restriction; // Return the previous restriction
                }
            }
            
            // If x is less than or equal to the smallest flowAtRestriction
            return restrictions[restrictions.length - 1].restriction; // Return the last restriction
        }
        const result = getRestriction(props.currentRiverFlow, props.restrictions);
        
        setcurrentRestriction(result)
    }, [props.restrictions, props.currentRiverFlow])
    // ifndex in restriction list for current flow based restriction
    const index = props.restrictions.findIndex(item => item.restriction === currentRestriction); 
    const validIndex = index !== -1 ? index : 0; // default to 0 if no match is found

    // max index of list ignoring current consent
    const maxIndex = props.restrictions.length - 1;

    return (
        <View>
        <List.Accordion 
            style={[styles.container, props.restrictions.length == 1  || expanded ? 
                { height:Dimensions.get('window').height * 0.42} :
                { height:Dimensions.get('window').height * 0.48}
            ]} 
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
                        flowAtRestriction: props.restrictions[validIndex].flowAtRestriction || '—',
                        instantaneous: props.restrictions[validIndex].instantaneous || '—',
                        hourly: props.restrictions[validIndex].hourly || '—',
                        daily: props.restrictions[validIndex].daily || '—',
                        annually: props.restrictions[validIndex].annually || '—'
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
                                    key={itemIndex}
                                    lessMore={'less'}
                                    restrictionTitle={'FLOW BASED RESTRICTION: '} 
                                    restriction={item.restriction} 
                                    visible={itemIndex === maxIndex || (itemIndex === maxIndex - 1 && validIndex === maxIndex)} 
                                    expanded={expanded} 
                                    setExpanded={setExpanded}
                                    data={{ 
                                        flowAtRestriction: item.flowAtRestriction || '—',
                                        instantaneous: item.instantaneous || '—',
                                        hourly: item.hourly || '—',
                                        daily: item.daily || '—',
                                        annually: item.annually || '—'
                                    }} 
                                />
                            );
                        })}
                    </View>
                } 
                style={[styles.dropDown, {height:(Dimensions.get('window').height * 0.48 + 
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
