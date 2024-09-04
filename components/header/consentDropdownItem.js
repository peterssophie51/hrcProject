import * as React from 'react';
import { Image, View, TextInput, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

//individual component for each consent in the consent header
export function ConsentDropdownItem(props) {
    const [visible, setVisible] = useState(false); //visibility of edit section
    const [currentName, setCurrentName] = useState(props.consentNickname); //variable to manage edited nickname
    const [fontLoaded, setFontLoaded] = useState(false);

    //handle visibility of edit section within list of consents 
    const toggleVisibility = () => {
        setVisible(!visible);
    };

    //handle submit of edited nickname
    const handlePress = () => {
        if (props.currentConsentATH == props.description) {
            props.setcurrentConsent(currentName);
        }
        toggleVisibility();
        const updatedConsent = {ath:'', nickname:''}
        updatedConsent['ath'] = props.description
        updatedConsent['nickname'] = currentName
        props.updateConsent(updatedConsent)
    };

    //function to load in calibri bold and calibri fonts
    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({ //other actions can be completed simultaneously
                'CalibriBold': require('../../assets/fonts/calibrib.ttf'), 
                'Calibri': require('../../assets/fonts/Calibri.ttf')
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
        <View style={styles.container}>
            
            <List.Item 
                title={props.nickname}
                description={props.description}

                titleStyle={props.currentConsentATH == props.description
                    //set title color to green if is active consent, otherwise black
                    ? {color: '#72BF44', fontSize: 20, fontFamily:'CalibriBold'}
                    : {color: 'black', fontSize: 20, fontFamily:'CalibriBold'}
                  }
                descriptionStyle={props.currentConsentATH == props.description
                    //set description color to green if it is active consent, otherwise black
                    ? {color: '#72BF44', fontSize: 17, fontFamily:'Calibri'}
                    : {color: 'black', fontSize: 17, fontFamily:'Calibri'}
                  }

                style={{ backgroundColor: 'white', width: Dimensions.get('window').width * 0.9 }}
                onPress={() => {
                    props.setcurrentConsent(props.nickname); 
                    props.setcurrentConsentATH(props.description);
                }} 
                right={() => (
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        {/*edit button for list buttons*/}
                        <TouchableOpacity onPress={toggleVisibility}>
                            <Image 
                                source={props.currentConsentATH == props.description
                                    //set edit image to green icon if active consent, otherwuse black
                                    ? require('../../images/editGreen.png')  
                                    : require('../../images/editBlack.png') 
                                }
                                style={styles.editButton} 
                                />
                        </TouchableOpacity>
                        {/*cross button for list buttons*/}
                        <Image 
                            source={props.currentConsentATH == props.description
                                //set cross image to green icon if active consent, otherwise black
                                ? require('../../images/crossGreen.png')  
                                : require('../../images/crossBlack.png') 
                            }
                            style={styles.crossButton} 
                        />
                    </View>
                )}
            />
        {/*edit section for each list item*/}
            <View>
                {visible && ( //allow the following code to be toggled on/off for visibility
                    <>
                        <View style={{ display: 'flex', flexDirection: 'row', backgroundColor:'white'}}>
                            {/* text input to edit consent nickname*/}
                            <TextInput 
                                placeholder="Enter consent nickname" 
                                style={styles.editInput} 
                                onChangeText={setCurrentName} 
                            />
                            {/*button to submit new consent nickname*/}
                            <TouchableOpacity onPress={handlePress} style={styles.submitButtonContainer}>
                                <Image source={require('../../images/tickWhiteThick.png')} style={styles.submitButton} />
                            </TouchableOpacity>
                            {/*button to cancel editing consent nickname*/}
                            <TouchableOpacity onPress={toggleVisibility} style={styles.crossButtonContainer}>
                                <Image source={require('../../images/crossWhiteThick.png')} style={styles.crossButton} />
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { //styling the container of the individual consent
        borderLeftWidth: Dimensions.get('window').width * 0.05, 
        borderRightWidth:Dimensions.get('window').width * 0.05, 
        borderColor: 'black' 
    },
    editButton: { //styling edit button container
        height: Dimensions.get('window').width  * 0.07, 
        width: Dimensions.get('window').width  * 0.07, 
        marginRight: 25, 
        marginTop:3
    },
    crossButton: { //styling cross button container
        height: Dimensions.get('window').width  * 0.07, 
        width: Dimensions.get('window').width  * 0.07, 
        marginTop:3 
    },
    editInput: { //styling edit nickname text input
        fontSize: 18, 
        width: Dimensions.get('window').width * 0.53, 
        height: 45, 
        backgroundColor: '#eeeeee', 
        borderColor: '#999999', 
        borderWidth: 2, 
        margin: 10, 
        borderRadius: 10, 
        padding: 10, 
        fontFamily:'Calibri', 
        color:'black'
    },
    submitButtonContainer: { //styling submit button container
        marginLeft: '0.5%', 
        width:Dimensions.get('window').width * 0.135 , 
        height: 45, 
        backgroundColor: '#72BF44', 
        marginTop: 10, 
        marginBottom: 10, 
        borderRadius: 10
    },
    submitButton: { //styling button to submit edited nickname
        height: 30, 
        width: 40, 
        marginLeft: 5, 
        marginTop: 7 
    },
    crossButtonContainer: { //styling button to cancel edited nickname
        marginLeft: '2%', 
        width:Dimensions.get('window').width * 0.135, 
        height: 45, 
        backgroundColor: '#CE202F', 
        marginTop: 10, 
        marginBottom: 10, 
        borderRadius: 10
    },
    crossButton: { //styling cancel button
        height: 30, 
        width: 30, 
        marginLeft: 10, 
        marginRight: 10, 
        marginTop: 7 
    }
})