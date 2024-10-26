import React from "react";
import SwitchSelector from "react-native-switch-selector";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import * as Font from 'expo-font'
import { useState, useEffect } from "react";

//
export function Switch(props) {

  const [fontLoaded, setFontLoaded] = useState(false);
  //function to load in calibri bold and calibri font
  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({ 
          'CalibriBold': require('../assets/fonts/calibrib.ttf'),
          'Calibri': require('../assets/fonts/Calibri.ttf'),
        });
        setFontLoaded(true);
      } catch (error) {
        console.error("Error loading font: ", error);
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
      style={props.style}
      options={props.options}
      backgroundColor={props.backgroundColour}
      initial={props.initial}
      height={Dimensions.get('window').height * 0.07}
      fontSize={25}
      textStyle={{fontFamily:'CalibriBold', color:props.disabled ? '#999999' : 'white'}}
      selectedTextStyle={{fontFamily:'CalibriBold', color:'black'}}
      onPress={value => {props.action(value)}} 
      disabled = {props.disabled}
      value={ props.type == 'totalled' ? 0 : props.disabled ? props.initial : null}
  />)}
  
