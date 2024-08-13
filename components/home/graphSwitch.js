import React from "react";
import SwitchSelector from "react-native-switch-selector";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import * as Font from 'expo-font'
import { useState, useEffect } from "react";


export function GraphSwitch(props) {
  const options = [
    { label: "Annual", value: 'annual', activeColor:'#72BF44'},
    { label: "Today", value: 'day', activeColor:'#72BF44' },
  ]; //options in switch

  const [fontLoaded, setFontLoaded] = useState(false);
  //function to load in calibri bold and calibri font
  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({ 
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
      onPress={value => props.setgraphTime(value)} 
    />)}


const styles = StyleSheet.create({
  switch: {
    marginTop: Dimensions.get('window').width * 0.05, 
    width:Dimensions.get('window').width * 0.7, 
    marginLeft:Dimensions.get('window').width *0.15, 
  }
})