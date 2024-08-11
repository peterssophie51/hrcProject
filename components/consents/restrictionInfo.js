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
                <CalibriText style={[styles.horizontalData, {marginLeft: Dimensions.get('window').width * 0.18}]} title={props.data.flowAtRestriction}/>
            </View>
            <View style={styles.horizontalDataContainer}>
                <CalibriBoldText style={styles.horizontalDataTitle} title={'INSTANEOUS '}/>
                <CalibriBoldText style={styles.horizontalDataTitleUnits} title={'(L/S)'} />
                <CalibriText style={[styles.horizontalData, {marginLeft: Dimensions.get('window').width * 0.12}]} title={props.data.instaneous}/>
            </View>
            <View style={styles.verticalDataContainer}>
                <View style={styles.verticalContainer}>
                    
                </View>
                <View style={styles.verticalContainer}>
                    
                </View>
                <View style={styles.verticalContainer}>
                    
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
        fontSize:18,
        lineHeight: 28, 
    },
    horizontalData: {
        fontSize: 22,
        textAlign: 'right',
    },
    horizontalDataTitleSuperscript: {
        fontSize: 14
    }
})