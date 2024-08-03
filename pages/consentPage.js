import { Text, View } from 'react-native';
import { CalibriBoldText } from '../components/fonts/calibriBoldFont.js';
import { CalibriText } from '../components/fonts/calibriFont.js';

export function ConsentPage ({ navagation }) {
    return (
      <View>
        < CalibriBoldText  style={{textAlign:'center', fontSize:40, marginTop:'15%'}} title="Consent" />
        < CalibriBoldText title="Bold text" />
        < CalibriText title="Text" />
      </View>
    )
  }

  