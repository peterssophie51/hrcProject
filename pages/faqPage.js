import { Text, View } from 'react-native';

import { CalibriBoldText } from '../components/calibriBoldFont.js';

export function FAQPage ({ navagation }) {
    return (
      <View>
        < CalibriBoldText  style={{textAlign:'center', fontSize:40, marginTop:'15%'}} title="FAQ" />
      </View>
    )
  }

  