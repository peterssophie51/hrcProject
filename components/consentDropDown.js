import * as React from 'react';
import { List, } from 'react-native-paper';
import { Pressable } from 'react-native';
import { Image, View } from 'react-native';
import { ConsentDropdownItem } from './consentDropdownItem';

export function ConsentDropdownHeader() {
  const [currentConsent, setcurrentConsent] = React.useState("Farm Water Consent")
  const [currentConsentATH, setcurrentConsentATH] = React.useState("ATH-2002009085")
  return (
      <List.Accordion title={currentConsent} description={currentConsentATH}>
        <ConsentDropdownItem 
          title="Farm Water Consent" 
          description="ATH-2002009085" 
          setcurrentConsent={setcurrentConsent} 
          setcurrentConsentATH={setcurrentConsentATH}/>
        <ConsentDropdownItem 
          title="Crops Water Consent" 
          description="ATH-2002008648" 
          setcurrentConsent={setcurrentConsent} 
          setcurrentConsentATH={setcurrentConsentATH}/>
        <ConsentDropdownItem 
          title="Animals Water Consent" 
          description="ATH-2002009348" 
          setcurrentConsent={setcurrentConsent} 
          setcurrentConsentATH={setcurrentConsentATH}/>
        <List.Item title="+ Add New Consent" />
      </List.Accordion>
  )
}


