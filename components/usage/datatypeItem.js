import React from "react";
import { List } from "react-native-paper";
import { useState, useEffect } from "react";
import * as Font from 'expo-font'
import { Dimensions, Image, View, StyleSheet, TextInput} from "react-native";
import { TouchableOpacity } from "react-native";

//inividual component for each of the datatypes in dropdown mneu to selected datatypes
export function DatatypeItem(props) {
    const [fontLoaded, setFontLoaded] = useState(false) 
    const [visibility, setvisibility] = useState(false) //manage visibility of edit section
    const [name, setname] = useState('') //manage the edited nickname
    
    //function to handle datatype being selected
    const handlePress = () => {
        props.setcurrentDatatypeNickname(props.flowMeter['nickname']); //change current nickname in title
        props.setcurrentDatatype(props.description) //change current flow meter in title
        props.setExpanded(!props.expanded)
        
        //depending on current time selected, change the data type depending onclick
        if (props.selectedTime == '1 DAY') {
            props.setcurrentData(props.data[0])
        } else if (props.selectedTime == '7 DAYS') {
            props.setcurrentData(props.data[1])
        } else if (props.selectedTime == '1 MONTH') {
            props.setcurrentData(props.data[2])
        } else if (props.selectedTime == 'ANNUAL') {
            props.setcurrentData(props.data[3])
        }
    }

    //function to handle the press of the edit button
    const handleEditPress = () => {
        setvisibility(!visibility)
    }

    //handle the user subimitting the changed nickname
    const handleSubmit = () => {
        setvisibility(false)
        const updatedFlowMeter = { ...props.flowMeters, name:props.description, nickname:name }; //create variable of changed datatype
        props.updateFlowMeter(updatedFlowMeter) //run function to update state of flowmeters
        
        if (props.description == props.currentDatatype) {
            props.setcurrentDatatypeNickname(name)
        } //change current datatype nickname on edit if currently selected
    }

    //handle the user cancelling editing the nicknames
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
        <View style={{zIndex:2}}>
         
            <List.Item 
                title={props.flowMeter['nickname']} 
                titleStyle={{fontFamily:'Calibri', fontSize:18, 
                    color:props.currentDatatype === props.description ? '#72BF44': 'black'}} //changes colour depending on if active
                descriptionStyle={{fontFamily:'Calibri', fontSize:15, 
                    color:props.currentDatatype === props.description ? '#72BF44': 'black'}} //changes colour depending on if active
                description={props.description}
                onPress={handlePress}
                style={styles.itemContainer}
                right={() => ( //render image of edit button to click and edit nickname
                    <TouchableOpacity onPress={handleEditPress}>
                        <Image source={props.currentDatatype == props.description ? 
                            require('../../images/editGreen.png') : require('../../images/editBlack.png')} //different colour icon if active
                            style={styles.editButton}/>
                    </TouchableOpacity>)}
            />
            
            { visibility && ( //show edit section if visibility true
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
    itemContainer: { //style container of datatype
        backgroundColor:'#eeeeee',
        width: Dimensions.get('window').width * 0.9,
        marginLeft: Dimensions.get('window').width * 0.05,
    },
    editButton: { //style edit button image
        height: Dimensions.get('window').width  * 0.068, 
        width: Dimensions.get('window').width  * 0.07,
        marginTop: Dimensions.get('window').width * 0.01,
        zIndex:2
    },
    editContainer: { //style container of edit section on visible
        width: Dimensions.get('window').width * 0.9,
        marginLeft: Dimensions.get('window').width * 0.05,
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#eeeeee'
    },
    editInput: { //style text input to edit nickname
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
    submitButtonContainer: { //style container of submit button for edited nickname
        backgroundColor: '#72BF44', 
        width:Dimensions.get('window').width * 0.135 , 
        height: Dimensions.get('window').width * 0.12, 
        marginTop: Dimensions.get('window').width * 0.02, 
        borderRadius: 10
    },
    submitButton: { //style button to submit edited nickname
        height: Dimensions.get('window').width * 0.08, 
        width: Dimensions.get('window').width * 0.1, 
        marginLeft: Dimensions.get('window').width * 0.0175, 
        marginTop: Dimensions.get('window').width * 0.02
    },
    crossButtonContainer: { //style container of cancel button for edited nickname
        backgroundColor: '#CE202F', 
        marginLeft: Dimensions.get('window').width * 0.02, 
        width:Dimensions.get('window').width * 0.135 , 
        height: Dimensions.get('window').width * 0.12, 
        marginTop: Dimensions.get('window').width * 0.02, 
        borderRadius: 10
        
    },
    crossButton: { //tyle button to cancel edited nickname
        height: Dimensions.get('window').width * 0.09, 
        width: Dimensions.get('window').width * 0.09, 
        marginLeft: Dimensions.get('window').width * 0.0225, 
        marginTop: Dimensions.get('window').width * 0.015
    }
})