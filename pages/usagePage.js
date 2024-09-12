import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
//importing components
import { CalibriBoldText } from '../components/fonts/calibriBoldFont';
import { CalibriText } from '../components/fonts/calibriFont.js'
import { PercentagePill } from '../components/usage/percentageCard.js';
import { Switch } from '../components/switch.js';
import { DatatypeSelector } from '../components/usage/datatypeSelector.js';
import { UsageChart } from '../components/usage/usageChart.js';
import { GraphRadios } from '../components/usage/usageGraphRadios.js';

//compoennt for the usage page
export function UsagePage ({ navagation }) {
  const route = useRoute()
  const { dataCollected, dailyData, dailyMax, annualData, annualMax } = route.params;
  const [type, settype] = useState('totalled') //manage state of switch and top percentage cards

  //function to total the water usage for total water usage based in flow meter usage
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
  
  const oneDayLabels = ['00:00', '02:00', '04:00'] //graph labels for x axis for one day
  const sevenDayLabels = ['MON', 'TUE', 'WED'] //graph labels for x axis for seven days
  const oneMonthLabels = ['1ST', '5TH', '10TH'] //graph labels for x axis for one month
  const annualLabels = ['JAN', 'FEB', 'MAR']  //graph labels for x axis for annual

  const [currentData, setcurrentData] = useState(totalWaterUsage[0]) //satte to manage current selected data
  const [currentLabels, setcurrentLabels] = useState(oneDayLabels) //state to manage current selected data labels

  const [currentDatatypeNickname, setcurrentDatatypeNickname] =useState('Total Water Usage') //state to maage current selected data nickname for header
  const [currentDatatype, setcurrentDatatype] = useState('') //state to manage current selected data flow meter for header

  const [selectedTime, setselectedTime] = useState('1 DAY') //state to manage selected timeframe

    return (
      <View style={styles.page}>
        {/*page title*/}
        <CalibriBoldText  style={styles.title} title="Usage" />
        {/*when data last recorded*/}
        <CalibriText style={styles.lastRecorded} title={'Last Recorded ' + dataCollected} time='annual'/>
        {/*make page scrollable*/}
        <ScrollView>
          {/*container to make top percentage cards inline*/}
          <View style={{display: 'flex', flexDirection:'row'}}>
            {/*annual percentage card*/}
            <PercentagePill data={annualData} type={type} max={annualMax} time='annual'/>
            {/*daily percentage card*/}
            <PercentagePill data={dailyData} type={type} max={dailyMax} time='day'/>
          </View>
          {/*switch to change values in percentage cards*/}
          <Switch style={{
            marginTop: Dimensions.get('window').width * 0.05, 
            width:Dimensions.get('window').width * 0.9, 
            marginLeft:Dimensions.get('window').width *0.05, }} 
            options={[
              { label: "Totalled", value: 'totalled', activeColor:'#72BF44'},
              { label: "Proportional", value: 'proportional', activeColor:'#72BF44' },//values for switch
            ]} action={settype}
          />
          {/*datatype selector to change data on graph*/}
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
          {/*usage graph*/}
          <UsageChart currentLabels={currentLabels} currentData={currentData}/>
          {/*radio buttons to change timeframe of graph*/}
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
  page: { //style page container
    flex: 1,
    backgroundColor:'white',
  },
  title: { //style page title
    textAlign:'center', 
    fontSize:40, 
    marginTop: Dimensions.get('window').height * 0.12
  },
  lastRecorded: { //style last recorded text
    textAlign: 'center',
    fontSize: 17,
    marginTop: Dimensions.get('window').height * 0.02
  }
})