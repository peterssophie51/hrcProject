import { Text, View } from 'react-native';
import { CalibriBoldText } from '../components/calibriBoldFont.js';
import { CalibriText } from '../components/calibriFont.js';

export function ConsentPage ({ navagation }) {
    return (
      <View>
        < CalibriBoldText  style={{textAlign:'center', fontSize:40, marginTop:'15%'}} title="Consent" />
        < CalibriBoldText title="Bold text" />
        < CalibriText title="Text" />
      </View>
    )
  }

  