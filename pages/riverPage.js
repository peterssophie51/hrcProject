import { Text, View } from 'react-native';
import { PageTitle } from '../components/pageTitle';
import { CalibriBoldText } from '../components/calibriBoldFont.js';

export function RiverPage ({ navagation }) {
    return (
      <View>
        < CalibriBoldText  style={{textAlign:'center', fontSize:40, marginTop:'15%'}} title="River" />
      </View>
    )
  }

  