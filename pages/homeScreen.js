import { View, Dimensions } from 'react-native';
import { ProgressChart } from '../components/home/percentageProgressChart';
import { GraphSwitch } from '../components/home/graphSwitch';

export function HomeScreen( {navagation, navigation}) {
    return (
      <View style={{ width:Dimensions.get('window').width, height:Dimensions.get('window').height * 2, backgroundColor:'white'}}>
        <ProgressChart />
        <GraphSwitch />
      </View>
    )
  }

