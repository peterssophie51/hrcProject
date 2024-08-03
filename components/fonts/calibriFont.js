import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Text, StyleSheet } from 'react-native';



export function CalibriText(props) {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'Calibri': require('../../assets/fonts/Calibri.ttf'), // Adjust the path as necessary
            });
            setFontLoaded(true);
        }

        loadFont();
    }, []);

    if (!fontLoaded) {
        return null; 
    }

    return (
        <Text style={[props.style, {fontFamily: 'Calibri'}]}>{props.title}</Text>
    );
}

