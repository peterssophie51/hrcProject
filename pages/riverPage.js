import { View } from 'react-native';
import { CalibriBoldText } from '../components/fonts/calibriBoldFont.js';
import { Dimensions, StyleSheet } from 'react-native';
import { CalibriText } from '../components/fonts/calibriFont.js';

export function RiverPage ({ navagation }) {
  const flowsite = "Rangitikei at Mangaweka"
    return (
      <View>
        < CalibriBoldText style={styles.title} title="River" />
        < CalibriBoldText  style={styles.flowsite} title={flowsite} />
        < CalibriText style={styles.timeRecorded} title='Last Recorded at 20:00 (NZST) June 14th 2024'/>
      </View>
    )
  }

const styles = StyleSheet.create({
  title: {
    textAlign:'center', 
    fontSize:40, 
    marginTop: Dimensions.get('window').height * 0.12
  },
  flowsite: {
    textAlign: 'center', 
    fontSize: 30, 
    marginTop: Dimensions.get('window').height * 0.01
  },
  timeRecorded: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: Dimensions.get('window').height * 0.01
  }

  })
  