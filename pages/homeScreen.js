import { View, Dimensions } from 'react-native';
import { useState } from 'react';
import { Image,  StyleSheet } from 'react-native';
//importing components
import { ProgressChart } from '../components/home/percentageProgressChart';
import { TakeWater } from '../components/home/takeWater';
import { RiverFlow } from '../components/home/riverFlow';
import { Switch } from '../components/switch';

//home screen component
export function HomeScreen( { take, annualUsage, dailyUsage, annualMax, dailyMax, riverFlow, restriction, timePeriod, usageTime}) {
  const [graphTime, setgraphTime] = useState(dailyMax === 0 ? 'annual' : 'day') //text for center of circular progress chart

    return (
      <View style={styles.page}>
        {/*pie chart at top of home screen*/}
        <ProgressChart graphTime={graphTime} setgraphTime={setgraphTime} abstracted={(graphTime=='annual') ? annualUsage : dailyUsage} 
        max={(graphTime == 'annual') ? annualMax : dailyMax} timeframe={usageTime}/>
        {/*switch to handle values shown on pie chart*/}
        <Switch options={annualMax == 0? [
          { label: "Annual", value: 'annual', activeColor:'#72BF44' }] : [{ label: "Annual", value: 'annual', activeColor:'#72BF44'},
          { label: "Today", value: 'day', activeColor:'#72BF44' }]
        } style={{
            marginTop: Dimensions.get('window').width * 0.05, 
            width:Dimensions.get('window').width * 0.7, 
            marginLeft:Dimensions.get('window').width *0.15}} 
           action={setgraphTime}
           disabled={dailyMax === 0  || annualMax === 0 ? true : false} 
           backgroundColour={dailyMax === 0 || annualMax === 0 ? '#cccccc' : '#243746'} 
           textColour={dailyMax === 0 || annualMax === 0? 'black' : 'white'} 
           initial={dailyMax === 0  ? 0 : 1}
           value={dailyMax === 0 ? 0 : annualMax === 0 ? 1 : 0}
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
    marginTop: Dimensions.get('window').width * 0.03, 
    marginLeft: (Dimensions.get('window').width - Dimensions.get('window').width * 0.6) /2 , 
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.15,
  }, 
  page: { //styling page container
    width:Dimensions.get('window').width, 
    height:Dimensions.get('window').height * 2, 
    backgroundColor:'white'
  }
})

