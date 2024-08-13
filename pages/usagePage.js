import { View, StyleSheet } from 'react-native';
import { CalibriBoldText } from '../components/fonts/calibriBoldFont';

export function UsagePage ({ navagation }) {
    return (
      <View style={styles.page}>
        < CalibriBoldText  style={{textAlign:'center', fontSize:40, marginTop:'15%'}} title="Usage" />
      </View>
    )
  }

const styles = StyleSheet.create({
  page: {
    width:Dimensions.get('window').width, 
    height:Dimensions.get('window').height * 2, 
    backgroundColor:'white'
  }
})