import { View } from 'react-native';
import { CalibriBoldText } from '../components/fonts/calibriBoldFont.js';
import { CalibriText } from '../components/fonts/calibriFont.js';
import { StyleSheet, Dimensions } from 'react-native';
import { ConsentInfo } from '../components/consents/consentInfo.js';
import { SmallCard } from '../components/consents/smallCard.js';
import { useState } from 'react';
import { FlowbasedRestriction } from '../components/consents/flowBasedRestrictions.js';
import { ScrollView } from 'react-native';

export function ConsentPage ({ navagation }) {
  const [compliance, setcompliance] = useState(true)
  const [take, settake] = useState(false)

    return (
      <View style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height * 2, backgroundColor:'white', flex:1}}>
        <CalibriBoldText  style={styles.title} title="Consent" />
        <ScrollView>
        <ConsentInfo consentExpiration="June 25th 2028" consentFlowSite="Rangitikei at Mangaweka" annualMax="No recorded data"/>
        <View style={{display:'flex', flexDirection:'row'}}>
          <SmallCard title={(compliance == true) ? 'You took less than your daily limit yesterday' : 
            'You took more than your daily limit yesterday'} value={compliance} />
          <SmallCard title={(take == true) ? 'You can take\nwater today': 'You can not take\nwater today'} value={take}/>
        </View>
        <FlowbasedRestriction />
        <View style={{height: Dimensions.get('window').height * 0.03}}></View>
        </ScrollView>
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