import { View } from 'react-native';
import { CalibriBoldText } from '../components/fonts/calibriBoldFont.js';
import { Dimensions, StyleSheet } from 'react-native';
import { CalibriText } from '../components/fonts/calibriFont.js';
import { RiverFlowTitle } from '../components/river/riverFlow.js';
import { RiverFlowChart } from '../components/river/riverFlowChart.js';
import { TimeRadios } from '../components/river/graphRadios.js';
import { useState } from 'react';

export function RiverPage ({ navagation }) {
  const [selectedTime, setselectedTime] =  useState('1 DAY')
  const flowsite = "Rangitikei at Mangaweka"

  const oneDayData= [{value: 400}, {value: 400}, {value: 400}, {value: 400},
    {value: 400}, {value: 400}, {value: 400}, {value: 400}, 
    {value: 400}, {value: 400}, {value: 400}, {value: 400}
]
  const sevenDayData = [{value:200}, {value:300}, {value:500}, {value:100}, {value:600}, {value:800}, {value:500}]
  const oneMonthData = []
  const annualData = []

  const oneDayLabels = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00']
  const sevenDaysLabels = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
  const oneMonthLabels = ['1ST', '5TH', '10TH', '15TH', '20TH', '25TH', '30TH']
  const annualLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

  const [currentData, setcurrentData] = useState(oneDayData)
  const [currentLabels, setcurrentLabels] = useState(oneDayLabels)



    return (
      <View  style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height * 2, backgroundColor:'white'}}>
        <CalibriBoldText style={styles.title} title="River" />
        <CalibriBoldText  style={styles.flowsite} title={flowsite} />
        <CalibriText style={styles.timeRecorded} title='Last Recorded at 20:00 (NZST) June 14th 2024'/>
        <RiverFlowTitle />
        <RiverFlowChart selectedTime={selectedTime} currentData={currentData} setcurrentData={setcurrentData}/>
        <TimeRadios selectedTime={selectedTime} setselectedTime={setselectedTime} setcurrentData={setcurrentData} setcurrentLabels={setcurrentLabels}
        oneDayData={oneDayData} sevenDayData={sevenDayData} oneMonthData={oneMonthData} annualData={annualData}
        oneDayLabels={oneDayLabels} sevenDaysLabels={sevenDaysLabels} oneMonthLabels={oneMonthLabels} annualLabels={annualLabels}/>
      </View>
    )
  }

const styles = StyleSheet.create({
  title: {
    textAlign:'center', 
    fontSize:40, 
    marginTop: Dimensions.get('window').height * 0.12
  },
  flowsite: {
    textAlign: 'center', 
    fontSize: 30, 
    marginTop: Dimensions.get('window').height * 0.01
  },
  timeRecorded: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: Dimensions.get('window').height * 0.01
  }

  })
  