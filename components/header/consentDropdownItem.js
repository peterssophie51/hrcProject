import * as React from 'react';
import { Image, View, TextInput, TouchableOpacity, Dimensions, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { List } from 'react-native-paper';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

// Individual component for each consent in the consent header
export function ConsentDropdownItem(props) {
    const [visible, setVisible] = useState(false); // Visibility of edit section
    const [currentName, setCurrentName] = useState(props.consentNickname); // Variable to manage edited nickname
    const [fontLoaded, setFontLoaded] = useState(false);

    // Handle visibility of edit section within list of consents 
    const toggleVisibility = () => {
        setVisible(!visible);
    };

    // Handle submit of edited nickname
    const handlePress = () => {
        if (props.currentConsentATH === props.description) {
            props.setcurrentConsent(currentName);
        }
        toggleVisibility();
        const updatedConsent = { ath: '', nickname: '' };
        updatedConsent['ath'] = props.description;
        updatedConsent['nickname'] = currentName;
        props.updateConsent(updatedConsent);
    };

    // Function to load in Calibri Bold and Calibri fonts
    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'CalibriBold': require('../../assets/fonts/calibrib.ttf'), 
                'Calibri': require('../../assets/fonts/Calibri.ttf')
            });
            setFontLoaded(true);
        }

        loadFont();
    }, []);

    // Do not load content if font does not load
    if (!fontLoaded) {
        return null; 
    }

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={150} 
        >
            <View style={styles.inner}>
                <List.Item 
                    title={props.nickname}
                    description={props.description}
                    titleStyle={props.currentConsentATH === props.description
                        ? { color: '#72BF44', fontSize: 20, fontFamily: 'CalibriBold' }
                        : { color: 'black', fontSize: 20, fontFamily: 'CalibriBold' }
                    }
                    descriptionStyle={props.currentConsentATH === props.description
                        ? { color: '#72BF44', fontSize: 17, fontFamily: 'Calibri' }
                        : { color: 'black', fontSize: 17, fontFamily: 'Calibri' }
                    }
                    style={{ backgroundColor: 'white', width: Dimensions.get('window').width * 0.9 }}
                    onPress={() => {
                        props.setcurrentConsent(props.nickname); 
                        props.setcurrentConsentATH(props.description);
                        props.setExpanded(!props.expanded);
                    }} 
                    right={() => (
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            {/* Edit button for list buttons */}
                            <TouchableOpacity onPress={toggleVisibility}>
                                <Image 
                                    source={props.currentConsentATH === props.description
                                        ? require('../../images/editGreen.png')  
                                        : require('../../images/editBlack.png') 
                                    }
                                    style={styles.editButton} 
                                />
                            </TouchableOpacity>
                            {/* Cross button for list buttons */}
                            <Image 
                                source={props.currentConsentATH === props.description
                                    ? require('../../images/crossGreen.png')  
                                    : require('../../images/crossBlack.png') 
                                }
                                style={styles.crossButton} 
                            />
                        </View>
                    )}
                />
                {/* Edit section for each list item */}
                {visible && ( // Allow the following code to be toggled on/off for visibility
                    <View>
                        <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'white' }}>
                            {/* Text input to edit consent nickname */}
                            <TextInput 
                                placeholder="Enter consent nickname" 
                                style={styles.editInput} 
                                onChangeText={setCurrentName} 
                            />
                            {/* Button to submit new consent nickname */}
                            <TouchableOpacity onPress={handlePress} style={styles.submitButtonContainer}>
                                <Image source={require('../../images/tickWhiteThick.png')} style={styles.submitButton} />
                            </TouchableOpacity>
                            {/* Button to cancel editing consent nickname */}
                            <TouchableOpacity onPress={toggleVisibility} style={styles.crossButtonContainer}>
                                <Image source={require('../../images/crossWhiteThick.png')} style={styles.crossButton} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensure the container takes the full space available
    },
    inner: {
        borderLeftWidth: Dimensions.get('window').width * 0.05, 
        borderRightWidth: Dimensions.get('window').width * 0.05, 
        borderColor: 'black',
    },
    editButton: {
        height: Dimensions.get('window').width * 0.07, 
        width: Dimensions.get('window').width * 0.07, 
        marginRight: 25, 
        marginTop: 3,
    },
    crossButton: {
        height: Dimensions.get('window').width * 0.07, 
        width: Dimensions.get('window').width * 0.07, 
        marginTop: 3,
    },
    editInput: {
        fontSize: 18, 
        width: Dimensions.get('window').width * 0.53, 
        height: 45, 
        backgroundColor: '#eeeeee', 
        borderColor: '#999999', 
        borderWidth: 2, 
        margin: 10, 
        borderRadius: 10, 
        padding: 10, 
        fontFamily: 'Calibri', 
        color: 'black',
    },
    submitButtonContainer: {
        marginLeft: '0.5%', 
        width: Dimensions.get('window').width * 0.135, 
        height: 45, 
        backgroundColor: '#72BF44', 
        marginTop: 10, 
        marginBottom: 10, 
        borderRadius: 10,
    },
    submitButton: {
        height: 30, 
        width: 40, 
        marginLeft: 5, 
        marginTop: 7,
    },
    crossButtonContainer: {
        marginLeft: '2%', 
        width: Dimensions.get('window').width * 0.135, 
        height: 45, 
        backgroundColor: '#CE202F', 
        marginTop: 10, 
        marginBottom: 10, 
        borderRadius: 10,
    },
    crossButton: {
        height: 30, 
        width: 30, 
        marginLeft: 10, 
        marginRight: 10, 
        marginTop: 7,
    },
});
