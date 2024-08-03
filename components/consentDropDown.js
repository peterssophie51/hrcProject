import * as React from 'react';
import { List } from 'react-native-paper';
import { Pressable, Image, View, Dimensions } from 'react-native';
import { ConsentDropdownItem } from './consentDropdownItem';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

export function ConsentDropdownHeader(props) {
  const [currentConsent, setCurrentConsent] = useState("Farm Water Consent");
  const [currentConsentATH, setCurrentConsentATH] = useState("ATH-2002009085");
  const [fontLoaded, setFontLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          'CalibriBold': require('../assets/fonts/calibrib.ttf'),
          'Calibri': require('../assets/fonts/Calibri.ttf'),
        });
        setFontLoaded(true);
      } catch (error) {
        console.error("Error loading fonts: ", error);
      }
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return null; 
  }

  return (
    <View style={{ display: 'flex', flexDirection: 'row', position: 'absolute' }}>
      <Pressable style={{ position: 'absolute', zIndex: 2 }} onPress={() => props.navigation.toggleDrawer()}>
        <Image source={require('../images/whiteHamburger.png')} style={{ width: 50, height: 50, marginTop: 15, marginLeft: 20 }} />
      </Pressable>
      <List.Accordion
        style={{ zIndex: 1, width: Dimensions.get('window').width, backgroundColor: 'black' }}
        title={currentConsent}
        description={currentConsentATH}
        titleStyle={{ marginLeft: 70, color: 'white', fontSize: 25, fontFamily: 'CalibriBold' }}
        descriptionStyle={{ marginLeft: 70, color: 'white', fontSize: 20, fontFamily: 'Calibri' }}
        expanded={expanded}
        onPress={handlePress}
        right={() => (
          <Image
            source={expanded 
              ? require('../images/dropUpWhite.png')  
              : require('../images/dropDownWhite.png') 
            }
            style={{ height: 15, width: 25 }}
          />
        )}
      >
        <ConsentDropdownItem
          description="ATH-2002009085"
          currentConsentATH={currentConsentATH}
          setcurrentConsent={setCurrentConsent}
          setcurrentConsentATH={setCurrentConsentATH}
        />
        <ConsentDropdownItem
          description="ATH-2002008648"
          currentConsentATH={currentConsentATH}
          setcurrentConsent={setCurrentConsent}
          setcurrentConsentATH={setCurrentConsentATH}
        />
        <ConsentDropdownItem
          description="ATH-2002009348"
          currentConsentATH={currentConsentATH}
          setcurrentConsent={setCurrentConsent}
          setcurrentConsentATH={setCurrentConsentATH}
        />
        <List.Item
          title="+ Add New Consent"
          titleStyle={{ fontSize: 20 }}
          style={{
            backgroundColor: 'white',
            borderLeftWidth: Dimensions.get('window').width * 0.05,
            borderRightWidth: Dimensions.get('window').width * 0.05,
            borderBottomWidth: Dimensions.get('window').width * 0.05,
            borderColor: 'black',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        />
      </List.Accordion>
    </View>
  );
}
