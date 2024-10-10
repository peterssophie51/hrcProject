import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ComparisonsGraph } from "./comparisonGraph";
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";
import { CheckboxCard } from "./checkBoxCard";
import { ComparisonRadios } from "./comparisonRadios";
import { useState } from "react";

export function ComparisonsContent(props) {

    const totalWaterUsage = props.flowmeters[0].data.map((_, dataIndex) => {
        const map = new Map();
        
            props.flowmeters.forEach(flowmeter => {
            flowmeter.data[dataIndex].forEach(entry => {
                const { time, value } = entry;
                if (map.has(time)) {
                map.set(time, map.get(time) + value);
                } else {
                map.set(time, value);
                }
            });
            });
        
            return Array.from(map, ([time, value]) => ({ time, value }));
        });

    const oneDayLabels = [
        '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', 
        '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', 
        '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', 
        '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
        ] //graph labels for x axis for one day
    const annualLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC' ]  //graph labels for x axis for annual
    
    const [currentLabels, setcurrentLabels] = useState(oneDayLabels) //set current labels (as by radios)
    const [selectedData, setselectedData] = useState([])

    return (
        <View style={{display: 'flex', flexDirection:'column'}}>
            <View style={styles.graphHeading}>
                <View style={styles.waterUsageTitle}>
                    <CalibriText style={styles.graphHeadingText} title='Water Usage ('/>
                    <CalibriText style={styles.graphHeadingUnits} title='m'/>
                    <CalibriText style={styles.graphHeadingSuperscript} title='3'/>
                    <CalibriText style={styles.graphHeadingText} title=')'/>
                </View>
                { selectedData.includes('River Flow') && (
                <View style={styles.riverFlowTitle}>
                    <CalibriText style={styles.graphHeadingText} title='River Flow ('/>
                    <CalibriText style={styles.graphHeadingUnits} title='m'/>
                    <CalibriText style={styles.graphHeadingSuperscript} title='3'/>
                    <CalibriText style={styles.graphHeadingUnits} title='/s'/>
                    <CalibriText style={styles.graphHeadingText} title=')'/>
                </View>
                )}
            </View>
            <ComparisonsGraph currentLabels={currentLabels} totalWaterUsage={totalWaterUsage} flowsite={props.flowsite} flowmeters={props.flowmeters} riverFlow={props.riverFlow} selectedData={selectedData}/>
            <CheckboxCard flowmeters={props.flowmeters} setselectedData={setselectedData} selectedData={selectedData}/>
            <ComparisonRadios setcurrentLabels={setcurrentLabels} oneDayLabels={oneDayLabels} annualLabels={annualLabels}/>
        </View>
    )
}

const styles = StyleSheet.create({
    graphHeading: {
        display: 'flex',
        flexDirection:'row',
        marginLeft: Dimensions.get('window').width * 0.05,
      },
      graphHeadingText: {
        fontSize: 15
      },
      graphHeadingUnits: {
        fontSize: 15,
        lineHeight: 22
      },
      graphHeadingSuperscript: {
        fontSize: 11
      },
      waterUsageTitle: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: Dimensions.get('window').width * 0.35
      },
      riverFlowTitle: {
        display: 'flex',
        flexDirection: 'row'
      }
})