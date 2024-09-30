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

  var flowsite = 'Tokomaru at Riverland Farm' //flowsite for consent
  const [currentConsent, setCurrentConsent] = useState("Water Consent"); //current consent nickname
  const [currentConsentATH, setCurrentConsentATH] = useState("ATH-2002009085"); //current consent ath


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
    {ath:'ATH-2001008270', nickname: 'Water'}, 
  ])

  const [currentRiverFlow, setcurrentRiverFlow] = useState(null)
  const [currentDate, setcurrentDate] = useState(null)

 useEffect(() => {
    const getCurrentRiverFlow = async () => {
      try {
        const response = await fetch('https://hilltopserver.horizons.govt.nz/boo.hts?Service=SOS&Request=GetObservation&FeatureOfInterest='
          + flowsite +
          '&ObservedProperty=Flow%5bWater%20Level%5d&TemporalFilter=om:phenomenonTime,P');
        const responseText = await response.text();

        const convert = require('xml-js');
        const jsonConverted = convert.xml2json(responseText, { compact: true, spaces: 4 });
        const parsedData = JSON.parse(jsonConverted);

        const value = parsedData['wml2:Collection']['wml2:observationMember']['om:OM_Observation']['om:result']['wml2:MeasurementTimeseries']['wml2:point']['wml2:MeasurementTVP']['wml2:value']['_text'];
        setcurrentRiverFlow(value / 1000);  
      } catch (error) {
        console.error(error);
      }
    };

    const getCurrentDate = async () => {
      try {
        const response = await fetch('https://hilltopserver.horizons.govt.nz/boo.hts?Service=SOS&Request=GetObservation&FeatureOfInterest='
          + flowsite +
          '&ObservedProperty=Flow%5bWater%20Level%5d&TemporalFilter=om:phenomenonTime,P');
        const responseText = await response.text();

        const convert = require('xml-js');
        const jsonConverted = convert.xml2json(responseText, { compact: true, spaces: 4 });
        const parsedData = JSON.parse(jsonConverted);

        const value = parsedData['wml2:Collection']['wml2:observationMember']['om:OM_Observation']['om:result']['wml2:MeasurementTimeseries']['wml2:point']['wml2:MeasurementTVP']['wml2:time']['_text'];
        setcurrentDate(value);  
      } catch (error) {
        console.error(error);
      }
    };

    getCurrentRiverFlow(); 
    getCurrentDate() 
  }, [flowsite]);

  //flow meter data
  //in data, 0: one day data  1: seven day data  2: one month data  3: annual data
  const [flowmeters, setflowmeters] = useState([
  ])
  const [annualUsage, setannualUsage] = useState(1000)
  const [dailyUsage, setdailyUsage] = useState(100)

  useEffect(() => {
    const getCurrentFlowmeters = async () => {
      try {
        const response = await fetch('https://hilltopserver.horizons.govt.nz/boo.hts?Service=Hilltop&Request=MeasurementList&Site=' + currentConsentATH);
        const responseText = await response.text();

        const convert = require('xml-js');
        const jsonConverted = convert.xml2json(responseText, { compact: true, spaces: 4 });
        const parsedData = JSON.parse(jsonConverted);

        const flowmeterList = []
        parsedData['HilltopServer']['DataSource'].forEach((item) => {
          if (item['_attributes']['Name'].slice(0, 10) === 'Flow meter') {
            if (flowmeterList.find((element) => element === item['_attributes']['Name']) == undefined) {
              flowmeterList.push(item['_attributes']['Name'])
            }
          }
        })
        
        function createFlowmeter(name)  {
          return {
            name,
            nickname: 'Nickname',
            annualUsage: 0,
            dailyUsage: 0,
            data: [
              [], [], [], []
            ]
          }
        }
      const newFlowmeters = flowmeterList.map((item) => createFlowmeter(item))
      setflowmeters(newFlowmeters);

      } catch (error) {
        console.error(error);
      }
    }
    getCurrentFlowmeters()
  }, [currentConsentATH])

  useEffect(() => {   
    const getAnnualFlowmeterUsage = async () => {
      let totalAnnualUsage = 0
      try {
        const promises = flowmeters.map(async (item) => {
          const response = await fetch('https://hilltopserver.horizons.govt.nz/boo.hts?Service=Hilltop&Request=GetData&Site=' + currentConsentATH + '&Measurement=' + item.name.replace(' meter', '') + '&Method=Total&Interval=1%20year');
          const responseText = await response.text();
          const convert = require('xml-js');
          const jsonConverted = convert.xml2json(responseText, { compact: true, spaces: 4 });
          const parsedData = JSON.parse(jsonConverted);
          const value = parsedData['Hilltop']['Measurement']['Data']['E']['I1']['_text']
          item.annualUsage = Number(value)
          totalAnnualUsage += item.annualUsage
        })

        await Promise.all(promises)
      } catch (error) {
        console.error(error);
      }
      setannualUsage(totalAnnualUsage)
    }

    const getDailyFlowmeterUsage = async () => {
      let totalDailyUsage = 0
      try {
        const promises = flowmeters.map(async (item) => {
          const response = await fetch('https://hilltopserver.horizons.govt.nz/boo.hts?Service=Hilltop&Request=GetData&Site=' + currentConsentATH + '&Measurement=' + item.name.replace(' meter', '') + '&Method=Total&Interval=1D');
          const responseText = await response.text();
          const convert = require('xml-js');
          const jsonConverted = convert.xml2json(responseText, { compact: true, spaces: 4 });
          const parsedData = JSON.parse(jsonConverted);
          const value = parsedData['Hilltop']['Measurement']['Data']['E']['I1']['_text']
          item.dailyUsage = Number(value)
          totalDailyUsage += item.dailyUsage
        })
        await Promise.all(promises)
      } catch (error) {
        console.error(error);
      }
      setdailyUsage(totalDailyUsage)
    }

    const getOneDayFlowmeterUsage = async () => {
      try {
        const promises = flowmeters.map(async (item) => {
          item.data[0].length = 0
          const response = await fetch('https://hilltopserver.horizons.govt.nz/PublicFlowmeters.hts?service=Hilltop&request=GetData&site=' + currentConsentATH + '&measurement=' + item.name.replace(' meter', '') + '&Method=Total&Interval=1%20Hour&alignment=1%20Day')
          const responseText = await response.text()
          const convert = require('xml-js')
          const jsonConverted = convert.xml2json(responseText, { compact: true, spaces: 4})
          const parsedData = JSON.parse(jsonConverted)
          parsedData['Hilltop']['Measurement']['Data']['E'].forEach((datapoint) => {
            const value = {
              value: Number(datapoint['I1']['_text']),
              time: datapoint['T']['_text']
            }
            item.data[0].push(value)
          })
        })
        await Promise.all(promises)
      } catch (error) {
        console.log(error)
      }
    }

    const getSevenDayFlowmeterUsage = async () => {
      try {
        const promises = flowmeters.map(async (item) => {
          item.data[1].length = 0
          const response = await fetch('https://hilltopserver.horizons.govt.nz/PublicFlowmeters.hts?service=Hilltop&request=GetData&site=' + currentConsentATH + '&measurement=' + item.name.replace(' meter', '') + '&Method=Total&Interval=1 Day&alignment=7 Day')
          const responseText = await response.text()
          const convert = require('xml-js')
          const jsonConverted = convert.xml2json(responseText, { compact: true, spaces: 4})
          const parsedData = JSON.parse(jsonConverted)
          parsedData['Hilltop']['Measurement']['Data']['E'].forEach((datapoint) => {
            const value = {
              value: Number(datapoint['I1']['_text']),
              time: datapoint['T']['_text']
            }
            item.data[1].push(value)
          })
        })
        await Promise.all(promises)
      } catch (error) {
        console.log(error)
      }
    }

    const getOneMonthFlowmeterUsage = async () => {
      try {
        const promises = flowmeters.map(async (item) => {
          item.data[2].length = 0
          const response = await fetch('https://hilltopserver.horizons.govt.nz/PublicFlowmeters.hts?service=Hilltop&request=GetData&site=' + currentConsentATH + '&measurement=' + item.name.replace(' meter', '') + '&Method=Total&Interval=1 Day&alignment=28 Day')
          const responseText = await response.text()
          const convert = require('xml-js')
          const jsonConverted = convert.xml2json(responseText, { compact: true, spaces: 4})
          const parsedData = JSON.parse(jsonConverted)
          parsedData['Hilltop']['Measurement']['Data']['E'].forEach((datapoint) => {
            const value = {
              value: Number(datapoint['I1']['_text']),
              time: datapoint['T']['_text']
            }
            item.data[2].push(value)
          })
        })
        await Promise.all(promises)
      } catch (error) {
        console.log(error)
      }
    }

    getAnnualFlowmeterUsage()
    getDailyFlowmeterUsage()
    getOneDayFlowmeterUsage()
    getSevenDayFlowmeterUsage()
    getOneMonthFlowmeterUsage()

  }, [currentConsentATH, flowmeters])

  const [dailyMax, setdailyMax] =useState(0) //maximum abstraction for a day
  const [annualMax, setannualMax] = useState(100) //maximum abstraction for a year
  const [take, settake] = useState(false) //consent can take water or not
  const [compliedYesterday, setcompliedYesterday] = useState(true) //consent has complied or not


  var flowAtRestriction = 1.5 //restriction value in home page
  var time = new Date(currentDate) //date created
  var dataRecorded = time.toLocaleDateString('en-GB') + ', ' + time.toLocaleTimeString()  //date formatted for string use
  var consentExpiration = '2024-09-19T00:00:00' //when the consent expires
  
  //river flow data for flowsite (averaged)
  //0: one day data  1: seven day data  2: one month data  3: annual data
  var riverFlow = [
    [
      {value: 2130, time: '2024-09-19T00:00:00'}, {value: 2100, time: '2024-09-19T01:00:00'}, {value: 2000, time: '2024-09-19T02:00:00'},
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
            color: 'white',
          },
          headerLeftContainerStyle: {
            position: 'absolute', 
            zIndex: 10,
            marginRight: 10
          },
          headerTintColor: 'white', 
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
          {props => <RiverPage {...props} flowsite={flowsite} flowAtRestriction={flowAtRestriction}
          timeframe={dataRecorded} riverFlow={currentRiverFlow} data={riverFlow}/>}
        </Drawer.Screen>

        <Drawer.Screen name="FAQ">
          {props => <FAQPage {...props} contacts={contacts} faq={faq} />}
        </Drawer.Screen>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
