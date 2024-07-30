import * as React from 'react';
import { Image, View } from 'react-native';
import { List, } from 'react-native-paper';


export function ConsentDropdownItem(props) {
    return(
        <List.Item title={props.title} description={props.description} onPress={() => {props.setcurrentConsent(props.title); props.setcurrentConsentATH(props.description)}} 
        right={() => 
            <View style={{display:'flex', flexDirection:'row'}}>
                <Image source={require('../images/editBlack.png')} style={{height:25, width:25, marginRight:20}}/>
                <Image source={require('../images/crossBlack.png')} style={{height:25, width:25}}/>
            </View>}/>
    )
}