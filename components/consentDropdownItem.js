import * as React from 'react';
import { Image, View, Pressable, TextInput, Button, TouchableOpacity } from 'react-native';
import { List, } from 'react-native-paper';
import { useState } from 'react';



export function ConsentDropdownItem(props) {
    const [visible, setVisible] = useState(false);
    const [currentName, setcurrentName] = useState(props.consentNickname)
    const [consentNickname, setconsentNickname]= useState("Nickname")

    const toggleVisibility = () => {
        setVisible(!visible);
      };

    
      

    return(
        <View>
        <List.Item 
        title={consentNickname}
        description={props.description} 
        onPress={() => {props.setcurrentConsent(consentNickname); props.setcurrentConsentATH(props.description)}} 
        right={() => 
            <View style={{display:'flex', flexDirection:'row'}}>
                <TouchableOpacity onPress={toggleVisibility}>
                    <Image source={require('../images/editBlack.png')} style={{height:25, width:25, marginRight:20}}/>
                </TouchableOpacity>
                <Image source={require('../images/crossBlack.png')} style={{height:25, width:25}}/>
            </View>}
        />
        <View>
            {visible && (
                <>
                    <TextInput style={{ height: 50, width: 100, backgroundColor: 'pink' }} onChangeText={setcurrentName} />
                    <Button title="Submit" onPress={() => {toggleVisibility(); setconsentNickname(currentName)}}/>
                    <Button title="Cancel" onPress={toggleVisibility} />
                </>
    )}
    </View>
        </View>
    )
}



