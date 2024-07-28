import { Text, View } from 'react-native';
import { PageTitle } from '../components/pageTitle';
import { CalibriBoldText } from '../components/calibriBoldFont.js';
import { CalibriText } from '../components/calibriFont.js';

export function ConsentPage ({ navagation }) {
    return (
      <View>
        < CalibriBoldText  style={{textAlign:'center', fontSize:40, marginTop:'3%'}} title="Consent" />
        < CalibriBoldText title="Bold text" />
        < CalibriText title="Text" />
      </View>
    )
  }

  