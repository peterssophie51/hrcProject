import * as React from 'react';
import { useState, useEffect } from 'react';
import { List } from 'react-native-paper';
import { Pressable, Image, View, Dimensions, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
//import component for header items (consents)
import { ConsentDropdownItem } from './consentDropdownItem';

export function ConsentDropdownHeader(props) {
  //handling values
  const [currentConsent, setCurrentConsent] = useState("Farm Water Consent");
  const [currentConsentATH, setCurrentConsentATH] = useState("ATH-2002009085");
  const [fontLoaded, setFontLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);

  //change variable when header expanded/minimised
  const handlePress = () => setExpanded(!expanded);

  //function to load in calibri bold and calibri font
  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({ //other actions can be completed simultaneously
          'CalibriBold': require('../../assets/fonts/calibrib.ttf'),
          'Calibri': require('../../assets/fonts/Calibri.ttf'),
        });
        setFontLoaded(true);
      } catch (error) {
        console.error("Error loading fonts: ", error);
      }
    }

    loadFont();
  }, []);

  //do not load content if font does not load
  if (!fontLoaded) {
    return null; 
  }

  return (
    //custom header
    <View style={styles.headerContainer}>

      {/*clickable hamburger image*/}
      <Pressable style={styles.hamburgerButton} onPress={() => props.navigation.toggleDrawer()}>
        <Image source={require('../../images/whiteHamburger.png')} style={styles.hamburgerImage} />
      </Pressable>

      {/*accordion drop down section*/}
      <List.Accordion
        style={styles.accordionDropDown}
        title={currentConsent}
        description={currentConsentATH}
        titleStyle={{ marginLeft: 70, color: 'white', fontSize: 25, fontFamily: 'CalibriBold' }}
        descriptionStyle={{ marginLeft: 70, color: 'white', fontSize: 20, fontFamily: 'Calibri' }}
        expanded={expanded}
        onPress={handlePress}
        right={() => (
          <Image
            source={expanded 
              //show drop up image if accordion dropped down
              ? require('../../images/dropUpWhite.png')  
              //show drop down image if accordion dropped up
              : require('../../images/dropDownWhite.png') 
            }
            style={{ height: 15, width: 25 }}
          />
        )}
      >
        {/*all different consents*/}
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
          style={styles.addConsent}
        />
      </List.Accordion>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex', 
    flexDirection: 'row', 
    position: 'absolute'
  },
  hamburgerButton: {
    position: 'absolute', 
    zIndex: 2
  },
  hamburgerImage: {
    width: 50, 
    height: 50, 
    marginTop: 15, 
    marginLeft: 20 
  },
  accordionDropDown: {
    zIndex: 1, 
    width: Dimensions.get('window').width, 
    backgroundColor: 'black'
  },
  addConsent: {
    backgroundColor: 'white',
    borderLeftWidth: Dimensions.get('window').width * 0.05,
    borderRightWidth: Dimensions.get('window').width * 0.05,
    borderBottomWidth: Dimensions.get('window').width * 0.05,
    borderColor: 'black',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  }
})