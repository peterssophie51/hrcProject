import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { List } from "react-native-paper";
import { useEffect } from "react";
import * as Font from 'expo-font'
//importing components
import { DatatypeItem } from "./datatypeItem";

//component that allows users to choose the data displayed on the graph
export function DatatypeSelector(props) {
    const [fontLoaded, setFontLoaded] = useState(false);

    //function to handle click of drop down/up arrow
    const handlePress = () => {
        props.setExpanded(!props.expanded)
     
    }

    //handle total water usage clicked
    const handleDataClick = () => {
        props.setcurrentDatatypeNickname('Total Water Usage') //set current datatype name
        props.setcurrentDatatype('') //set flow meter type
        props.setExpanded(!props.expanded)
        //depending on the selected timeframe, change the data
        if (props.selectedTime == '1 DAY') {
            props.setcurrentData(props.totalWaterUsage[0])
        } else if (props.selectedTime == '7 DAYS') {
            props.setcurrentData(props.totalWaterUsage[1])
        } else if (props.selectedTime == '1 MONTH') {
            props.setcurrentData(props.totalWaterUsage[2])
        } else if (props.selectedTime == 'ANNUAL') {
            props.setcurrentData(props.totalWaterUsage[2])
        }
    }

    //function to handle the edited nickname
    const updateFlowMeter = (updatedFlowMeter) => {
        const updatedFlowMeters =[] //list of new updated flow meters
        props.flowMeters.map((flowMeter, index) => {
            if (flowMeter['name'] == updatedFlowMeter.name) { //if edited flowmeter, fetch new nickname and append with other same info to list
                flowMeter['nickname'] = updatedFlowMeter['nickname']
                updatedFlowMeters.push(flowMeter)
            } else {
                updatedFlowMeters.push(flowMeter) //if not edited flowmeter push same value to list
            }
        })
        props.setflowMeters(updatedFlowMeters); //update flowmeters
    };

    //function to load in calibri bold and calibri font
    useEffect(() => {
        async function loadFont() {
        try {
            await Font.loadAsync({ //other actions can be completed simultaneously
            'CalibriBold': require('../../assets/fonts/calibrib.ttf'),
            'Calibri': require('../../assets/fonts/Calibri.ttf'),
            });
            setFontLoaded(true);
        } catch (error) {
            console.error("Error loading fonts: ", error);
        }
        }

        loadFont();
    }, []);

    //do not load content if font does not load
    if (!fontLoaded) {
        return null; 
    }

    return (
        //container for datatype selector
        <View style={[styles.container]}>
          
            <List.Accordion
                title={props.currentDatatypeNickname}
                description={props.currentDatatype}
                titleStyle={{fontSize:22, fontFamily:'CalibriBold', color:'black'}}
                descriptionStyle={{fontSize:16, fontFamily: 'Calibri', color:'black'}}
                expanded={props.expanded}
                onPress={handlePress}
                right={() => ( //image to expand/unexpand depending on whether expanded or not
                    <Image
                      source={props.expanded 
                        //show drop up image if accordion dropped down
                        ? require('../../images/dropUpBlack.png')  
                        //show drop down image if accordion dropped up
                        : require('../../images/dropDownBlack.png') 
                      }
                      style={{ height: 15, width: 25 }}
                    />
                  )}
                style={[styles.accordion, {borderBottomLeftRadius: (props.expanded == true) ? 0 : 20,
                    borderBottomRightRadius: (props.expanded == true) ? 0 : 20,}]}> 
                {props.flowMeters.map((item, itemIndex) => {  //map through list of flowmeters to show item for each flow meter
                    return ( 
                        <DatatypeItem 
                            key={itemIndex}
                            description={item.name} 
                            setcurrentDatatypeNickname={props.setcurrentDatatypeNickname} 
                            setcurrentDatatype={props. setcurrentDatatype}
                            currentDatatype={props.currentDatatype} 
                            currentDatatypeNickname={props.currentDatatypeNickname}
                            flowMeter={props.flowMeters[itemIndex]}
                            updateFlowMeter={updateFlowMeter}
                            setcurrentData={props.setcurrentData}
                            data ={item['data']}
                            selectedTime={props.selectedTime}
                            setExpanded={props.setExpanded}
                            expanded={props.expanded}
                            />
                    );
                })}
                <List.Item title="Total Water Usage" //list item for total water usage as needs to be seperate
                    onPress={handleDataClick}
                    titleStyle={{fontFamily:'Calibri', fontSize:18, 
                        color: props.currentDatatypeNickname == 'Total Water Usage' ? '#72BF44' : 'black'}}
                    style={{
                        width: Dimensions.get('window').width * 0.9,
                        marginLeft: Dimensions.get('window').width * 0.05,
                        borderBottomLeftRadius:20, 
                        borderBottomRightRadius:20, 
                        zIndex: 2,
                        backgroundColor:'#eeeeee'}}/>
            </List.Accordion>
        </View>
    );
}

const styles = StyleSheet.create({
    accordion: { //style datatype selector
        borderTopLeftRadius:20, 
        borderTopRightRadius:20, 
        backgroundColor:'#eeeeee', 
        alignContent: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.1,
        marginLeft: Dimensions.get('window').width * 0.05,
        marginTop: Dimensions.get('window').width * 0.05,
        zIndex: 2
    },
    container: { //style container for datatype selector
        marginTop: (Dimensions.get('window').height * 0.39) + (Dimensions.get('window').width * 0.18),
        position:'absolute'
    }
})