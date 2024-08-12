import { View, StyleSheet, Dimensions } from 'react-native';
import { CalibriBoldText } from '../components/fonts/calibriBoldFont.js';
import { RestrictionInfo } from '../components/consents/restrictionInfo.js';

export function FAQPage ({ navagation }) {
    return (
      <View style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height * 2, backgroundColor:'white', flex:1}}>

      </View>
    )
  }

  const styles = StyleSheet.create({
    title: {
      textAlign:'center', 
      fontSize:40, 
      marginTop: Dimensions.get('window').height * 0.12,
    },
    container: {
      backgroundColor: '#eeeeee',
      borderRadius: 20,
      width: Dimensions.get('window').width * 0.9,
      height: Dimensions.get('window').height * 0.42,
      marginLeft: Dimensions.get('window').width * 0.05,
      marginTop: Dimensions.get('window').width * 0.05
    }
  })