import React from "react";
import { List } from "react-native-paper";
import { useState, useEffect } from "react";
import * as Font from 'expo-font'
import { Dimensions, Image, View, StyleSheet, Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export function DatatypeItem(props) {
    const [fontLoaded, setFontLoaded] = useState(false)
    const [ visibility, setvisibility] = useState(false)
    
    const handlePress = () => {
        props.setcurrentDatatypeNickname(props.title); 
        props.setcurrentDatatype(props.description)
    }

    const handleEditPress = () => {
        setvisibility(!visibility)
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
                title={props.title} 
                titleStyle={{fontFamily:'Calibri', fontSize:18, 
                    color:props.currentDatatype === props.description ? '#72BF44': 'black'}}
                descriptionStyle={{fontFamily:'Calibri', fontSize:15, 
                    color:props.currentDatatype === props.description ? '#72BF44': 'black'}}
                description={props.description}
                onPress={handlePress}
                style={{
                    backgroundColor:'#eeeeee',
                    width: Dimensions.get('window').width * 0.9,
                    marginLeft: Dimensions.get('window').width * 0.05 }}
                right={() => (
                    <TouchableOpacity onPress={handleEditPress}>
                        <Image source={props.currentDatatype == props.description ? 
                            require('../../images/editGreen.png') : require('../../images/editBlack.png')} 
                            style={{
                                height: Dimensions.get('window').width  * 0.068, 
                                width: Dimensions.get('window').width  * 0.07,
                                marginTop: Dimensions.get('window').width * 0.01}}/>
                    </TouchableOpacity>)}
            />
            
            { visibility && (
                <>
                    <Text>Edit Section here</Text>
                </>

            )}
        </View>

    )
}

const styles = StyleSheet.create({
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
        fontFamily:'Calibri', 
        color:'black'
    },
    submitButtonContainer: {
        marginLeft: '0.5%', 
        width:Dimensions.get('window').width * 0.135 , 
        height: 45, 
        backgroundColor: '#72BF44', 
        marginTop: 10, 
        marginBottom: 10, 
        borderRadius: 10
    },
    submitButton: {
        height: 30, 
        width: 40, 
        marginLeft: 5, 
        marginTop: 7 
    },
    crossButtonContainer: {
        marginLeft: '2%', 
        width:Dimensions.get('window').width * 0.135, 
        height: 45, 
        backgroundColor: '#CE202F', 
        marginTop: 10, 
        marginBottom: 10, 
        borderRadius: 10
    },
    crossButton: {
        height: 30, 
        width: 30, 
        marginLeft: 10, 
        marginRight: 10, 
        marginTop: 7 
    }
})