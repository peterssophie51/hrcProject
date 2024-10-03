import React from "react";
import { Dimensions, View, Text, TextInput, Image } from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { Switch } from "react-native-switch";
import { List } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Font from 'expo-font';

export function TextinputAlertCard () {
  const [enabled, setEnabled] = useState(false);
  const toggleSwitch = () => setEnabled(!enabled);
  const [expanded, setexpanded] =useState(false)
  const toggleExpanded = () => setexpanded(!expanded)
  const [inputValue, setinputValue] = useState("")

  const [fontLoaded, setFontLoaded] = useState(false);
  //function to load in calibri bold and calibri fonts
  useEffect(() => {
    async function loadFont() {
        await Font.loadAsync({ //other actions can be completed simultaneously
            'CalibriBold': require('../../assets/fonts/calibrib.ttf'), 
            'Calibri': require('../../assets/fonts/Calibri.ttf')
        });
        setFontLoaded(true);
    }

    loadFont();
}, []);

//do not load content if font does not load
if (!fontLoaded) {
    return null; 
}

    return (
        <List.Accordion
            style={[styles.container, { 
                borderBottomLeftRadius: expanded ? 0 : 20,
                borderBottomRightRadius: expanded ? 0 : 20,}]}
            expanded={expanded}
            disabled={true}
        
            right={() => (
                <View style={styles.openContainer}>
                    <View style={styles.textcontainer}>
                        <CalibriBoldText title='River Fladasow' style={styles.title} />
                    </View>
                    <View>
                    <TouchableOpacity onPress={(e) => {
                        e.stopPropagation()
                        console.log('switch clicked')}}>
                        <Switch 
                            value={enabled}
                            onPress={() => console.log('switch clicked')}
                            circleSize={Dimensions.get('window').width * 0.07}
                            barHeight={Dimensions.get('window').width * 0.08}
                            switchWidthMultiplier={2}
                            backgroundActive={'#72BF44'}
                            backgroundInactive={'#CCCCCC'}
                            circleActiveColor={'#243746'}
                            circleInActiveColor={'#243746'}
                            renderActiveText={false}
                            renderInActiveText={false}
                        />
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => console.log('arrow clicked')}>
                        <Image source={require('../../images/dropUpBlack.png')} style={{height: 20, width: 32}}/>
                    </TouchableOpacity>
                </View>
            )}
        >
            <List.Item 
                right={() => (
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <TextInput 
                            value={inputValue}
                            onChangeText={text => setinputValue(text)}
                            style={styles.input}
                        />
                        <View style={styles.unitsContainer}>
                            <CalibriBoldText title='M'style={styles.units}/>
                            <CalibriBoldText title='3'style={styles.superscript}/>
                            <CalibriBoldText title='/S' style={styles.units}/>
                        </View>
                    </View>
                )}
                style={styles.item}
            />
        </List.Accordion>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE',
        width: Dimensions.get('window').width * 0.9,
        marginTop: Dimensions.get('window').width * 0.04, 
        marginLeft: 3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        fontSize: 22
    },
    switchContainer: {
        justifyContent: 'center'
    },
    textcontainer: {
        width: Dimensions.get('window').width * 0.5
    },
    item: {
        backgroundColor: '#EEEEEE',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: Dimensions.get('window').width * 0.9,
        marginLeft: 3,
    },
    openContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    input: {
        height: Dimensions.get('window').height * 0.06,
        width: Dimensions.get('window').width * 0.8,
        backgroundColor: '#CCCCCC',
        borderRadius: 20,
        fontSize: 18, 
        borderRadius: 10, 
        fontFamily:'Calibri', 
        color:'black',
        padding: 10,
        zIndex: 2
    },
    textcontainer: {
        width: Dimensions.get('window').width * 0.5
    },
    unitsContainer: {
        zIndex: 5,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        marginTop: Dimensions.get('window').height * 0.01,
        marginLeft: Dimensions.get('window').width * 0.65
    },
    units: {
        fontSize: 20
    },
    superscript: {
        fontSize: 15,
        lineHeight:23
    }
})