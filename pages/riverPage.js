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
export function RiverPage ({ route, navagation, flowsite, oneDayData, sevenDayData, oneMonthData, annualData, timeframe, riverFlow }) {

  const [selectedTime, setselectedTime] =  useState('1 DAY') //current timeframe for data
  const [currentData, setcurrentData] = useState(oneDayData) //set current data (as by radios)
  const [currentLabels, setcurrentLabels] = useState(oneDayLabels) //set current labels (as by radios)

  const oneDayLabels = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'] //graph x axis labels for one day timeframe
  const sevenDayLabels = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'] //graph x axis labels for one week timeframe
  const oneMonthLabels = ['1ST', '5TH', '10TH', '15TH', '20TH', '25TH', '30TH'] //graph x axis labels for one month timeframe
  const annualLabels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'] //graph x axis labels for one year timeframe

    return (
      <View  style={styles.page}> 
        {/*page title*/}
        <CalibriBoldText style={styles.title} title="River" /> 
        {/*consent flowsite*/}
        <CalibriBoldText  style={styles.flowsite} title={flowsite} />
        {/*when data recorded*/}
        <CalibriText style={styles.timeRecorded} title={`Last Recorded at ${timeframe}`} />
        {/*river flow card*/}
        <RiverFlowTitle riverFlow={riverFlow}/> 
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
  