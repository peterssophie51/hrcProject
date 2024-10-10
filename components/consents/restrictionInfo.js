import React from "react";
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
//import components
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";
import { VerticalData } from "./verticalRestrictionData";

//individual component for each flow based restriction in flow based restriction card
export function RestrictionInfo({restriction, expanded, setExpanded, lessMore, visible, restrictionTitle, data }) {
   
    const handlePress = () => {
        setExpanded(!expanded)
    }; //handle press of "view more/less" to expand or unexpand accordion
    
    //default values for flow meter data 
    const { 
        flowAtRestriction = '', 
        instantaneous = '', 
        hourly = '', 
        daily = '', 
        annually = '' 
    } = data; //default values for all data

    //function to make horizontal data dynamic sizes if other max character length (6)
    const horizontalDataDynamicFont = (text) => {
        return (
        text.toString().length > 6 ? 22 - (text.toString().length - 6) * 3 : 22
        )
    }

    return(
        <View style={styles.container}>
            {/*title of flow based restriction (eg current or other)*/}
            <Text style={styles.titleContainer}>
                <CalibriBoldText title={restrictionTitle} style={styles.titleHead}/> 
                <CalibriText title={restriction} style={styles.titleRestriction}/>
            </Text>
            {/*flow at restriction*/}
            <View style={styles.horizontalDataContainer}> 
                {/*title*/}
                <CalibriBoldText style={styles.horizontalDataTitle} title={'FLOW AT\nRESTRICTION '}/>
                {/*units container to use subscript*/} 
                <View style={styles.m3container}>
                    <CalibriBoldText style={styles.horizontalDataTitleUnits} title={'(m'} /> 
                    <CalibriBoldText style={styles.horizontalDataTitleSuperscript} title={'3'} /> 
                    <CalibriBoldText style={styles.horizontalDataTitleUnits} title={'/s)'} /> 
                </View>
                {/*iflow at restriction value*/}
                <CalibriText style={[styles.horizontalDataFlow, {fontSize:horizontalDataDynamicFont(flowAtRestriction) ,marginLeft: Dimensions.get('window').width * 0.245}]} title={flowAtRestriction}/> 
            </View>
            {/*instantaneous rate*/}
            <View style={styles.horizontalDataContainer}>
                {/*title*/}
                <CalibriBoldText style={styles.horizontalDataTitle} title={'INSTANTANEOUS '}/> 
                {/*units*/}
                <CalibriBoldText style={styles.horizontalDataTitleUnits} title={'(L/s)'} /> 
                {/*instantaneous value*/}
                <CalibriText style={[{fontSize: horizontalDataDynamicFont(instantaneous), marginLeft: Dimensions.get('window').width * 0.2}]} title={instantaneous}/> 
            </View>
            {/*container of all vertical boxes*/}
            <View style={styles.verticalDataContainer}>
                {/*vertical component for hourly rate*/}
                <VerticalData rate="HOURLY" time='hour' data={hourly}/> 
                {/*vertical component for daily rate*/}
                <VerticalData rate="DAILY" time='day' data={daily}/> 
                {/*vertical component for annually rate*/}
                <VerticalData rate="ANNUALLY" time='annual' data={annually}/> 
            </View>
            {/*if the restriction is the last restriction rendered, show view less*/}
            {visible && ( 
                <TouchableOpacity onPress={handlePress}>
                    <CalibriBoldText style={styles.viewMoreLess} title={'View ' + lessMore + ' authorised volumes'}/>
                </TouchableOpacity>
            )} 
        </View>
    )
}

const styles = StyleSheet.create({
    container: { //styling container of flow based restriction
        marginBottom: Dimensions.get('window').height * 0.03,
    },
    titleContainer: { //styling container of the title for flow based restriction
        marginLeft: Dimensions.get('window').width * 0.045
    },
    titleHead: { //styling text of title for flow based restriction
        color: '#72BF44',
        fontSize: 27
    },
    titleRestriction: { //styling flow based restriction title
        color: 'black',
        fontSize: 27
    },
    horizontalDataFlow: { //styling flow at restriction text
        fontSize: 22,
        marginTop: Dimensions.get('window').height * 0.015,
        marginLeft: Dimensions.get('window').width * 0.5,
    }, 
    horizontalDataContainer: { //styling contaienr for horizontal data
        marginLeft: Dimensions.get('window').width * 0.045,
        marginTop: Dimensions.get('window').height * 0.01,
        display: 'flex',
        flexDirection: 'row'
    },
    horizontalDataTitle: { //styling title for title of horizontal data 
        fontSize: 22,
    },
    horizontalDataTitleUnits: { //styling units in title of horizontal data
        fontSize:16,
        lineHeight: 28, 
    },
    horizontalDataTitleSuperscript: { //stying superscript in title of horizontal data
        fontSize: 12
    },
    verticalDataContainer: { //styling container for data in vertical data component
        display: 'flex',
        flexDirection: 'row',
        marginTop: Dimensions.get('window').height * 0.02
    },
    viewMoreLess: { //styling view/more less expand button
        fontSize: 20, 
        color: '#72BF44',
        marginTop: Dimensions.get('window').height * 0.015, 
        marginLeft: Dimensions.get('window').width * 0.045
    },
    m3container: { //styling container for m3 units text
        marginTop: Dimensions.get('window').height * 0.027, 
        display: 'flex',
        flexDirection: 'row'
    }
})

