import * as React from 'react';
import { Image, View } from 'react-native';


export function ConsentDropdownButton() {
    return(
        <View>
            <Image source={require('../images/editBlack.png')} style={{height:30, width:30}}/>
            <Image source={require('../images/crossBlack.png')} style={{height:30, width:30}}/>
        </View>
    )
}