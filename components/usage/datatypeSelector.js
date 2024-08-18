import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { List } from "react-native-paper";
import { DatatypeItem } from "./datatypeItem";
import { useEffect } from "react";
import * as Font from 'expo-font'

export function DatatypeSelector() {
    const [expanded, setExpanded] = useState(false);
    const [fontLoaded, setFontLoaded] = useState(false);
    const [currentDatatypeNickname, setcurrentDatatypeNickname] =useState('Total Water Usage')
    const [currentDatatype, setcurrentDataype] = useState('')

    const handlePress = () => setExpanded(!expanded)

    const handleDataClick = () => {
        setcurrentDatatypeNickname('Total Water Usage')
        setcurrentDataype('')
    }

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
            <List.Accordion
                title={currentDatatypeNickname}
                description={currentDatatype}
                titleStyle={{fontSize:22, fontFamily:'CalibriBold', color:'black'}}
                descriptionStyle={{fontSize:16, fontFamily: 'Calibri', color:'black'}}
                expanded={expanded}
                onPress={handlePress}
                style={{
                    borderTopLeftRadius:20, 
                    borderTopRightRadius:20, 
                    backgroundColor:'#eeeeee', 
                    borderBottomLeftRadius: (expanded == true) ? 0 : 20,
                    borderBottomRightRadius: (expanded == true) ? 0 : 20,
                    width: Dimensions.get('window').width * 0.9,
                    marginLeft: Dimensions.get('window').width * 0.05,
                    marginTop: Dimensions.get('window').width * 0.05
                }}>
                <DatatypeItem description='FLOW METER 1' 
                    setcurrentDatatypeNickname={setcurrentDatatypeNickname} setcurrentDatatype={setcurrentDataype}
                    currentDatatype={currentDatatype} currentDatatypeNickname={currentDatatypeNickname}/>
                <DatatypeItem description="FLOW METER 2"
                    setcurrentDatatypeNickname={setcurrentDatatypeNickname} setcurrentDatatype={setcurrentDataype}
                    currentDatatype={currentDatatype} currentDatatypeNickname={currentDatatypeNickname}/>
                <List.Item title="Total Water Usage" 
                    onPress={handleDataClick}
                    titleStyle={{fontFamily:'Calibri', fontSize:18, 
                        color: currentDatatypeNickname == 'Total Water Usage' ? '#72BF44' : 'black'}}
                    style={{
                        width: Dimensions.get('window').width * 0.9,
                        marginLeft: Dimensions.get('window').width * 0.05,
                        borderBottomLeftRadius:20, 
                        borderBottomRightRadius:20, 
                        backgroundColor:'#eeeeee'}}/>
            </List.Accordion>
    );
}
