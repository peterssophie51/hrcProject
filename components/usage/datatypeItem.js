import React from "react";
import { List } from "react-native-paper";
import { useState, useEffect } from "react";
import * as Font from 'expo-font'
import { Dimensions, Image, View, StyleSheet, Text, TextInput} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export function DatatypeItem(props) {
    const [fontLoaded, setFontLoaded] = useState(false)
    const [visibility, setvisibility] = useState(false)
    const [name, setname] = useState('')
    const [nickname, setnickname] = useState('Nickname')
    
    const handlePress = () => {

        props.setcurrentDatatypeNickname(nickname); 
        props.setcurrentDatatype(props.description)
    }

    const handleEditPress = () => {
        setvisibility(!visibility)
    }

    const handleSubmit = () => {
        setnickname(name)
        if (props.currentDatatype === props.description) {
            props.setcurrentDatatypeNickname(name)
            setvisibility(false)
        } 
        console.log(props.currentDatatypeNickname)
    }

    const handleCancel = () => {
        setvisibility(false)
    }

      //function to load in calibri bold and calibri font
      useEffect(() => {
        async function loadFont() {
        try {
            await Font.loadAsync({ //other actions can be completed simultaneously
            'CalibriBold': require('../../assets/fonts/calibrib.ttf'),
            'Calibri': require('../../assets/fonts/Calibri.ttf'),
            });
            setFontLoaded(true);
        } catch (error) {
            console.error("Error loading fonts: ", error);
        }
        }

        loadFont();
    }, []);

    //do not load content if font does not load
    if (!fontLoaded) {
        return null; 
    }

    return (
        <View>
            <List.Item 
                title={nickname} 
                titleStyle={{fontFamily:'Calibri', fontSize:18, 
                    color:props.currentDatatype === props.description ? '#72BF44': 'black'}}
                descriptionStyle={{fontFamily:'Calibri', fontSize:15, 
                    color:props.currentDatatype === props.description ? '#72BF44': 'black'}}
                description={props.description}
                onPress={handlePress}
                style={styles.itemContainer}
                right={() => (
                    <TouchableOpacity onPress={handleEditPress}>
                        <Image source={props.currentDatatype == props.description ? 
                            require('../../images/editGreen.png') : require('../../images/editBlack.png')} 
                            style={styles.editButton}/>
                    </TouchableOpacity>)}
            />
            
            { visibility && (
                <>
                    <View style={styles.editContainer}>
                        <TextInput 
                                placeholder="Enter flow meter nickname" 
                                style={styles.editInput} 
                                onChangeText={setname}
                        />
                        <TouchableOpacity style={styles.submitButtonContainer} onPress={handleSubmit}>
                            <Image source={require('../../images/tickWhiteThick.png')} style={styles.submitButton} />
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.crossButtonContainer} onPress={handleCancel}>
                            <Image source={require('../../images/crossWhiteThick.png')} style={styles.crossButton} />
                        </TouchableOpacity>

                    </View>
                </>

            )}
        </View>

    )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor:'#eeeeee',
        width: Dimensions.get('window').width * 0.9,
        marginLeft: Dimensions.get('window').width * 0.05 
    },
    editButton: {
        height: Dimensions.get('window').width  * 0.068, 
        width: Dimensions.get('window').width  * 0.07,
        marginTop: Dimensions.get('window').width * 0.01
    },
    editContainer: {
        width: Dimensions.get('window').width * 0.9,
        marginLeft: Dimensions.get('window').width * 0.05,
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#eeeeee'
    },
    editInput: {
        fontSize: 18, 
        width: Dimensions.get('window').width * 0.53, 
        height: Dimensions.get('window').width * 0.12, 
        backgroundColor: 'white', 
        borderColor: '#999999', 
        borderWidth: 2, 
        margin: Dimensions.get('window').width * 0.02, 
        borderRadius: 10, 
        padding: 10, 
        fontFamily:'Calibri', 
        color:'black'
    },
    submitButtonContainer: {
        backgroundColor: '#72BF44', 
        width:Dimensions.get('window').width * 0.135 , 
        height: Dimensions.get('window').width * 0.12, 
        marginTop: Dimensions.get('window').width * 0.02, 
        borderRadius: 10
    },
    submitButton: {
        height: Dimensions.get('window').width * 0.08, 
        width: Dimensions.get('window').width * 0.1, 
        marginLeft: Dimensions.get('window').width * 0.0175, 
        marginTop: Dimensions.get('window').width * 0.02
    },
    crossButtonContainer: {
        backgroundColor: '#CE202F', 
        marginLeft: Dimensions.get('window').width * 0.02, 
        width:Dimensions.get('window').width * 0.135 , 
        height: Dimensions.get('window').width * 0.12, 
        marginTop: Dimensions.get('window').width * 0.02, 
        borderRadius: 10
        
    },
    crossButton: {
        height: Dimensions.get('window').width * 0.09, 
        width: Dimensions.get('window').width * 0.09, 
        marginLeft: Dimensions.get('window').width * 0.0225, 
        marginTop: Dimensions.get('window').width * 0.015
    }
})