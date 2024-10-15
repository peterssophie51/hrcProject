import React from 'react';
import { Checkbox } from './checkBox';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export function CheckboxCard (props) {
    const colours = ['#7A2982', '#F18A00', '#FFCE02']
    return (
        <View style={styles.container}>
            {props.flowmeters.map((item, index) => {
                return (
                    <Checkbox 
                        currentConsentATH={props.currentConsentATH} 
                        key={index} name={item.name} 
                        title={item.nickname} 
                        setselectedData={props.setselectedData}
                        checkColour={colours[index]}
                    />
                )
            })}
            <Checkbox 
                	currentConsentATH={props.currentConsentATH} 
                    title='Consented Water Usage' 
                    name='Consented Water Usage' 
                    setselectedData={props.setselectedData} 
                    selectedData={props.selectedData}
                    checkColour='#00A7CF'
            />
           { props.flowsite && (
                <Checkbox 
                    currentConsentATH={props.currentConsentATH} 
                    title='River Flow' name='River Flow' 
                    setselectedData={props.setselectedData} 
                    selectedData={props.selectedData}
                    checkColour='#72BF44'
                />
           )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: '#EEEEEE',
        marginTop: Dimensions.get('window').width * 0.04,
        borderRadius: 20,
        padding: 5
    }
})