import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import { List } from "react-native-paper";
import { DatatypeItem } from "./datatypeItem";
import { useEffect } from "react";
import * as Font from 'expo-font'

export function DatatypeSelector(props) {
    const [expanded, setExpanded] = useState(false);
    const [fontLoaded, setFontLoaded] = useState(false);
    const [flowMeters, setflowMeters] = useState([
        {meter: 'FLOW METER 1', name: 'Animals'},
        {meter: 'FLOW METER 2', name:'Farm'},
    ])

    const handlePress = () => setExpanded(!expanded)

    const handleDataClick = () => {
        props.setcurrentDatatypeNickname('Total Water Usage')
        props.setcurrentDatatype('')
    }

    const updateFlowMeter = (updatedFlowMeter) => {
        const updatedFlowMeters = flowMeters.map((flowMeter) =>
            flowMeter.meter === updatedFlowMeter.meter ? updatedFlowMeter : flowMeter
        );
        setflowMeters(updatedFlowMeters);
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
                {flowMeters.map((item, itemIndex) => { 
                    return (
                        <DatatypeItem 
                            key={item.meter}
                            description={item.meter} 
                            setcurrentDatatypeNickname={props.setcurrentDatatypeNickname} 
                            setcurrentDatatype={props. setcurrentDatatype}
                            currentDatatype={props.currentDatatype} 
                            currentDatatypeNickname={props.currentDatatypeNickname}
                            flowMeter={flowMeters[itemIndex]}
                            updateFlowMeter={updateFlowMeter}/>
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