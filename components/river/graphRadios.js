import React, { useState } from "react";
import { RadioGroup } from "react-native-radio-buttons-group";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { useEffect } from "react";
import * as Font from 'expo-font'

export function TimeRadios(props) {

    const [fontLoaded, setFontLoaded] = useState(false);
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
    
    const handlePress = (name, data, labels) => {
        props.setselectedTime(name);
        props.setcurrentData(data)
        props.setcurrentLabels(labels)
        
    }

    return (
        <View style={styles.container}>
            <View style={{display:'flex', flexDirection:'row'}}>
                <View style={styles.radioTopLeft}>
                    <RadioGroup 
                        onPress={() => handlePress('1 DAY', props.oneDayData, props.oneDayLabels)}
                        selectedId={props.selectedTime}
                        radioButtons={[
                            {id:'1 DAY', label:'1 DAY', color:'#72BF44', 
                                borderColor: props.selectedTime == '1 DAY' ? '#72BF44' : 'black'}]}
                        layout='vertical'
                        labelStyle={styles.labels}
                        style={styles.radios}
                    />
                </View>
                <View style={styles.radioTopRight}>
                    <RadioGroup 
                        onPress={() => handlePress('7 DAYS', props.sevenDayData, props.sevenDayLabels)}
                        selectedId={props.selectedTime}
                        radioButtons={[
                            {id:'7 DAYS', label:'7 DAYS', color:'#72BF44', 
                                borderColor: props.selectedTime == '7 DAYS' ? '#72BF44' : 'black'}]}
                        layout='vertical'
                        labelStyle={styles.labels}
                        style={styles.radios}
                    />
                </View>
            </View>
            <View style={{display:'flex',flexDirection:'row'}}>
                <View style={styles.radioBottomLeft}>
                    <RadioGroup 
                        onPress={() => handlePress('1 MONTH', props.oneMonthData, props.oneMonthLabels)}
                        selectedId={props.selectedTime}
                        radioButtons={[
                            {id:'1 MONTH', label:'1 MONTH', color:'#72BF44', 
                                borderColor: props.selectedTime == '1 MONTH' ? '#72BF44' : 'black'}]}
                        layout='vertical'
                        labelStyle={styles.labels}
                        style={styles.radios}
                    />
                </View>
                <View style={styles.radioBottomRight}>
                    <RadioGroup 
                        onPress={() => handlePress('ANNUAL', props.annualData, props.annualLabels)}
                        selectedId={props.selectedTime}
                        radioButtons={[
                            {id:'ANNUAL', label:'ANNUAL', color:'#72BF44', 
                                borderColor: props.selectedTime == 'ANNUAL' ? '#72BF44' : 'black'}]}
                        layout='vertical'
                        labelStyle={styles.labels}
                        style={styles.radios}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Dimensions.get('window').width * 0.05, 
        width: Dimensions.get('window').width * 0.9,
        height:Dimensions.get('window').height * 0.14, 
        marginLeft:Dimensions.get('window').width *0.05, 
        marginRight:Dimensions.get('window').width * 0.08,
        borderRadius: 20,
        backgroundColor: '#eeeeee',
        display: 'flex',
        flexDirection: 'column'
    },
    labels: {
        fontSize:25, 
        fontFamily:'CalibriBold', 
        color:'black'
    },
    radioTopLeft: {
        marginTop: Dimensions.get('window').height * 0.0125,
        marginLeft: Dimensions.get('window').width * 0.05
    }, 
    radioTopRight: {
        marginTop: Dimensions.get('window').height * 0.0125,
        marginLeft: Dimensions.get('window').width * 0.14
    },
    radioBottomLeft: {
        marginLeft: Dimensions.get('window').width * 0.05
    }, 
    radioBottomRight: {
        marginLeft: Dimensions.get('window').width * 0.04

    }
})