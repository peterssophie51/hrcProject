import { View, Text } from 'react-native';
import { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native'
import { CalibriBoldText } from '../components/fonts/calibriBoldFont';
import { PageSections } from '../components/reports/pageSections';
import { ComparisonsContent } from '../components/reports/comparisonsContent';
import { ScrollView } from 'react-native';
import { NotificationContent } from '../components/reports/notificationsContent';

export function ReportsPage ({ flowmeters, riverFlow, dailyMax, flowAtRestriction, flowsite, currentConsentATH }) {


    return(
        <View style={styles.page}>
            <CalibriBoldText title="Reports" style={styles.title}/>
            <ScrollView>
                <PageSections title='COMPARISONS'content={() => <ComparisonsContent flowmeters={flowmeters} riverFlow={riverFlow} flowsite={flowsite} currentConsentATH={currentConsentATH}/>}/>
                <PageSections title="NOTIFICATIONS" content={() => <NotificationContent flowmeters={flowmeters} dailyMax={dailyMax} flowAtRestriction={flowAtRestriction}/>}/>
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