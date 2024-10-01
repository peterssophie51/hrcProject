import { View, Text } from "react-native";
import { ComparisonsGraph } from "./comparisonGraph";
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
            <ComparisonsGraph currentLabels={currentLabels} totalWaterUsage={totalWaterUsage} flowmeters={props.flowmeters} riverFlow={props.riverFlow} selectedData={selectedData}/>
            <CheckboxCard flowmeters={props.flowmeters} setselectedData={setselectedData} selectedData={selectedData}/>
            <ComparisonRadios setcurrentLabels={setcurrentLabels} oneDayLabels={oneDayLabels} annualLabels={annualLabels}/>
        </View>
    )
}