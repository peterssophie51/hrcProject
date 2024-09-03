import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import { CalibriBoldText } from '../components/fonts/calibriBoldFont';
import { CalibriText } from '../components/fonts/calibriFont.js'
import { PercentagePill } from '../components/usage/percentageCard.js';
import { Switch } from '../components/switch.js';
import { DatatypeSelector } from '../components/usage/datatypeSelector.js';
import { UsageChart } from '../components/usage/usageChart.js';
import { GraphRadios } from '../components/usage/usageGraphRadios.js';

export function UsagePage ({ navagation }) {
  const dataCollected = '20:00 (NZST) June 14th 2024'
  const dailyData= [{ key: 'Flow One', usage: 40}, {key:'Flow Two', usage: 30}, {key:'Flow Three', usage: 20}]
  const dailyMax = 0.1
  const [type, settype] = useState('totalled')
  const annualData = [{key: 'Flow One', usage: 100}, {key: 'Flow Two', usage: 100}, {key:'Flow Three', usage: 200}]
  const annualMax = 700

  //I0 = one day 
  //I1= seven days 
  //I2= one month 
  //I3=annual

  const [flowMeters, setflowMeters] = useState([{name:'FLOW METER 1', nickname:'Animals', data:[
    [{value: 60}, {value: 21}, {value: 43}], 
    [{value:109}, {value:98}, {value:131}], 
    [{value:289}, {value:398}, {value:403}], 
    [{value:862}, {value:987}, {value:1079}]]},
                      {name: 'FLOW METER 2', nickname: 'Farm', data:[
    [{value:20}, {value: 39}, {value: 7}], 
    [{value:11}, {value:34}, {value:26}], 
    [{value:51}, {value:89}, {value:123}], 
    [{value:142}, {value:202}, {value:121}]] },
    {name: 'FLOW METER 3', nickname: 'asd', data:[
      [{value:220}, {value: 319}, {value: 72}], 
      [{value:121}, {value:344}, {value:226}], 
      [{value:521}, {value:839}, {value:1223}], 
      [{value:1432}, {value:2032}, {value:1231}]] },
      
      
  ])

  const totalWaterUsage = flowMeters.reduce((acc, flowMeter) => {
    flowMeter.data.forEach((currentArray, i) => {
      currentArray.forEach((item, index) => {
        if (acc[i] && acc[i][index]) {
          acc[i][index].value += item.value;
        } else {
          if (!acc[i]) acc[i] = [];
          acc[i][index] = { value: item.value };
        }
      });
    });
    return acc;
  }, []);
  
  
  
  const oneDayLabels = ['00:00', '02:00', '04:00'] 
  const sevenDayLabels = ['MON', 'TUE', 'WED'] 
  const oneMonthLabels = ['1ST', '5TH', '10TH'] 
  const annualLabels = ['JAN', 'FEB', 'MAR'] 

  const [currentData, setcurrentData] = useState(totalWaterUsage[0])
  const [currentLabels, setcurrentLabels] = useState(oneDayLabels)

  const [currentDatatypeNickname, setcurrentDatatypeNickname] =useState('Total Water Usage')
  const [currentDatatype, setcurrentDatatype] = useState('')

  const [selectedTime, setselectedTime] = useState('1 DAY')

    return (
      <View style={styles.page}>
        <CalibriBoldText  style={styles.title} title="Usage" />
        <CalibriText style={styles.lastRecorded} title={'Last Recorded ' + dataCollected} time='annual'/>
        <ScrollView>
          <View style={{display: 'flex', flexDirection:'row'}}>
            <PercentagePill data={annualData} type={type} max={annualMax} time='annual'/>
            <PercentagePill data={dailyData} type={type} max={dailyMax} time='day'/>
          </View>
          <Switch style={{
            marginTop: Dimensions.get('window').width * 0.05, 
            width:Dimensions.get('window').width * 0.9, 
            marginLeft:Dimensions.get('window').width *0.05, }} options={[
              { label: "Totalled", value: 'totalled', activeColor:'#72BF44'},
              { label: "Proportional", value: 'proportional', activeColor:'#72BF44' },
            ]} action={settype}
          />
          <DatatypeSelector 
            currentDatatypeNickname={currentDatatypeNickname} 
            setcurrentDatatypeNickname={setcurrentDatatypeNickname}
            currentDatatype={currentDatatype}
            setcurrentDatatype={setcurrentDatatype}
            setcurrentData={setcurrentData}
            totalWaterUsage={totalWaterUsage}
            flowMeters={flowMeters}
            selectedTime={selectedTime}
            setflowMeters={setflowMeters}/>
          <UsageChart currentLabels={currentLabels} currentData={currentData}/>
          <GraphRadios 
            selectedTime={selectedTime}
            setselectedTime={setselectedTime}
            setcurrentLabels={setcurrentLabels}
            oneDayLabels={oneDayLabels} 
            sevenDayLabels={sevenDayLabels} 
            oneMonthLabels={oneMonthLabels} 
            annualLabels={annualLabels}
            setcurrentData={setcurrentData}
            currentDatatype={currentDatatype}
            totalWaterUsage={totalWaterUsage}
            flowMeters={flowMeters}
            setflowMeters={setflowMeters}/>
          <View style={{height: 20}}></View>
        </ScrollView>
      </View>
    )
  }

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor:'white',
  },
  title: {
    textAlign:'center', 
    fontSize:40, 
    marginTop: Dimensions.get('window').height * 0.12
  },
  lastRecorded: {
    textAlign: 'center',
    fontSize: 17,
    marginTop: Dimensions.get('window').height * 0.02
  }
})