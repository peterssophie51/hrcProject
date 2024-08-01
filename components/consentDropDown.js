import * as React from 'react';
import { List, } from 'react-native-paper';
import { Pressable } from 'react-native';
import { Image, View } from 'react-native';
import { ConsentDropdownItem } from './consentDropdownItem';

import { useState } from 'react';

export function ConsentDropdownHeader(props) {
  
  const [currentConsent, setcurrentConsent] = React.useState("Farm Water Consent")
  const [currentConsentATH, setcurrentConsentATH] = React.useState("ATH-2002009085")

  return (
    <View style={{display:'flex', flexDirection:'row', position:'absolute'}}>
       <Pressable style={{position:'absolute', zIndex:2}} onPress={() => props.navigation.toggleDrawer()}>
                <Image source={require('../images/whiteHamburger.png')} style={{width:50, height:50, marginTop:15, marginLeft: 20, }} />
              </Pressable>
      <List.Accordion 
        style={{ zIndex:1, width:'550%', backgroundColor:'black'}}
        title={currentConsent} 
        description={currentConsentATH}
        titleStyle={{marginLeft:70, color:'white'}}
        descriptionStyle={{marginLeft:70, color:'white'}}
        
        >
        <ConsentDropdownItem 
          description="ATH-2002009085" 
          currentConsentATH={currentConsentATH}
          setcurrentConsent={setcurrentConsent} 
          setcurrentConsentATH={setcurrentConsentATH}/>
        <ConsentDropdownItem 
          description="ATH-2002008648" 
          currentConsentATH={currentConsentATH}
          setcurrentConsent={setcurrentConsent} 
          setcurrentConsentATH={setcurrentConsentATH}/>
        <ConsentDropdownItem 
          description="ATH-2002009348" 
          currentConsentATH={currentConsentATH}
          setcurrentConsent={setcurrentConsent} 
          setcurrentConsentATH={setcurrentConsentATH}/>
        <List.Item title="+ Add New Consent" style={{backgroundColor:'white', width:383}}/>
      </List.Accordion>
    </View>
  )
}




