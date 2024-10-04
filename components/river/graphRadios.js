import React, { useState, useEffect } from "react";
import { RadioGroup } from "react-native-radio-buttons-group";
import { View, StyleSheet, Dimensions} from "react-native";
import * as Font from 'expo-font'

//component for the graph radios at the bottom of the river page
export function TimeRadios(props) {

    const [fontLoaded, setFontLoaded] = useState(false);
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
    
    //function to handle clicking the different radio buttoms
    const handlePress = (name, data, labels) => {
        props.setselectedTime(name);  //keep track of selected time
        props.setcurrentData(data) //assign the selected data
        props.setcurrentLabels(labels) //assign the selected labeles
    } 

    return (
        <View style={styles.container}>
            {/*container for top row of radio buttons*/}
            <View style={{display:'flex', flexDirection:'row'}}>
                {/*container for top left radio*/}
                <View style={styles.radioTopLeft}>
                    {/*radio button*/}
                    <RadioGroup 
                        onPress={() => handlePress('1 DAY', props.data[0], 'oneDay')} //handle press
                        selectedId={props.selectedTime} 
                        radioButtons={[
                            {id:'1 DAY', label:'1 DAY', color:'#72BF44', 
                                borderColor: props.selectedTime == '1 DAY' ? '#72BF44' : 'black'}]} //change colour depending on selected
                        layout='vertical'
                        labelStyle={styles.labels}
                        style={styles.radios}
                    />
                </View>
                {/*container for top right radio*/}
                <View style={styles.radioTopRight}>
                    {/*radio button*/}
                    <RadioGroup 
                        onPress={() => handlePress('7 DAYS', props.data[1], 'sevenDay')}  //handle press
                        selectedId={props.selectedTime}
                        radioButtons={[
                            {id:'7 DAYS', label:'7 DAYS', color:'#72BF44', 
                                borderColor: props.selectedTime == '7 DAYS' ? '#72BF44' : 'black'}]} //change colour depending on selected
                        layout='vertical'
                        labelStyle={styles.labels}
                        style={styles.radios}
                    />
                </View>
            </View>
            {/*container for bottom row of radio buttons*/}
            <View style={{display:'flex',flexDirection:'row'}}>
                {/*container for bottom left radio*/}
                <View style={styles.radioBottomLeft}>
                    {/*radio button*/}
                    <RadioGroup 
                        onPress={() => handlePress('1 MONTH', props.data[2], 'oneMonth')} //handle press
                        selectedId={props.selectedTime}
                        radioButtons={[
                            {id:'1 MONTH', label:'1 MONTH', color:'#72BF44', 
                                borderColor: props.selectedTime == '1 MONTH' ? '#72BF44' : 'black'}]} //change colour depending on selected
                        layout='vertical'
                        labelStyle={styles.labels}
                        style={styles.radios}
                    />
                </View>
                {/*container for bottom right radio*/}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { //style the container of all the radio buttons
        marginTop: Dimensions.get('window').width * 0.05, 
        width: Dimensions.get('window').width * 0.9,
        height:Dimensions.get('window').height * 0.14, 
        marginLeft:Dimensions.get('window').width *0.05, 
        marginRight:Dimensions.get('window').width * 0.08,
        borderRadius: 20,
        backgroundColor: '#eeeeee',
        display: 'flex',
        flexDirection: 'column'
    },
    labels: { //style the text for the radio groups
        fontSize:25, 
        fontFamily:'CalibriBold', 
        color:'black'
    },
    radioTopLeft: { //style the container for the top left radio button
        marginTop: Dimensions.get('window').height * 0.0125,
        marginLeft: Dimensions.get('window').width * 0.05
    }, 
    radioTopRight: { //style the container for the top right radio button
        marginTop: Dimensions.get('window').height * 0.0125,
        marginLeft: Dimensions.get('window').width * 0.14
    },
    radioBottomLeft: { //style the container for the bottom left radio button
        marginLeft: Dimensions.get('window').width * 0.05
    }, 
    radioBottomRight: { //style the radio button for the bottom right radio button
        marginLeft: Dimensions.get('window').width * 0.04

    }
})