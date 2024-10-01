import { View, Text } from 'react-native';
import { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { CalibriBoldText } from '../components/fonts/calibriBoldFont';
import { PageSections } from '../components/reports/pageSections';
import { ComparisonsContent } from '../components/reports/comparisonsContent';

export function ReportsPage ({ }) {
    return(
        <View style={styles.page}>
            <CalibriBoldText title="Reports" style={styles.title}/>
            <PageSections title='COMPARISONS'content={() => <ComparisonsContent/>}/>
            <PageSections title="ALERTS" />
            <PageSections title='REPORTS' />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        width: Dimensions.get('window').width ,
        height: Dimensions.get('window').height * 2,
        backgroundColor: 'white'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        marginTop: Dimensions.get('window').height * 0.14
    }
})