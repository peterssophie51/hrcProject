import { TouchableWithoutFeedback, View } from 'react-native';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
//importing components
import { CalibriBoldText } from '../components/fonts/calibriBoldFont.js';
import { ConsentInfo } from '../components/consents/consentInfo.js';
import { SmallCard } from '../components/consents/smallCard.js';
import { FlowbasedRestriction } from '../components/consents/flowBasedRestrictions.js';

//component for the consent page
export function ConsentPage ({ compliance, handlePress, take, flowsite, consentExpiration, annualMax, restrictions, currentRiverFlow }) {
  
    return (
      <TouchableWithoutFeedback onPress={() => handlePress()}>
        <View style={styles.page}> 
          {/*page title*/}
          <CalibriBoldText style={styles.title} title="Consent" /> 
          {/*making the page scrollable*/}
          <ScrollView> 
            {/*consent info card*/}
            <ConsentInfo 
              consentExpiration= {consentExpiration}
              consentFlowSite= {flowsite}
              annualMax={annualMax || '— '}/> 
            {/*container to arrange small cards next to each other*/}
            <View style={{display:'flex', flexDirection:'row'}}>
              {/*compliance card*/}
              <SmallCard title={(compliance == true) ? 'You complied yesterday' : 
                'You did not comply yesterday'} value={compliance} 
                trueImage={require('../images/waterDrop.png')} falseImage={require('../images/waterDrop.png')}
                style={{width:Dimensions.get('window').width * 0.1, height: Dimensions.get('window').width * 0.152}}
                /> 
              {/*take water card*/}
              <SmallCard title={(take == true) ? 'You can take water today': 'You cannot take\nwater today'} value={take}
              trueImage={require('../images/tickWhiteThick.png')} falseImage={require('../images/crossWhiteThick.png')}
              style={{width:Dimensions.get('window').width * 0.185, height: Dimensions.get('window').width * 0.15}}
              />
            </View>
            {/*card for flow based restrictions*/}
            <FlowbasedRestriction restrictions={restrictions} currentRiverFlow={currentRiverFlow}/> 
            {/*gap at the bottom of the page*/}
            <View style={{height: Dimensions.get('window').height * 0.03}}></View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    )
  }


const styles = StyleSheet.create({
  title: {
    textAlign:'center', 
    fontSize:40, 
    marginTop: Dimensions.get('window').height * 0.14
  },
  page: {
    width:Dimensions.get('window').width, 
    height:Dimensions.get('window').height * 2, 
    backgroundColor:'white', flex:1
  }
})