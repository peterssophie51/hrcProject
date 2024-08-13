import { View, Dimensions } from 'react-native';
import { useState } from 'react';
import { Image,  StyleSheet } from 'react-native';
//components
import { ProgressChart } from '../components/home/percentageProgressChart';
import { GraphSwitch } from '../components/home/graphSwitch';
import { TakeWater } from '../components/home/takeWater';
import { RiverFlow } from '../components/home/riverFlow';

export function HomeScreen( {navagation, navigation}) {
  const [graphTime, setgraphTime] = useState('day') //text for center of circular progress chart
  const [take, settake] = useState(true) //whether water can be taken or not

    return (
      <View style={styles.page}>
        <ProgressChart graphTime={graphTime} setgraphTime={setgraphTime}/> {/*progress chart*/}
        <GraphSwitch graphTime={graphTime} setgraphTime={setgraphTime}/> {/*switch to change time period of graph*/}
        <TakeWater take={take}/> {/*card for taken/no take water*/}
        <RiverFlow /> {/*card showing river flow*/}
        <Image source={require('../images/horizonsFlowTransperant.png')} style={styles.image} /> {/*horizons logo*/}
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

