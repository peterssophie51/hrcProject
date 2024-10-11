import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
//import components
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";

//individual component for the vertical data in each flow based restriction (hourly/daily/annual rates)
export function VerticalData(props) {

    //function to make vertical data dynamic sizes if other max character length (4)
    const verticalDataDynamicFont = (text) => {
        return (
            text.toString().length > 4 ? 40 - (text.toString().length - 4) * 4 : 40
        )
    }

    return(
        <View style={styles.verticalContainer}>
            {/*heading for title of data*/}
            <CalibriBoldText title={props.rate} style={styles.verticalDataTitle}/>
            {/*units for vertical data*/}
            <View style={styles.verticalDataTitleContainer}>
                <CalibriText title="m" style={styles.verticalDataTitleUnits}/> 
                <CalibriText title="3" style={styles.verticalDataTitleSuperscript}/> 
                <CalibriText title={'/' + props.time} style={styles.verticalDataTitleUnits}/> 
            </View>
            {/*data*/}
            <CalibriBoldText title={props.data} style={[styles.verticalData, {fontSize: verticalDataDynamicFont(props.data)}]} />
</View>
    )
}

const styles = StyleSheet.create({
    verticalContainer: { //styling container of vertical data
        backgroundColor: '#cccccc',
        borderRadius: 20,
        width: Dimensions.get('window').width * (0.8/3),
        height: Dimensions.get('window').height * 0.15,
        marginLeft: Dimensions.get('window').width * 0.025,
        alignItems: 'center'
    }, //styling container of vertical data title
    verticalDataTitleContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    verticalDataTitle: { //styling title of vertical data
        fontSize: 18,
        marginTop: Dimensions.get('window').height * 0.005
    },
    verticalDataTitleUnits: { //styling units in vertical data title
        fontSize: 15,
    }, 
    verticalDataTitleSuperscript: { //styling superscript in vertical data title
        fontSize: 12
    },
    verticalData: { //styling vertical data 
        fontSize: 40,
        color: '#243746',
        marginTop: Dimensions.get('window').height * 0.01
    }
})