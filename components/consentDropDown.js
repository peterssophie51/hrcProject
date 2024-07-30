import * as React from 'react';
import { List, } from 'react-native-paper';
import { Pressable } from 'react-native';
import { Image, View } from 'react-native';
import { ConsentDropdownButton } from './consentDropdownButtons';

function ConsentDropDownButtons() {
  return (
    <View>
      <Pressable>
        <Image source='../images/editBlack.png'/>
      </Pressable>
      <Pressable>
        <Image source='../images/crossBlack.png'/>
      </Pressable>
    </View>
  )
}

export function ConsentDropdownHeader() {
  const [currentConsent, setcurrentConsent] = React.useState("Farm Water Consent")
  const [currentConsentATH, setcurrentConsentATH] = React.useState("ATH-2002009085")

  return (
      <List.Accordion title={currentConsent} description={currentConsentATH}>
        <List.Item title="Farm Water Consent" description="ATH-2002009085" onPress={() => {setcurrentConsent("Farm Water Consent"); setcurrentConsentATH("ATH-2002009085")}} 
        right={() => <ConsentDropdownButton />}/>
        <List.Item title="Crops Water Consent" description="ATH-2002008648" onPress={() => {setcurrentConsent("Crops Water Consent"); setcurrentConsentATH("ATH-2002008648")}}
        right={() => <ConsentDropdownButton />}
          />
        <List.Item title="Animals Water Consent" description="ATH-2002009348" onPress={() => {setcurrentConsent("Animals Water Consent"); setcurrentConsentATH("ATH-2002009348")}}
          right={() => <ConsentDropdownButton />}/>
        <List.Item title="+ Add New Consent" />
      </List.Accordion>

 
  )
}

