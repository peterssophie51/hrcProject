import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Text, StyleSheet } from 'react-native';



export function CalibriBoldText(props) {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'CalibriBold': require('../../assets/fonts/calibrib.ttf'), // 
            });
            setFontLoaded(true);
        }

        loadFont();
    }, []);

    if (!fontLoaded) {
        return null; 
    }

    return (
        <Text style={[props.style, {fontFamily: 'CalibriBold'}]}>{props.title}</Text>
    );
}

