import * as React from 'react';
import { Image, View, Pressable, Text, TextInput, Button, TouchableOpacity, Dimensions } from 'react-native';
import { List } from 'react-native-paper';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

export function ConsentDropdownItem(props) {
    const [visible, setVisible] = useState(false);
    const [currentName, setCurrentName] = useState(props.consentNickname);
    const [consentNickname, setConsentNickname] = useState("Nickname");
    const ButtonDim=Dimensions.get('window').width  * 0.07
    const [fontLoaded, setFontLoaded] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    const handlePress = () => {
        if (props.currentConsentATH == props.description) {
            props.setcurrentConsent(currentName);
        }
        toggleVisibility();
        setConsentNickname(currentName);
    };


    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'CalibriBold': require('../assets/fonts/calibrib.ttf'), 
                'Calibri': require('../assets/fonts/Calibri.ttf')
            });
            setFontLoaded(true);
        }

        loadFont();
    }, []);

    if (!fontLoaded) {
        return null; 
    }
    

    return (
        <View style={{ borderLeftWidth: Dimensions.get('window').width * 0.05, borderRightWidth:Dimensions.get('window').width * 0.05, borderColor: 'black' }}>
            
            <List.Item 
                title={consentNickname} 
                titleStyle={{ color: 'black', fontSize: 20, fontFamily:'CalibriBold'}}
                style={{ backgroundColor: 'white', width: Dimensions.get('window').width * 0.9 }}
                descriptionStyle={{ color: 'black', fontSize: 17, fontFamily:'Calibri' }}
                description={props.description}
                onPress={() => {
                    props.setcurrentConsent(consentNickname); 
                    props.setcurrentConsentATH(props.description);
                }} 
                right={() => (
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={toggleVisibility}>
                            <Image source={require('../images/editBlack.png')} style={{ height: ButtonDim, width: ButtonDim, marginRight: 25, marginTop:3 }} />
                        </TouchableOpacity>
                        <Image source={require('../images/crossBlack.png')} style={{ height: ButtonDim, width: ButtonDim, marginTop:3 }} />
                    </View>
                )}
            />
            <View>
                {visible && (
                    <>
                        <View style={{ display: 'flex', flexDirection: 'row', backgroundColor:'white'}}>
                            <TextInput 
                                placeholder="Enter consent nickname" 
                                style={{ fontSize: 18, width: Dimensions.get('window').width * 0.53, height: 45, backgroundColor: '#eeeeee', borderColor: '#999999', borderWidth: 2, margin: 10, borderRadius: 10, padding: 10, fontFamily:'Calibri', color:'black'}} 
                                onChangeText={setCurrentName} 
                            />
                            <TouchableOpacity onPress={handlePress} style={{ marginLeft: '0.5%', width:Dimensions.get('window').width * 0.135 , height: 45, backgroundColor: '#72BF44', marginTop: 10, marginBottom: 10, borderRadius: 10 }}>
                                <Image source={require('../images/tickWhiteThick.png')} style={{ height: 30, width: 40, marginLeft: 5, marginTop: 7 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={toggleVisibility} style={{ marginLeft: '2%', width:Dimensions.get('window').width * 0.135, height: 45, backgroundColor: '#CE202F', marginTop: 10, marginBottom: 10, borderRadius: 10 }}>
                                <Image source={require('../images/crossWhiteThick.png')} style={{ height: 30, width: 30, marginLeft: 10, marginRight: 10, marginTop: 7 }} />
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </View>
        </View>
    );
}
