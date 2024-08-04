import { View, Dimensions } from 'react-native';
import { ProgressChart } from '../components/home/percentageProgressChart';

export function HomeScreen( {navagation, navigation}) {
    return (
      <View style={{ width:Dimensions.get('window').width, height:Dimensions.get('window').height * 2, backgroundColor:'white'}}>
        <ProgressChart />
      </View>
    )
  }

