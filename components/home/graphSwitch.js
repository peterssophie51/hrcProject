import React from "react";
import SwitchSelector from "react-native-switch-selector";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import * as Font from 'expo-font'
import { useState, useEffect } from "react";


export function GraphSwitch() {
  const options = [
    { label: "Annual", value: "0", activeColor:'#72BF44'},
    { label: "Today", value: "1", activeColor:'#72BF44' },
  ];

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


  return (
    <SwitchSelector
      style={styles.switch}
      options={options}
      initial={0}
      backgroundColor='#243746'
      height={Dimensions.get('window').height * 0.07}
      fontSize={25}
      textStyle={{fontFamily:'CalibriBold', color:'white'}}
      selectedTextStyle={{fontFamily:'CalibriBold', color:'black'}}
    />)}

    
const styles = StyleSheet.create({
  switch: {
    marginTop: Dimensions.get('window').width * 0.05, 
    width:Dimensions.get('window').width * 0.84, 
    marginLeft:Dimensions.get('window').width *0.08, 
    marginRight:Dimensions.get('window').width * 0.08,
  }
})