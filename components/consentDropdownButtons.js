import * as React from 'react';
import { Image, View } from 'react-native';


export function ConsentDropdownButton() {
    return(
        <View style={{display:'flex', flexDirection:'row'}}>
              <Image source={require('../images/editBlack.png')} style={{height:25, width:25, marginRight:20}}/>
              <Image source={require('../images/crossBlack.png')} style={{height:25, width:25}}/>
        </View>
    )
}