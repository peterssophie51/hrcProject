import React, { useState, useEffect } from 'react';
import { CheckBox } from '@rneui/themed';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font'

export function Checkbox (props) {
    const [checked, setchecked] = useState(false)
    const toggleCheckbox = () => {
        setchecked(!checked)
        props.setselectedData(prevList => {
            if (prevList.includes(props.name)) {
              return prevList.filter(listItem => listItem !== props.name);
            } else {
              return [...prevList, props.name];
            }
          });
    }
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
        <CheckBox
           checked={checked}
           onPress={toggleCheckbox}
           iconType="material-community"
           checkedIcon="checkbox-outline"
           uncheckedIcon="checkbox-blank-outline"
           size={40}
           containerStyle={{backgroundColor: '#EEEEEE', padding: 0}}
           checkedColor='black'
           uncheckedColor='black'
           title={props.title}
           textStyle={{color: 'black', fontFamily: 'Calibri', fontSize: 20}}
         />
    )
}
