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
export function RiverPage ({ riverFlowAtCompliance, flowsite, data, timeframe, riverFlow, flowAtRestriction }) {
  const [selectedTime, setselectedTime] =  useState('1 DAY') //current timeframe for data
  const [currentData, setcurrentData] = useState(data[0]) //set current data (as by radios)

  const [currentLabels, setcurrentLabels] = useState([]) //set current labels (as by radios)

    return (
      <View  style={styles.page}> 
        {/*page title*/}
        <CalibriBoldText style={styles.title} title="River" /> 
        {/*consent flowsite*/}
        <CalibriBoldText  style={styles.flowsite} title={flowsite || 'No associated flowsite'} />
        {/*when data recorded*/}
        <CalibriText style={styles.timeRecorded} title={`Last Recorded at ${timeframe}`} />
        {/*river flow card*/}
        <RiverFlowTitle riverFlow={riverFlow} riverFlowAtCompliance={riverFlowAtCompliance}/> 
        {/*river flow chart*/}
        <RiverFlowChart selectedTime={selectedTime} currentData={currentData} currentLabels={currentLabels} flowAtRestriction={flowAtRestriction} flowsite={flowsite}/> 
        {/*graph radios*/}
        <TimeRadios selectedTime={selectedTime} setselectedTime={setselectedTime} setcurrentData={setcurrentData} setcurrentLabels={setcurrentLabels}
        data={data} />
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
    marginTop: Dimensions.get('window').height * 0.14
  },
  flowsite: { //style consent flow site text
    textAlign: 'center', 
    fontSize: 25, 
    marginTop: Dimensions.get('window').height * 0.01
  },
  timeRecorded: { //style time recorded text
    textAlign: 'center',
    fontSize: 18,
    marginTop: Dimensions.get('window').height * 0.01
  }

  })
  