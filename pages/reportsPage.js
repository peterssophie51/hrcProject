import { View, Text } from 'react-native';
import { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { CalibriBoldText } from '../components/fonts/calibriBoldFont';

export function ReportsPage ({ }) {
    return(
        <View style={styles.page}>
            <CalibriBoldText title="Reports" style={styles.title}/>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: 'white'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        marginTop: Dimensions.get('window').height * 0.14
    }
})