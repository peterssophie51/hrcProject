import { View } from 'react-native';
import { CalibriBoldText } from '../components/fonts/calibriBoldFont.js';
import { CalibriText } from '../components/fonts/calibriFont.js';
import { StyleSheet, Dimensions } from 'react-native';

export function ConsentPage ({ navagation }) {
    return (
      <View>
        < CalibriBoldText  style={styles.title} title="Consent" />
      </View>
    )
  }


const styles = StyleSheet.create({
  title: {
    textAlign:'center', 
    fontSize:40, 
    marginTop: Dimensions.get('window').height * 0.12
  },
})