import React from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";
import { VerticalData } from "./verticalRestrictionData";

export function RestrictionInfo({restriction, expanded, setExpanded, lessMore, visible, restrictionTitle, data ={}}) {
   
    const handlePress = () => {
        setExpanded(!expanded)
    }; //handle press of "view more/less" to expand or unexpand accordion
    
    const { 
        flowAtRestriction = '', 
        instaneous = '', 
        hourlyRestriction = '', 
        dailyRestriction = '', 
        annualRestriction = '' 
    } = data; //default values for all data

    

    return(
        <View style={styles.container}>
            <Text style={styles.titleContainer}>
                <CalibriBoldText title={restrictionTitle} style={styles.titleHead}/> {/*title for flow based restriction data*/}
                <CalibriText title={restriction} style={styles.titleRestriction}/>{/*which flow based restriction*/}
            </Text>
            <View style={styles.horizontalDataContainer}> {/*horizontal data on component*/}
                <CalibriBoldText style={styles.horizontalDataTitle} title={'FLOW AT\nRESTRICTION '}/> {/*title for flow at restriction*/}
                <View style={styles.m3container}>
                    <CalibriBoldText style={styles.horizontalDataTitleUnits} title={'(M'} /> {/*units*/}
                    <CalibriBoldText style={styles.horizontalDataTitleSuperscript} title={'3'} /> {/*superscript*/}
                    <CalibriBoldText style={styles.horizontalDataTitleUnits} title={'/S)'} /> {/*untis*/}
                </View>
                <CalibriText style={[styles.horizontalDataFlow, {marginLeft: Dimensions.get('window').width * 0.26}]} title={flowAtRestriction}/> {/*flow at restriction data*/}
            </View>
            <View style={styles.horizontalDataContainer}>
                <CalibriBoldText style={styles.horizontalDataTitle} title={'INSTANEOUS '}/> {/*title for instaneous data*/}
                <CalibriBoldText style={styles.horizontalDataTitleUnits} title={'(L/S)'} /> {/*units*/}
                <CalibriText style={[styles.horizontalData, {fontSize: 22, marginLeft: Dimensions.get('window').width * 0.3}]} title={instaneous}/> {/*instaneous data*/}
            </View>
            <View style={styles.verticalDataContainer}>
                <VerticalData rate="HOURLY" time='HOUR' data={hourlyRestriction}/> {/*vertical data component for hourly rate at restriction*/}
                <VerticalData rate="DAILY" time='DAY' data={dailyRestriction}/> {/*vertical data component for daily rate at restriction*/}
                <VerticalData rate="ANNUALLY" time='ANNUAL' data={annualRestriction}/> {/*vertical data component for annual rate at restriction*/}
            </View>
            {visible && ( 
                <TouchableOpacity onPress={handlePress}>
                    <CalibriText style={styles.viewMoreLess} title={'View ' + lessMore + ' authorised volumes'}/>
                </TouchableOpacity>
            )} {/*set view more/less to visible based on supplied prop*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: Dimensions.get('window').height * 0.03,
    },
    titleContainer: {
        marginLeft: Dimensions.get('window').width * 0.045
    },
    titleHead: {
        color: '#72BF44',
        fontSize: 27
    },
    titleRestriction: {
        color: 'black',
        fontSize: 27
    },
    horizontalDataFlow: {
        fontSize: 22,
        marginTop: Dimensions.get('window').height * 0.015,
        marginLeft: Dimensions.get('window').width * 0.5,
    },
    horizontalDataContainer: {
        marginLeft: Dimensions.get('window').width * 0.045,
        marginTop: Dimensions.get('window').height * 0.01,
        display: 'flex',
        flexDirection: 'row'
    },
    horizontalDataTitle: {
        fontSize: 22,
    },
    horizontalDataTitleUnits: {
        fontSize:16,
        lineHeight: 28, 
    },
    horizontalDataTitleSuperscript: {
        fontSize: 12
    },
    verticalDataContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: Dimensions.get('window').height * 0.02
    },
    verticalContainer: {
        backgroundColor: '#cccccc',
        borderRadius: 20,
        width: Dimensions.get('window').width * (0.8/3),
        height: Dimensions.get('window').height * 0.15,
        marginLeft: Dimensions.get('window').width * 0.025,
        alignItems: 'center'
    },
    verticalDataTitleContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    verticalDataTitle: {
        fontSize: 18,
        marginTop: Dimensions.get('window').height * 0.005
    },
    verticalDataTitleUnits: {
        fontSize: 15,

    }, 
    verticalDataTitleSuperscript: {
        fontSize: 12
    },
    verticalData: {
        fontSize: 40,
        color: '#243746',
        marginTop: Dimensions.get('window').height * 0.01
    },
    viewMoreLess: {
        textDecorationLine: 'underline',
        fontSize: 17, 
        marginTop: Dimensions.get('window').height * 0.02, 
        marginLeft: Dimensions.get('window').width * 0.045
    },
    m3container: {
        marginTop: Dimensions.get('window').height * 0.027, 
        display: 'flex',
        flexDirection: 'row'
    }
})

