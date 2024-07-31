import * as React from 'react';
import { List, } from 'react-native-paper';
import { Pressable } from 'react-native';
import { Image, View } from 'react-native';
import { ConsentDropdownItem } from './consentDropdownItem';

import { useState } from 'react';

export function ConsentDropdownHeader() {
  const [currentConsent, setcurrentConsent] = React.useState("Farm Water Consent")
  const [currentConsentATH, setcurrentConsentATH] = React.useState("ATH-2002009085")

  return (
    <View>
      <List.Accordion style={{backgroundColor:'yellow', marginTop:100, marginLeft:0, width:300}}title={currentConsent} description={currentConsentATH}>
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
        <List.Item title="+ Add New Consent" />
      </List.Accordion>
    </View>
  )
}




