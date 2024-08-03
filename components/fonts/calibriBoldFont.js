import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Text} from 'react-native';


//function to load in calibri bold font
export function CalibriBoldText(props) {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFont() { //other actions can be completed simultaneously
            await Font.loadAsync({
                'CalibriBold': require('../../assets/fonts/calibrib.ttf'), // 
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
        //component created to reuse in other pages for calibri bold font
        <Text style={[props.style, {fontFamily: 'CalibriBold'}]}>{props.title}</Text>
    );
}

