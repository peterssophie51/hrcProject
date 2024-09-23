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
  const contacts = [
    {
      key: 0,
      name: 'Horizons website',
      method: 'https',
      link: 'www.horizons.govt.nz//'
    },
    {
      key: 1,
      name: 'Horizons phone number',
      method: 'sms',
      link:'+64 6 9522 800'
    },
    {
      key: 2,
      name: 'Horizons fax',
      //method:
      //link:
    },
    {
      key: 3,
      name: 'Horizons email',
      method:'mailto',
      link: 'help@horizons.govt.nz'
    }
  ] //all contacts to be rendered in contacts card
  const faq = [
    {   
      key: 0, 
      question:'This is a long question in the FAQ', 
      answer:"You should already have your consent ATH when applyig for a consent, if you don't have this infrormation, please contact us at Horizons!"
    },
    {
      key: 1,
      question:'What is my consent flowsite?',
      answer:'This is the section of the river that is linked to your abstraction. For more information, you can visit out website or contact us at Horizons!'
    }
  
  ] //all faq questions and answers to be rendered in faq cards

   //all consents in list 
  const [consents, setconsents] = useState([
    {ath:'ATH-2002009085', nickname: 'Farm'}, 
    {ath:'ATH-2002008648', nickname: 'Water'}, 
    {ath:'ATH-2002009348', nickname: 'Crops'}
  ])
  const [currentConsent, setCurrentConsent] = useState("Farm Water Consent"); //current consent nickname
  const [currentConsentATH, setCurrentConsentATH] = useState("ATH-2002009085"); //current consent ath

  var dailyMax = 50 //maximum abstraction for a day
  var annualMax = 200 //maximum abstraction for a year
  const [take, settake] = useState(false) //consent can take water or not
  const [compliedYesterday, setcompliedYesterday] = useState(true) //consent has complied or not
  var currentRiverFlow = 0 //current river flow
  var flowAtRestriction = 0 //restriction value in home page
  var dataRecorded = '2025-01-01T00:00:00' //when all data was recorded
  var consentExpiration = '2024-09-19T00:00:00' //when the consent expires
  var flowsite = 'Rangitikeat Mangaweka' //flowsite for consent
  //flow meter data
  //in data, 0: one day data  1: seven day data  2: one month data  3: annual data
  const [flowmeters, setflowmeters] = useState([
    {
      name:'Flow 1',
      nickname: 'Farm',
      annualUsage: 100,
      dailyUsage: 10,
      data:[
        [
          {value: 3, time: '2024-09-19T00:00:00'}, {value: 0, time: '2024-09-19T01:00:00'}, {value: 0, time: '2024-09-19T02:00:00'},
          {value: 0, time: '2024-09-19T03:00:00'}, {value: 0, time: '2024-09-19T04:00:00'}, {value: 8, time: '2024-09-19T05:00:00'},
          {value: 0, time: '2024-09-19T06:00:00'}, {value: 0, time: '2024-09-19T07:00:00'}, {value: 0, time: '2024-09-19T08:00:00'},
          {value: 3, time: '2024-09-19T09:00:00'}, {value: 0, time: '2024-09-1910:00:00'}, {value: 0, time: '2024-09-19T11:00:00'},
          {value: 0, time: '2024-09-19T12:00:00'}, {value: 6, time: '2024-09-19T13:00:00'}, {value: 0, time: '2024-09-19T14:00:00'},
          {value: 10, time: '2024-09-19T15:00:00'}, {value: 0, time: '2024-09-19T16:00:00'}, {value: 3, time: '2024-09-19T17:00:00'},
          {value: 0, time: '2024-09-19T18:00:00'}, {value: 0, time: '2024-09-19T19:00:00'}, {value: 0, time: '2024-09-19T20:00:00'},
          {value: 0, time: '2024-09-19T21:00:00'}, {value: 0, time: '2024-09-19T22:00:00'}, {value: 0, time: '2024-09-19T23:00:00'}
        ],
        [
          {value: 0, time: '2024-09-20T00:00:00'}, {value: 0, time: '2024-09-19T00:00:00'}, {value: 0, time: '2024-09-18T00:00:00'},
          {value: 0, time: '2024-09-17T00:00:00'}, {value: 0, time: '2024-09-16T00:00:00'}, {value: 0, time: '2024-09-15T00:00:00'},
          {value: 0, time: '2024-09-14T00:00:00'}
        ],
        [
          {value: 0, time: '2024-09-20T00:00:00'}, {value: 0, time: '2024-09-19T00:00:00'}, {value: 0, time: '2024-09-18T00:00:00'},
          {value: 0, time: '2024-09-17T00:00:00'}, {value: 0, time: '2024-09-16T00:00:00'}, {value: 0, time: '2024-09-15T00:00:00'},
          {value: 0, time: '2024-09-14T00:00:00'}, {value: 0, time: '2024-09-13T00:00:00'}, {value: 0, time: '2024-09-12T00:00:00'}, 
          {value: 0, time: '2024-09-11T00:00:00'}, {value: 0, time: '2024-09-10T00:00:00'}, {value: 0, time: '2024-09-09T00:00:00'}, 
          {value: 0, time: '2024-08-15T00:00:00'}, {value: 0, time: '2024-09-07T00:00:00'}, {value: 0, time: '2024-09-06T00:00:00'}, 
          {value: 0, time: '2024-09-05T00:00:00'}, {value: 0, time: '2024-09-04T00:00:00'}, {value: 0, time: '2024-09-03T00:00:00'}, 
          {value: 0, time: '2024-09-02T00:00:00'}, {value: 0, time: '2024-09-01T00:00:00'}, {value: 0, time: '2024-08-31T00:00:00'},
          {value: 0, time: '2024-08-30T00:00:00'}, {value: 0, time: '2024-08-29T00:00:00'}, {value: 0, time: '2024-08-28T00:00:00'},
          {value: 0, time: '2024-08-27T00:00:00'}, {value: 0, time: '2024-08-26T00:00:00'}, {value: 0, time: '2024-08-25T00:00:00'},
          {value: 0, time: '2024-08-24T00:00:00'}
        ],
        [
          {value: 0, time: '2024-01-31T00:00:00'}, {value: 0, time: '2024-02-28T00:00:00'}, {value: 0, time: '2024-03-31T00:00:00'},
          {value: 0, time: '2024-04-30T00:00:00'}, {value: 0, time: '2024-05-31T00:00:00'}, {value: 0, time: '2024-06-30T00:00:00'},
          {value: 0, time: '2024-07-31T00:00:00'}, {value: 0, time: '2024-08-31T00:00:00'}, {value: 0, time: '2024-09-30T00:00:00'}, 
          {value: 0, time: '2024-10-31T00:00:00'}, {value: 0, time: '2024-11-30T00:00:00'}, {value: 0, time: '2024-12-31T00:00:00'}, 
        ]
      ]
    },
    {
      name:'Flow 2',
      nickname: 'Animals',
      annualUsage: 80,
      dailyUsage: 20,
      data:[
        [
          {value: 0, time: '2024-09-19T00:00:00'}, {value: 0, time: '2024-09-19T01:00:00'}, {value: 0, time: '2024-09-19T02:00:00'},
          {value: 0, time: '2024-09-19T03:00:00'}, {value: 0, time: '2024-09-19T04:00:00'}, {value: 0, time: '2024-09-19T05:00:00'},
          {value: 0, time: '2024-09-19T06:00:00'}, {value: 0, time: '2024-09-19T07:00:00'}, {value: 0, time: '2024-09-19T08:00:00'},
          {value: 0, time: '2024-09-19T09:00:00'}, {value: 0, time: '2024-09-1910:00:00'}, {value: 0, time: '2024-09-19T11:00:00'},
          {value: 0, time: '2024-09-19T12:00:00'}, {value: 0, time: '2024-09-19T13:00:00'}, {value: 0, time: '2024-09-19T14:00:00'},
          {value: 0, time: '2024-09-19T15:00:00'}, {value: 0, time: '2024-09-19T16:00:00'}, {value: 0, time: '2024-09-19T17:00:00'},
          {value: 0, time: '2024-09-19T18:00:00'}, {value: 0, time: '2024-09-19T19:00:00'}, {value: 0, time: '2024-09-19T20:00:00'},
          {value: 0, time: '2024-09-19T21:00:00'}, {value: 0, time: '2024-09-19T22:00:00'}, {value: 0, time: '2024-09-19T23:00:00'}
        ],
        [
          {value: 0, time: '2024-09-20T00:00:00'}, {value: 0, time: '2024-09-19T00:00:00'}, {value: 0, time: '2024-09-18T00:00:00'},
          {value: 0, time: '2024-09-17T00:00:00'}, {value: 0, time: '2024-09-16T00:00:00'}, {value: 0, time: '2024-09-15T00:00:00'},
          {value: 0, time: '2024-09-14T00:00:00'}
        ],
        [
          {value: 0, time: '2024-09-20T00:00:00'}, {value: 0, time: '2024-09-19T00:00:00'}, {value: 0, time: '2024-09-18T00:00:00'},
          {value: 0, time: '2024-09-17T00:00:00'}, {value: 0, time: '2024-09-16T00:00:00'}, {value: 0, time: '2024-09-15T00:00:00'},
          {value: 0, time: '2024-09-14T00:00:00'}, {value: 0, time: '2024-09-13T00:00:00'}, {value: 0, time: '2024-09-12T00:00:00'}, 
          {value: 0, time: '2024-09-11T00:00:00'}, {value: 0, time: '2024-09-10T00:00:00'}, {value: 0, time: '2024-09-09T00:00:00'}, 
          {value: 0, time: '2024-08-15T00:00:00'}, {value: 0, time: '2024-09-07T00:00:00'}, {value: 0, time: '2024-09-06T00:00:00'}, 
          {value: 0, time: '2024-09-05T00:00:00'}, {value: 0, time: '2024-09-04T00:00:00'}, {value: 0, time: '2024-09-03T00:00:00'}, 
          {value: 0, time: '2024-09-02T00:00:00'}, {value: 0, time: '2024-09-01T00:00:00'}, {value: 0, time: '2024-08-31T00:00:00'},
          {value: 0, time: '2024-08-30T00:00:00'}, {value: 0, time: '2024-08-29T00:00:00'}, {value: 0, time: '2024-08-28T00:00:00'},
          {value: 0, time: '2024-08-27T00:00:00'}, {value: 0, time: '2024-08-26T00:00:00'}, {value: 0, time: '2024-08-25T00:00:00'},
          {value: 0, time: '2024-08-24T00:00:00'}
        ],
        [
          {value: 0, time: '2024-01-31T00:00:00'}, {value: 0, time: '2024-02-28T00:00:00'}, {value: 0, time: '2024-03-31T00:00:00'},
          {value: 0, time: '2024-04-30T00:00:00'}, {value: 0, time: '2024-05-31T00:00:00'}, {value: 0, time: '2024-06-30T00:00:00'},
          {value: 0, time: '2024-07-31T00:00:00'}, {value: 0, time: '2024-08-31T00:00:00'}, {value: 0, time: '2024-09-30T00:00:00'}, 
          {value: 0, time: '2024-10-31T00:00:00'}, {value: 0, time: '2024-11-30T00:00:00'}, {value: 0, time: '2024-12-31T00:00:00'}, 
        ]
      ]
    },
  ])
  //river flow data for flowsite (averaged)
  //0: one day data  1: seven day data  2: one month data  3: annual data
  var riverFlow = [
    [
      {value: 0, time: '2024-09-19T00:00:00'}, {value: 0, time: '2024-09-19T01:00:00'}, {value: 0, time: '2024-09-19T02:00:00'},
      {value: 0, time: '2024-09-19T03:00:00'}, {value: 0, time: '2024-09-19T04:00:00'}, {value: 0, time: '2024-09-19T05:00:00'},
      {value: 0, time: '2024-09-19T06:00:00'}, {value: 0, time: '2024-09-19T07:00:00'}, {value: 0, time: '2024-09-19T08:00:00'},
      {value: 0, time: '2024-09-19T09:00:00'}, {value: 0, time: '2024-09-1910:00:00'}, {value: 0, time: '2024-09-19T11:00:00'},
      {value: 0, time: '2024-09-19T12:00:00'}, {value: 0, time: '2024-09-19T13:00:00'}, {value: 0, time: '2024-09-19T14:00:00'},
      {value: 0, time: '2024-09-19T15:00:00'}, {value: 0, time: '2024-09-19T16:00:00'}, {value: 0, time: '2024-09-19T17:00:00'},
     
    ],
    [
      {value: 0, time: '2024-09-20T00:00:00'}, {value: 0, time: '2024-09-19T00:00:00'}, {value: 0, time: '2024-09-18T00:00:00'},
      {value: 0, time: '2024-09-17T00:00:00'}, {value: 0, time: '2024-09-16T00:00:00'}, {value: 0, time: '2024-09-15T00:00:00'},
      {value: 0, time: '2024-09-14T00:00:00'}
    ],
    [
      {value: 0, time: '2024-09-20T00:00:00'}, {value: 0, time: '2024-09-19T00:00:00'}, {value: 0, time: '2024-09-18T00:00:00'},
      {value: 0, time: '2024-09-17T00:00:00'}, {value: 0, time: '2024-09-16T00:00:00'}, {value: 0, time: '2024-09-15T00:00:00'},
      {value: 0, time: '2024-09-14T00:00:00'}, {value: 0, time: '2024-09-13T00:00:00'}, {value: 0, time: '2024-09-12T00:00:00'}, 
      {value: 0, time: '2024-09-11T00:00:00'}, {value: 0, time: '2024-09-10T00:00:00'}, {value: 0, time: '2024-09-09T00:00:00'}, 
      {value: 0, time: '2024-08-15T00:00:00'}, {value: 0, time: '2024-09-07T00:00:00'}, {value: 0, time: '2024-09-06T00:00:00'}, 
      {value: 0, time: '2024-09-05T00:00:00'}, {value: 0, time: '2024-09-04T00:00:00'}, {value: 0, time: '2024-09-03T00:00:00'}, 
      {value: 0, time: '2024-09-02T00:00:00'}, {value: 0, time: '2024-09-01T00:00:00'}, {value: 0, time: '2024-08-31T00:00:00'},
      {value: 0, time: '2024-08-30T00:00:00'}, {value: 0, time: '2024-08-29T00:00:00'}, {value: 0, time: '2024-08-28T00:00:00'},
      {value: 0, time: '2024-08-27T00:00:00'}, {value: 0, time: '2024-08-26T00:00:00'}, {value: 0, time: '2024-08-25T00:00:00'},
      {value: 0, time: '2024-08-24T00:00:00'}
    ],
    [
      {value: 0, time: '2024-01-31T00:00:00'}, {value: 0, time: '2024-02-28T00:00:00'}, {value: 0, time: '2024-03-31T00:00:00'},
      {value: 0, time: '2024-04-30T00:00:00'}, {value: 0, time: '2024-05-31T00:00:00'}, {value: 0, time: '2024-06-30T00:00:00'},
      {value: 0, time: '2024-07-31T00:00:00'}, {value: 0, time: '2024-08-31T00:00:00'}, {value: 0, time: '2024-09-30T00:00:00'}, 
      {value: 0, time: '2024-10-31T00:00:00'}, {value: 0, time: '2024-11-30T00:00:00'}, {value: 0, time: '2024-12-31T00:00:00'}, 
    ]
  ]
  //all information for flow based restrictions
  var flowbasedRestrictions = [
    {
      restriction: 'One',
      flowAtRestriction: 0,
      instantaneous: 0,
      hourly: 0,
      daily: 0,
      annually: 0
    },
    {
      restriction: 'Two',
      flowAtRestriction: 0,
      instantaneous: 0,
      hourly: 0,
      daily: 0,
      annually: 0
    },
    {
      restriction: 'Three',
      flowAtRestriction: 0,
      instantaneous: 0,
      hourly: 0,
      daily: 0,
      annually: 0
    }
  ]
  var annualUsage = 10 //total annual usage
  var dailyUsage = 1 //total daily usage
 

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
          header: () => < ConsentDropdownHeader navigation={navigation} consents={consents} setconsents={setconsents}
            currentConsent={currentConsent} setCurrentConsent={setCurrentConsent} currentConsentATH={currentConsentATH} setCurrentConsentATH={setCurrentConsentATH}
          />,
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
        <Drawer.Screen name="HOME">
          {props => <HomeScreen {...props} take={take} dailyUsage={dailyUsage} annualUsage={annualUsage}
              annualMax={annualMax} riverFlow={currentRiverFlow} restriction={flowAtRestriction} 
              timePeriod={dataRecorded} dailyMax={dailyMax} />}
        </Drawer.Screen>

        <Drawer.Screen name="CONSENT">
          {props => <ConsentPage {...props} compliance={compliedYesterday}  
          take={take} flowsite={flowsite} consentExpiration={consentExpiration} 
          annualMax={annualMax} restrictions={flowbasedRestrictions} />}
        </Drawer.Screen>

        <Drawer.Screen name="USAGE">
          {props => <UsagePage {...props} dataCollected={dataRecorded} 
          dailyMax={dailyMax} annualMax={annualMax} flowmeters={flowmeters} 
          setflowmeters={setflowmeters} />}
        </Drawer.Screen>

        <Drawer.Screen name="RIVER">
          {props => <RiverPage {...props} flowsite={flowsite}  
          timeframe={dataRecorded} riverFlow={currentRiverFlow} data={riverFlow}/>}
        </Drawer.Screen>

        <Drawer.Screen name="FAQ">
          {props => <FAQPage {...props} contacts={contacts} faq={faq} />}
        </Drawer.Screen>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
