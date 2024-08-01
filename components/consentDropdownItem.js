import * as React from 'react';
import { Image, View, Pressable, Text, TextInput, Button, TouchableOpacity } from 'react-native';
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
        <View style={{borderWidth:10, borderColor:'black'}}>
        <List.Item 
        title={consentNickname}
        titleStyle={{color: 'black'}}
        style={{backgroundColor:'white', width:383}}
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
                <View style={{display:'flex', flexDirection:'row', }}>
                    <TextInput style={{ width:215, height:45, backgroundColor: '#999999', margin:10, borderRadius:10 }} onChangeText={setcurrentName} />
                        <TouchableOpacity onPress={() => handlePress()} style={{width: 50, height:45, backgroundColor:'#72BF44', margin:10, borderRadius:10}}>
                            <Text style={{color:'white'}}>\/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleVisibility} style={{width:50, height:45, backgroundColor:'#CE202F', margin:10, borderRadius:10}}>
                            <Text>X</Text>
                        </TouchableOpacity>
                    </View>
                </>
    )}
    </View>
        </View>
    )
}



