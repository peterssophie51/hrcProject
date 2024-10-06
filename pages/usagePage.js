import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
//importing components
import { CalibriBoldText } from '../components/fonts/calibriBoldFont';
import { CalibriText } from '../components/fonts/calibriFont.js'
import { PercentagePill } from '../components/usage/percentageCard.js';
import { Switch } from '../components/switch.js';
import { DatatypeSelector } from '../components/usage/datatypeSelector.js';
import { UsageChart } from '../components/usage/usageChart.js';
import { GraphRadios } from '../components/usage/usageGraphRadios.js';

//compoennt for the usage page
export function UsagePage ({ dataCollected, dailyMax, annualMax, flowmeters, setflowmeters }) {
  const [type, settype] = useState('totalled') //manage state of switch and top percentage cards
  const [expanded, setExpanded] = useState(false);

  const totalWaterUsage = flowmeters[0].data.map((_, dataIndex) => {
  const map = new Map();
  
    flowmeters.forEach(flowmeter => {
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
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', 
    '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', 
    '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
  ] //graph labels for x axis for one day
  const sevenDayLabels = ['1 DAY', '2 DAYS', '3 DAYS', '4 DAYS', '5 DAYS', '6 DAYS', '7 DAYS'] //graph labels for x axis for seven days
  const oneMonthLabels = ['1 WEEK', '2 WEEKS', '3 WEEKS', '4 WEEKS'] //graph labels for x axis for one month
  const annualLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC' ]  //graph labels for x axis for annual

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
            <PercentagePill flowmeters={flowmeters} type={type} max={annualMax} time='annual' usage='annualUsage' title='Annual'/>
            {/*daily percentage card*/}
            <PercentagePill flowmeters={flowmeters} type={type} max={dailyMax} time='day' usage='dailyUsage' title='Daily'/>
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
            disabled={flowmeters.length > 1 ? false : true}
            backgroundColour={flowmeters.length > 1 ? '#243746' : '#cccccc'}
            textColour={flowmeters.length > 1 ? 'white' : 'black'}
            initial={flowmeters.length == 1 ? 0 : 1}
            value={flowmeters.length == 1 ? 0 : 1}
          />
          {/*datatype selector to change data on graph*/}
          <DatatypeSelector 
            currentDatatypeNickname={currentDatatypeNickname} 
            setcurrentDatatypeNickname={setcurrentDatatypeNickname}
            currentDatatype={currentDatatype}
            setcurrentDatatype={setcurrentDatatype}
            setcurrentData={setcurrentData}
            totalWaterUsage={totalWaterUsage}
            flowMeters={flowmeters}
            selectedTime={selectedTime}
            setflowMeters={setflowmeters}
            expanded={expanded}
            setExpanded={setExpanded}/>
          {/*heading for graph*/}
          <View style={styles.graphHeading}>
              <CalibriText style={styles.graphHeadingText} title='Water Usage ('/>
              <CalibriText style={styles.graphHeadingUnits} title='M'/>
              <CalibriText style={styles.graphHeadingSuperscript} title='3'/>
              <CalibriText style={styles.graphHeadingText} title=')'/>
          </View>
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
            flowMeters={flowmeters}
            setflowMeters={setflowmeters}/>
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
    marginTop: Dimensions.get('window').height * 0.14
  },
  lastRecorded: { //style last recorded text
    textAlign: 'center',
    fontSize: 17,
    marginTop: Dimensions.get('window').height * 0.02
  },
  graphHeading: {
    display: 'flex',
    flexDirection:'row',
    marginTop: Dimensions.get('window').height * 0.14, 
    marginLeft: Dimensions.get('window').width * 0.05,
  },
  graphHeadingText: {
    fontSize: 15
  },
  graphHeadingUnits: {
    fontSize: 13,
    lineHeight: 22
  },
  graphHeadingSuperscript: {
    fontSize: 11
  }
})