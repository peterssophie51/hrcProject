import * as React from 'react';
import { Pressable } from 'react-native';
import { List } from 'react-native-paper';

export function ConsentDropdownHeader() {
  const [currentConsent, setcurrentConsent] = React.useState("Farm Water Consent")
  const [currentConsentATH, setcurrentConsentATH] = React.useState("ATH-2002009085")

  return (
      <List.Accordion title={currentConsent} description={currentConsentATH}>
        <List.Item title="Farm Water Consent" description="ATH-2002009085" onPress={() => {setcurrentConsent("Farm Water Consent"); setcurrentConsentATH("ATH-2002009085")}}/>
        <List.Item title="Crops Water Consent" description="ATH-2002008648" onPress={() => {setcurrentConsent("Crops Water Consent"); setcurrentConsentATH("ATH-2002008648")}}/>
        <List.Item title="Animals Water Consent" description="ATH-2002009348" onPress={() => {setcurrentConsent("Animals Water Consent"); setcurrentConsentATH("ATH-2002009348")}}/>
      </List.Accordion>

 
  )
}

