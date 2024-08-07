import { View, Dimensions } from 'react-native';
import { ProgressChart } from '../components/home/percentageProgressChart';
import { GraphSwitch } from '../components/home/graphSwitch';
import { useState } from 'react';
import { TakeWater } from '../components/home/takeWater';
import { RiverFlow } from '../components/home/riverFlow';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';

export function HomeScreen( {navagation, navigation}) {
  const [graphTime, setgraphTime] = useState('day')
  const [take, settake] = useState(true)


    return (
      <View style={{ width:Dimensions.get('window').width, height:Dimensions.get('window').height * 2, backgroundColor:'white'}}>
        <ProgressChart graphTime={graphTime} setgraphTime={setgraphTime}/>
        <GraphSwitch graphTime={graphTime} setgraphTime={setgraphTime}/>
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
  }
})

