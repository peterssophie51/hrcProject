import { Text, View } from 'react-native';
import { PageTitle } from '../components/pageTitle';
import { CalibriBoldText } from '../components/calibriBoldFont.js';

export function UsagePage ({ navagation }) {
    return (
      <View>
        < CalibriBoldText  style={{textAlign:'center', fontSize:40, marginTop:'3%'}} title="Usage" />
      </View>
    )
  }

  