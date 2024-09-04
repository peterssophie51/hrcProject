import { View } from 'react-native';
import { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
//importing components
import { CalibriBoldText } from '../components/fonts/calibriBoldFont.js';
import { CalibriText } from '../components/fonts/calibriFont.js';
import { RiverFlowTitle } from '../components/river/riverFlow.js';
import { RiverFlowChart } from '../components/river/riverFlowChart.js';
import { TimeRadios } from '../components/river/graphRadios.js';

//component for the river page
export function RiverPage ({ navagation }) {
  const [selectedTime, setselectedTime] =  useState('1 DAY') //current timeframe for data
  const flowsite = "Rangitikei at Mangaweka" //current flowsite

  const oneDayData= [{value: 4286}, {value: 4232}, {value: 4277}, {value: 4211},
    {value: 4209}, {value: 4300}, {value: 4289}, {value: 4295}, 
    {value: 4273}, {value: 4270}, {value: 4269}, {value: 4218}] //example data for one day timeframe
  const sevenDayData = [{value:4267}, {value:4213}, {value: 4299}, {value:4187}, {value:4304}, {value:4265}, {value:4258}] //example data for seven days timeframe
  const oneMonthData = [{value:4213}, {value:4189}, {value:4194}, {value:4205}, {value:4279}, {value:4304}, {value:4289}] //example data for one month timeframe
  const annualData = [{value: 4189}, {value:4167}, {value:4205}, {value:4255}, 
    {value:4289}, {value: 4261}, {value:4202}, {value:4216},
  {value:4199}, {value:4200}, {value:4233}, {value:4149}] //example data for annual timeframe

  const oneDayLabels = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'] //graph x axis labels for one day timeframe
  const sevenDayLabels = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'] //graph x axis labels for one week timeframe
  const oneMonthLabels = ['1ST', '5TH', '10TH', '15TH', '20TH', '25TH', '30TH'] //graph x axis labels for one month timeframe
  const annualLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'] //graph x axis labels for one year timeframe

  const [currentData, setcurrentData] = useState(oneDayData) //set current data (as by radios)
  const [currentLabels, setcurrentLabels] = useState(oneDayLabels) //set current labels (as by radios)

    return (
      <View  style={styles.page}> 
        {/*page title*/}
        <CalibriBoldText style={styles.title} title="River" /> 
        {/*consent flowsite*/}
        <CalibriBoldText  style={styles.flowsite} title={flowsite} />
        {/*when data recorded*/}
        <CalibriText style={styles.timeRecorded} title='Last Recorded at 20:00 (NZST) June 14th 2024'/> 
        {/*river flow card*/}
        <RiverFlowTitle riverFlow={40000}/> 
        {/*river flow chart*/}
        <RiverFlowChart selectedTime={selectedTime} currentData={currentData} currentLabels={currentLabels}/> 
        {/*graph radios*/}
        <TimeRadios selectedTime={selectedTime} setselectedTime={setselectedTime} setcurrentData={setcurrentData} setcurrentLabels={setcurrentLabels}
        oneDayData={oneDayData} sevenDayData={sevenDayData} oneMonthData={oneMonthData} annualData={annualData}
        oneDayLabels={oneDayLabels} sevenDayLabels={sevenDayLabels} oneMonthLabels={oneMonthLabels} annualLabels={annualLabels}/>
      </View>
    )
  }

const styles = StyleSheet.create({
  page: { //style page container
    width:Dimensions.get('window').width, 
    height:Dimensions.get('window').height * 2, 
    backgroundColor:'white'
  },
  title: { //style title of page
    textAlign:'center', 
    fontSize:40, 
    marginTop: Dimensions.get('window').height * 0.12
  },
  flowsite: { //style consent flow site text
    textAlign: 'center', 
    fontSize: 30, 
    marginTop: Dimensions.get('window').height * 0.01
  },
  timeRecorded: { //style time recorded text
    textAlign: 'center',
    fontSize: 18,
    marginTop: Dimensions.get('window').height * 0.01
  }

  })
  