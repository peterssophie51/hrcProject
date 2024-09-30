import * as React from 'react';
import { useState, useEffect } from 'react';
import { List } from 'react-native-paper';
import { Pressable, Image, View, Dimensions, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
//import component for header items (consents)
import { ConsentDropdownItem } from './consentDropdownItem';

//consent header function
export function ConsentDropdownHeader(props) {
  //handling values
  const [fontLoaded, setFontLoaded] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded)
  
  //update the consents information
  const updateConsent = (updatedConsent) => {
    const updatedConsents = []
    props.consents.map((item, index) => {
      if (item['ath'] == updatedConsent['ath']) {
        item['nickname'] = updatedConsent['nickname'] //if consent is updated consent, update info and push new value to list
        updatedConsents.push(item)
      } else {
        updatedConsents.push(item) //if consent not updated, push current values to list
      }
    }) 
    props.setconsents(updatedConsents) //update consents
  }

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
        title={props.currentConsent}
        description={props.currentConsentATH}
        titleStyle={{ marginLeft: 70, color: 'white', fontSize: 25, fontFamily: 'CalibriBold', marginTop: Dimensions.get('window').height * 0.015 }}
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
            style={{ height: 15, width: 25 , marginTop: Dimensions.get('window').height * 0.04}}
          />
        )}
      >
        {/*all different consents*/}
        { props.consents.map((item, index) => {
          return(
          <ConsentDropdownItem 
            key={item.ath}
            nickname={item.nickname}
            description={item.ath}
            currentConsentATH={props.currentConsentATH}
            setcurrentConsent={props.setCurrentConsent}
            setcurrentConsentATH={props.setCurrentConsentATH}
            updateConsent={updateConsent}
            consents={props.consents}
            setExpanded={setExpanded}
            expanded={expanded}/>
        )})

        }
        {/*list item for add new consent*/}
        <List.Item
          title="+ Add New Consent"
          titleStyle={{ fontStyle:'Calibri' ,fontSize: 20 }}
          style={styles.addConsent}
        />
      </List.Accordion>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: { //styling container of header
    display: 'flex', 
    flexDirection: 'row', 
    position: 'absolute',
  },
  hamburgerButton: { //stying hamburegr icon contianer to open nav 
    position: 'absolute', 
    zIndex: 2
  },
  hamburgerImage: { //styling hamburger icon to open nav
    width: 35, 
    height: 30, 
    marginTop: Dimensions.get('window').height * 0.055, 
    marginLeft: Dimensions.get('window').width * 0.06 
  },
  accordionDropDown: { //styling container of consent header drop down
    zIndex: 1, 
    width: Dimensions.get('window').width, 
    backgroundColor: 'black',
    height: Dimensions.get('window').width * 0.25
  },
  addConsent: { //style list item to add item 
    backgroundColor: 'white',
    borderLeftWidth: Dimensions.get('window').width * 0.05,
    borderRightWidth: Dimensions.get('window').width * 0.05,
    borderBottomWidth: Dimensions.get('window').width * 0.05,
    borderColor: 'black',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  }
})