import { View } from 'react-native';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
//importing components
import { CalibriBoldText } from '../components/fonts/calibriBoldFont.js';
import { ConsentInfo } from '../components/consents/consentInfo.js';
import { SmallCard } from '../components/consents/smallCard.js';
import { FlowbasedRestriction } from '../components/consents/flowBasedRestrictions.js';

//component for the consent page
export function ConsentPage ({ navagation }) {
  const route = useRoute()
  const { compliance, setcompliance, take, settake, flowsite, consentExpiration, annualMax, restrictions} = route.params;

    return (
      //styling the container for the page
      <View style={styles.page}> 
        {/*page title*/}
        <CalibriBoldText style={styles.title} title="Consent" /> 
        {/*making the page scrollable*/}
        <ScrollView> 
          {/*consent info card*/}
          <ConsentInfo 
            consentExpiration= {consentExpiration}
            consentFlowSite= {flowsite}
            annualMax={annualMax}/> 
          {/*container to arrange small cards next to each other*/}
          <View style={{display:'flex', flexDirection:'row'}}>
            {/*compliance card*/}
            <SmallCard title={(compliance == true) ? 'You took less than your daily limit yesterday' : 
              'You took more than your daily limit yesterday'} value={compliance} /> 
            {/*take water card*/}
            <SmallCard title={(take == true) ? 'You can take\nwater today': 'You can not take\nwater today'} value={take}/>
          </View>
          {/*card for flow based restrictions*/}
          <FlowbasedRestriction restrictions={restrictions}/> 
          {/*gap at the bottom of the page*/}
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