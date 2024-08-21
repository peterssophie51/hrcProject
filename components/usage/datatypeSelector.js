import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { List } from "react-native-paper";
import { DatatypeItem } from "./datatypeItem";
import { useEffect } from "react";
import * as Font from 'expo-font'

export function DatatypeSelector(props) {
    const [expanded, setExpanded] = useState(false);
    const [fontLoaded, setFontLoaded] = useState(false);

    const handlePress = () => {
        setExpanded(!expanded)
        console.log(props.flowMeters)
    }

    const handleDataClick = () => {
        props.setcurrentDatatypeNickname('Total Water Usage')
        props.setcurrentDatatype('')
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

    const updateFlowMeter = (updatedFlowMeter) => {
        const updatedFlowMeters =[]
        props.flowMeters.map((flowMeter, index) => {
            if (flowMeter['name'] == updatedFlowMeter.name) {
                flowMeter['nickname'] = updatedFlowMeter['nickname']
                updatedFlowMeters.push(flowMeter)
            } else {
                console.log(flowMeter)
                updatedFlowMeters.push(flowMeter)
            }
        })
        props.setflowMeters(updatedFlowMeters);
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
        <View style={[styles.container]}>
            <List.Accordion
                title={props.currentDatatypeNickname}
                description={props.currentDatatype}
                titleStyle={{fontSize:22, fontFamily:'CalibriBold', color:'black'}}
                descriptionStyle={{fontSize:16, fontFamily: 'Calibri', color:'black'}}
                expanded={expanded}
                onPress={handlePress}
                right={() => (
                    <Image
                      source={expanded 
                        //show drop up image if accordion dropped down
                        ? require('../../images/dropUpBlack.png')  
                        //show drop down image if accordion dropped up
                        : require('../../images/dropDownBlack.png') 
                      }
                      style={{ height: 15, width: 25 }}
                    />
                  )}
                style={[styles.accordion, {borderBottomLeftRadius: (expanded == true) ? 0 : 20,
                    borderBottomRightRadius: (expanded == true) ? 0 : 20,}]}>
                {props.flowMeters.map((item, itemIndex) => { 
                    return ( 
                        <DatatypeItem 
                            key={item.meter}
                            description={item.name} 
                            setcurrentDatatypeNickname={props.setcurrentDatatypeNickname} 
                            setcurrentDatatype={props. setcurrentDatatype}
                            currentDatatype={props.currentDatatype} 
                            currentDatatypeNickname={props.currentDatatypeNickname}
                            flowMeter={props.flowMeters[itemIndex]}
                            updateFlowMeter={updateFlowMeter}
                            setcurrentData={props.setcurrentData}
                            data ={item['data']}
                            selectedTime={props.selectedTime}/>
                    );
                })}
                <List.Item title="Total Water Usage" 
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
    accordion: {
        borderTopLeftRadius:20, 
        borderTopRightRadius:20, 
        backgroundColor:'#eeeeee', 
        alignContent: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.11,
        marginLeft: Dimensions.get('window').width * 0.05,
        marginTop: Dimensions.get('window').width * 0.05,
        zIndex: 2
    },
    container: {
        top: (Dimensions.get('window').height * 0.39) + (Dimensions.get('window').width * 0.05),
        position:'absolute'
    }
})