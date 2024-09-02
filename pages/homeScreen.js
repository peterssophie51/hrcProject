import { View, Dimensions } from 'react-native';
import { useState } from 'react';
import { Image,  StyleSheet } from 'react-native';
//components
import { ProgressChart } from '../components/home/percentageProgressChart';
import { TakeWater } from '../components/home/takeWater';
import { RiverFlow } from '../components/home/riverFlow';
import { Switch } from '../components/switch';

export function HomeScreen( {navagation, navigation}) {
  const [graphTime, setgraphTime] = useState('annual') //text for center of circular progress chart
  const [take, settake] = useState(false) //whether water can be taken or not

    return (
      <View style={styles.page}>
        <ProgressChart graphTime={graphTime} setgraphTime={setgraphTime}/>
        <Switch options={[
          { label: "Annual", value: 'annual', activeColor:'#72BF44'},
          { label: "Today", value: 'day', activeColor:'#72BF44' }]} style={{
            marginTop: Dimensions.get('window').width * 0.05, 
            width:Dimensions.get('window').width * 0.7, 
            marginLeft:Dimensions.get('window').width *0.15}} action={setgraphTime}
        />
        <TakeWater take={take}/> 
        <RiverFlow /> 
        <Image source={require('../images/horizonsFlowTransperant.png')} style={styles.image} /> 
      </View>
    )
  }

const styles = StyleSheet.create({
  image: {
    marginTop: Dimensions.get('window').width * 0.01, 
    marginLeft: Dimensions.get('window').width * 0.12, 
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').width * 0.25,
  }, 
  page: {
    width:Dimensions.get('window').width, 
    height:Dimensions.get('window').height * 2, 
    backgroundColor:'white'
  }
})

