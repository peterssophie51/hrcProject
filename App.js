//always has to be at the top
import './gesture-handler'; 
import React from 'react';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet } from 'react-native';
//imports to create drawer navigator
import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerCloseCross } from './components/header/drawerClose.js';
import { ConsentDropdownHeader } from './components/header/consentDropDown.js';
//importing different pages
import { HomeScreen } from './pages/homeScreen.js';
import { ConsentPage } from './pages/consentPage.js';
import { RiverPage } from './pages/riverPage.js';
import { UsagePage } from './pages/usagePage.js';
import { FAQPage } from './pages/faqPage.js';



const Drawer = createDrawerNavigator();


export default function App() {
  
  //function to load in bold calibri font
  const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFont() {
            await Font.loadAsync({
                'CalibriBold': require('./assets/fonts/calibrib.ttf'), // Adjust the path as necessary
            });
            setFontLoaded(true);
        }

        loadFont();
    }, []);

    if (!fontLoaded) {
        return null; 
    }



  return (
    //creating drawer navigator
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={({navigation}) => ({
          //custom header for drawer navigator
          header: () => < ConsentDropdownHeader navigation={navigation} />,
          swipeEnabled: false,
          drawerActiveTintColor: '#72BF44',
          drawerActiveBackgroundColor: 'transperant',
          drawerInactiveTintColor: 'white',
          drawerInactiveBackgroundColor: 'transperant',
          drawerStyle: {
            backgroundColor: 'black',
            width: '100%'
          },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            color: 'white'
          },
          headerTintColor: '#ffffff', 
          headerTitle: '',
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 50
          },
          drawerLabelStyle: {
            fontSize: 50,
            marginLeft:'10%',
            textAlign: 'center',
            marginTop: '5%',
            fontFamily: "CalibriBold"
          },

        })}
        //adding in content for drawers and  disabling swipe open for drawer navigator
        drawerContent={(props) => <DrawerCloseCross{...props}/>}
        options={{gestureEnabled: 'false'}}
      >
        {/*all different pages*/}
        <Drawer.Screen name="HOME" component={HomeScreen} />
        <Drawer.Screen name="CONSENT" component={ConsentPage}/>
        <Drawer.Screen name="USAGE" component={UsagePage}/>
        <Drawer.Screen name="RIVER" component={RiverPage}/>
        <Drawer.Screen name="FAQ" component={FAQPage}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
