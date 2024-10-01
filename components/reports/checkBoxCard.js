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
                    <Checkbox key={index} title={item.nickname + ': '+ item.name} />
                )
            })}
            <Checkbox title='Total Water Usage'/>
            <Checkbox title='River Flow'/>
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