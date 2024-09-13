import { View, Dimensions } from 'react-native';
import { useState } from 'react';
import { Image,  StyleSheet } from 'react-native';
//importing components
import { ProgressChart } from '../components/home/percentageProgressChart';
import { TakeWater } from '../components/home/takeWater';
import { RiverFlow } from '../components/home/riverFlow';
import { Switch } from '../components/switch';

//home screen component
export function HomeScreen( {navigation, take, abstracted, annualMax, data, riverFlow, restriction, timePeriod}) {
  const [graphTime, setgraphTime] = useState('annual') //text for center of circular progress chart

    return (
      <View style={styles.page}>
        {/*pie chart at top of home screen*/}
        <ProgressChart graphTime={graphTime} setgraphTime={setgraphTime} abstracted={abstracted} max={annualMax} data={data} timeframe={timePeriod}/>
        {/*switch to handle values shown on pie chart*/}
        <Switch options={[
          { label: "Annual", value: 'annual', activeColor:'#72BF44'},
          { label: "Today", value: 'day', activeColor:'#72BF44' }]} style={{
            marginTop: Dimensions.get('window').width * 0.05, 
            width:Dimensions.get('window').width * 0.7, 
            marginLeft:Dimensions.get('window').width *0.15}} action={setgraphTime}
        />
        {/*take water card*/}
        <TakeWater take={take}/> 
        {/*river flow card*/}
        <RiverFlow riverFlow={riverFlow} restriction={restriction} timePeriod={timePeriod}/> 
        {/*horizons logo at the bottom of the page*/}
        <Image source={require('../images/horizonsFlowTransperant.png')} style={styles.image} /> 
      </View>
    )
  }

const styles = StyleSheet.create({
  image: { ///styling horizons logo
    marginTop: Dimensions.get('window').width * 0.01, 
    marginLeft: Dimensions.get('window').width * 0.12, 
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').width * 0.25,
  }, 
  page: { //styling page container
    width:Dimensions.get('window').width, 
    height:Dimensions.get('window').height * 2, 
    backgroundColor:'white'
  }
})

