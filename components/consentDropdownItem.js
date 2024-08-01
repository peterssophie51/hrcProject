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

    const handlePress = () => {
        if (props.currentConsentATH == props.description) {
            props.setcurrentConsent(currentName)
        }
        toggleVisibility()
        setconsentNickname(currentName)
    }
      

    return(
        <View>
        <List.Item 
        title={consentNickname}
        titleStyle={{color: 'black'}}
        style={{}}
        descriptionStyle={{}}
        description={props.description} 
        onPress={() => {props.setcurrentConsent(consentNickname); props.setcurrentConsentATH(props.description)}} 
        right={() => 
            <View style={{display:'flex', flexDirection:'row'}}>
                <TouchableOpacity onPress={toggleVisibility}>
                    <Image source={require('../images/editBlack.png')} style={{height:25, width:25, marginRight:25}}/>
                </TouchableOpacity>
                <Image source={require('../images/crossBlack.png')} style={{height:25, width:25}}/>
            </View>}
        />
        <View>
            {visible && (
                <>
                <View style={{display:'flex', flexDirection:'row'}}>
                    <TextInput style={{ width:'62%', backgroundColor: '#eeeeeee', marginLeft:10, marginRight:10, paddingLeft:10 }} onChangeText={setcurrentName} />
                    
                        <Button style={{marginRight:20}} title="Submit" onPress={() => handlePress()}/>
                        <Button style={{backgroundColor:'green'}}title="Cancel" onPress={toggleVisibility} />
                    </View>
                </>
    )}
    </View>
        </View>
    )
}



