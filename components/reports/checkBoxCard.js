import React from 'react';
import { Checkbox } from './checkBox';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export function CheckboxCard (props) {
    return (
        <View style={styles.container}>
            {props.flowmeters.map((item, index) => {
                return (
                    <Checkbox key={index} name={item.name} title={item.nickname} setselectedData={props.setselectedData}/>
                )
            })}
            <Checkbox title='Consented Water Usage' name='Consented Water Usage' setselectedData={props.setselectedData} selectedData={props.selectedData}/>
            <Checkbox title='River Flow' name='River Flow' setselectedData={props.setselectedData} selectedData={props.selectedData}/>
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