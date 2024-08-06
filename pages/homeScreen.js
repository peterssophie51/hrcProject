import { View, Dimensions } from 'react-native';
import { ProgressChart } from '../components/home/percentageProgressChart';
import { GraphSwitch } from '../components/home/graphSwitch';
import { useState } from 'react';
import { TakeWater } from '../components/home/takeWater';
import { RiverFlow } from '../components/home/riverFlow';

export function HomeScreen( {navagation, navigation}) {
  const [graphTime, setgraphTime] = useState('day')
  const [take, settake] = useState(true)


    return (
      <View style={{ width:Dimensions.get('window').width, height:Dimensions.get('window').height * 2, backgroundColor:'white'}}>
        <ProgressChart graphTime={graphTime} setgraphTime={setgraphTime}/>
        <GraphSwitch graphTime={graphTime} setgraphTime={setgraphTime}/>
        <TakeWater take={take}/>
        <RiverFlow />
      </View>
    )
  }



