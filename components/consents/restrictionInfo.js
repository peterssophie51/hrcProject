import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";
import { VerticalData } from "./verticalRestrictionData";

export function RestrictionInfo({restriction, expanded, setExpanded, lessMore, visible, restrictionTitle, data ={}}) {
   
    const handlePress = () => {
        setExpanded(!expanded)
    };
    
    const { 
        flowAtRestriction = '', 
        instaneous = '', 
        hourlyRestriction = '', 
        dailyRestriction = '', 
        annualRestriction = '' 
    } = data;

    const roundNumber = (value) => {
        if (value == '') {
            return value
        } else {
            return Math.floor(value)
        }
    }
    

    return(
        <View style={styles.container}>
            <Text style={styles.titleContainer}>
                <CalibriBoldText title={restrictionTitle} style={styles.titleHead}/>
                <CalibriText title={restriction} style={styles.titleRestriction}/>
            </Text>
            <View style={styles.horizontalDataContainer}>
                <CalibriBoldText style={styles.horizontalDataTitle} title={'FLOW AT RESTRICTION '}/>
                <CalibriBoldText style={styles.horizontalDataTitleUnits} title={'(M'} />
                <CalibriBoldText style={styles.horizontalDataTitleSuperscript} title={'3'} />
                <CalibriBoldText style={styles.horizontalDataTitleUnits} title={'/S)'} />
                <CalibriText style={[styles.horizontalData, {marginLeft: Dimensions.get('window').width * 0.14}]} title={roundNumber(flowAtRestriction)}/>
            </View>
            <View style={styles.horizontalDataContainer}>
                <CalibriBoldText style={styles.horizontalDataTitle} title={'INSTANEOUS '}/>
                <CalibriBoldText style={styles.horizontalDataTitleUnits} title={'(L/S)'} />
                <CalibriText style={[styles.horizontalData, {marginLeft: Dimensions.get('window').width * 0.38}]} title={roundNumber(instaneous)}/>
            </View>
            <View style={styles.verticalDataContainer}>
                <VerticalData rate="HOURLY" time='HOUR' data={roundNumber(hourlyRestriction)}/>
                <VerticalData rate="DAILY" time='DAY' data={roundNumber(dailyRestriction)}/>
                <VerticalData rate="ANNUALLY" time='ANNUAL' data={roundNumber(annualRestriction)}/>
            </View>
            {visible && ( 
                <TouchableOpacity onPress={handlePress}>
                    <CalibriText style={styles.viewMoreLess} title={'View ' + lessMore + ' restrictions'}/>
                </TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: Dimensions.get('window').height * 0.02,
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
    horizontalData: {
        fontSize: 22,
        textAlign: 'right',
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
        fontSize: 15, 
        marginTop: Dimensions.get('window').height * 0.01, 
        marginLeft: Dimensions.get('window').width * 0.045
    }
})

