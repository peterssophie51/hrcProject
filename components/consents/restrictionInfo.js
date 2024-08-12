import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";

export function RestrictionInfo(props) {
    return(
        <View>
            <Text style={styles.titleContainer}>
                <CalibriBoldText title={props.restrictionTitle} style={styles.titleHead}/>
                <CalibriText title={props.restriction} style={styles.titleRestriction}/>
            </Text>
            <View style={styles.horizontalDataContainer}>
                <CalibriBoldText style={styles.horizontalDataTitle} title={'FLOW AT RESTRICTION '}/>
                <CalibriBoldText style={styles.horizontalDataTitleUnits} title={'(M'} />
                <CalibriBoldText style={styles.horizontalDataTitleSuperscript} title={'3'} />
                <CalibriBoldText style={styles.horizontalDataTitleUnits} title={'/S)'} />
                <CalibriText style={[styles.horizontalData, {marginLeft: Dimensions.get('window').width * 0.14}]} title={props.data.flowAtRestriction}/>
            </View>
            <View style={styles.horizontalDataContainer}>
                <CalibriBoldText style={styles.horizontalDataTitle} title={'INSTANEOUS '}/>
                <CalibriBoldText style={styles.horizontalDataTitleUnits} title={'(L/S)'} />
                <CalibriText style={[styles.horizontalData, {marginLeft: Dimensions.get('window').width * 0.38}]} title={props.data.instaneous}/>
            </View>
            <View style={styles.verticalDataContainer}>
                <View style={styles.verticalContainer}>
                    <CalibriBoldText title="HOURLY" style={styles.verticalDataTitle}/>
                    <View style={styles.verticalDataTitleContainer}>
                        <CalibriText title="M" style={styles.verticalDataTitleUnits}/>
                        <CalibriText title="3" style={styles.verticalDataTitleSuperscript}/>
                        <CalibriText title="/HOUR" style={styles.verticalDataTitleUnits}/>
                    </View>
                    <CalibriBoldText title={props.data.hourlyRestriction} style={styles.verticalData} />
                </View>
                <View style={styles.verticalContainer}>
                    <CalibriBoldText title="DAILY" style={styles.verticalDataTitle}/>
                    <View style={styles.verticalDataTitleContainer}>
                        <CalibriText title="M" style={styles.verticalDataTitleUnits}/>
                        <CalibriText title="3" style={styles.verticalDataTitleSuperscript}/>
                        <CalibriText title="/DAY" style={styles.verticalDataTitleUnits}/>
                    </View>
                    <CalibriBoldText title={props.data.dailyRestriction} style={styles.verticalData} />
                </View>
                <View style={styles.verticalContainer}>
                    <CalibriBoldText title="ANNUALLY" style={styles.verticalDataTitle} />
                    <View style={styles.verticalDataTitleContainer}>
                        <CalibriText title="M" style={styles.verticalDataTitleUnits} />
                        <CalibriText title="3" style={styles.verticalDataTitleSuperscript}/>
                        <CalibriText title="/ANNUAL" style={styles.verticalDataTitleUnits} />
                    </View>
                    <CalibriBoldText title={props.data.annualRestriction} style={styles.verticalData} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: Dimensions.get('window').height * 0.015,
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
    }
})