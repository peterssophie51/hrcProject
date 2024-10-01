import { View, Text } from 'react-native';
import { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { CalibriBoldText } from '../components/fonts/calibriBoldFont';
import { PageSections } from '../components/reports/pageSections';
import { ComparisonsContent } from '../components/reports/comparisonsContent';
import { ScrollView } from 'react-native';

export function ReportsPage ({ flowmeters, riverFlow }) {


    return(
        <View style={styles.page}>
            <CalibriBoldText title="Reports" style={styles.title}/>
            <ScrollView>
                <PageSections title='COMPARISONS'content={() => <ComparisonsContent flowmeters={flowmeters} riverFlow={riverFlow}/>}/>
                <PageSections title="ALERTS" />
                <PageSections title='REPORTS' />
                <View style={{height:25}}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        marginTop: Dimensions.get('window').height * 0.14
    }
})