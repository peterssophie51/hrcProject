import { View } from 'react-native';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useState } from 'react';
//components
import { CalibriBoldText } from '../components/fonts/calibriBoldFont.js';
import { ConsentInfo } from '../components/consents/consentInfo.js';
import { SmallCard } from '../components/consents/smallCard.js';
import { FlowbasedRestriction } from '../components/consents/flowBasedRestrictions.js';


export function ConsentPage ({ navagation }) {
  const [compliance, setcompliance] = useState(true) //consent has complied or not
  const [take, settake] = useState(false) //consent can take water or not

    return (
      <View style={styles.page}> {/*page background container*/}
        <CalibriBoldText  style={styles.title} title="Consent" /> {/*page title*/}
        <ScrollView> {/*allow page to be scrolled*/}
        <ConsentInfo 
          consentExpiration="June 25th 2028" 
          consentFlowSite="Rangitikei at Mangaweka" 
          annualMax="No recorded data"/> {/*info for consent details card*/}
        <View style={{display:'flex', flexDirection:'row'}}>
          <SmallCard title={(compliance == true) ? 'You took less than your daily limit yesterday' : 
            'You took more than your daily limit yesterday'} value={compliance} /> {/*send appropriate message to compliance card based on state*/}
          <SmallCard title={(take == true) ? 'You can take\nwater today': 'You can not take\nwater today'} value={take}/> {/*send appropriate message to take water card based on state*/}
        </View>
        <FlowbasedRestriction /> {/*flow based restrictions component*/}
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
  page: {
    width:Dimensions.get('window').width, 
    height:Dimensions.get('window').height * 2, 
    backgroundColor:'white', flex:1
  }
})