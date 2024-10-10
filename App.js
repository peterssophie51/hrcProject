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
import { ReportsPage } from './pages/reportsPage.js';
import { parse } from 'react-native-svg';

const Drawer = createDrawerNavigator();


export default function App() {

  const ATH2014015277 = {
    flowsite: null,
    dailyMax: 750,
    annualMax: 273750,
    flowAtRestriction: null,
    consentExpiration: '2033-07-01T00:00:00',
    flowbasedRestrictions: [
      {
        restriction: 'One',
        flowAtRestriction: '',
        instantaneous: 33,
        hourly: '',
        daily: '',
        annually: ''
      }
    ]
  }

  const ATH2005010697 = {
    flowsite: 'Rangitikei at Onepuhi',
    dailyMax: 250,
    annualMax: 0,
    flowAtRestriction: 12.100,
    consentExpiration: '2037-07-01T00:00:00',
    flowbasedRestrictions: [
      {
        restriction: 'One',
        flowAtRestriction: '',
        instantaneous: '',
        hourly: 33,
        daily: 250,
        annually: ''
      },
      {
        restriction: 'Two',
        flowAtRestriction: 12.100,
        instantaneous: '',
        hourly: 20,
        daily: 200,
        annually: ''
      }
    ]
  }

  const ATH2007011553 = {
    flowsite: null,
    dailyMax: 900,
    annualMax: 257900,
    flowAtRestriction: null,
    consentExpiration: '2022-03-14T00:00:00',
    flowbasedRestrictions: [
      {
        restriction: 'One',
        flowAtRestriction: '',
        instantaneous: 33,
        hourly: 37.5,
        daily: 900,
        annually: 257900
      }
    ]
  }

  const ATH2007011829 = {
    flowsite: 'Makakahi at Hamua',
    dailyMax: 692,
    annualMax: 0,
    flowAtRestriction: null,
    consentExpiration: '2020-07-01T00:00:00',
    flowbasedRestrictions: [
      {
        restriction: 'One',
        flowAtRestriction: '',
        instantaneous: 19.2,
        hourly: '',
        daily: 692,
        annually: ''
      }
    ]
  }

  const ATH2006010907 = {
    flowsite: 'Oroua at Almadale Slackline',
    dailyMax: 9000,
    annualMax: 0,
    flowAtRestriction: 1.850,
    consentExpiration: '2021-8-10T00:00:00',
    flowbasedRestrictions: [
      {
        restriction: 'One',
        flowAtRestriction: '',
        instantaneous: 105,
        hourly: '',
        daily: 9000,
        annually: ''
      },
      {
        restriction: 'Two',
        flowAtRestriction: 1.850,
        instantaneous: 100,
        hourly: '',
        daily: 7000,
        annually: ''
      },
      {
        restriction: 'Three',
        flowAtRestriction: 1.015,
        instantaneous: 85,
        hourly: '',
        daily: 7000,
        annually: ''
      }
    ]
  }

  const contacts = [
    {
      key: 0,
      name: 'Website',
      method: 'https',
      link: 'www.horizons.govt.nz//'
    },
    {
      key: 1,
      name: 'Phone',
      method: 'tel',
      link:'+64 6 9522 800'
    },
    {
      key: 2,
      name: 'Email',
      method:'mailto',
      link: 'waterinfo@horizons.govt.nz'
    }
  ] //all contacts to be rendered in contacts card
  const faq = [
    {   
      key: 0, 
      question:'Question', 
      answer:"Answer"
    },
    {
      key: 1,
      question:'Why did the chicken cross the road?',
      answer:'To get to the other side!'
    },
  
  
  ] //all faq questions and answers to be rendered in faq cards

  const [currentConsent, setCurrentConsent] = useState("Consent E"); //current consent nickname
  const [currentConsentATH, setCurrentConsentATH] = useState("ATH-2006010907"); //current consent ath
   //all consents in list 
  const [consents, setconsents] = useState([
    {ath:'ATH-2014015277', nickname: 'Consent A'}, 
    {ath:'ATH-2005010697', nickname: 'Consent B'}, 
    {ath:'ATH-2007011553', nickname: 'Consent C'}, 
    {ath:'ATH-2007011829', nickname: 'Consent D'}, 
    {ath:'ATH-2006010907', nickname: 'Consent E'}, 

  ])
  const [currentRiverFlow, setcurrentRiverFlow] = useState(null)
  const [currentDate, setcurrentDate] = useState('')
  //river flow data for flowsite (averaged)
  //0: one day data  1: seven day data  2: one month data  3: annual data
  const [riverFlow, setriverFlow] = useState([[], [], []])

  //flow meter data
  //in data, 0: one day data  1: seven day data  2: one month data  3: annual data
  const [flowmeters, setflowmeters] = useState([])
  const [annualUsage, setannualUsage] = useState(1000)
  const [dailyUsage, setdailyUsage] = useState(100)
  const [usageDate, setusageDate] = useState('')

  const [take, settake] = useState(false) //consent can take water or not
  const [compliedYesterday, setcompliedYesterday] = useState(true) //consent has complied or not

  const [flowAtRestriction, setflowAtRestriction] = useState(0) //restriction value in home page
  const [consentExpiration, setconsentExpiration] = useState('2024-09-19T00:00:00') //when the consent expires
  //all information for flow based restrictions
  const [flowbasedRestrictions, setflowbasedRestrictions] = useState([])
  const [flowsite, setflowsite] = useState('Oroua at Almadale Slackline') //flowsite for consent
  const [dailyMax, setdailyMax] =useState(0) //maximum abstraction for a day
  const [annualMax, setannualMax] = useState(100) //maximum abstraction for a year

  useEffect(() => {
    const consentData = {
      'ATH-2014015277': ATH2014015277,
      'ATH-2005010697': ATH2005010697,
      'ATH-2007011553': ATH2007011553,
      'ATH-2007011829': ATH2007011829,
      'ATH-2006010907': ATH2006010907,
    };
  
    const consentInfo = consentData[currentConsentATH];
  
    if (consentInfo) {
      setconsentExpiration(consentInfo.consentExpiration);
      setflowbasedRestrictions(consentInfo.flowbasedRestrictions);
      setflowsite(consentInfo.flowsite);
      setdailyMax(consentInfo.dailyMax);
      setannualMax(consentInfo.annualMax);
      setflowAtRestriction(consentInfo.flowAtRestriction);
    } 
  }, [currentConsentATH]);

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
            if (flowmeterList.find((element) => element === item['_attributes']['Name'].replace(/(meter)(\d+)/, '$1 $2')) == undefined) {
              flowmeterList.push(item['_attributes']['Name'].replace(/(meter)(\d+)/, '$1 $2'))
            }
          }
        })
        
        function createFlowmeter(name)  {
          return {
            name,
            nickname: name.replace(/(meter)(\d+)/, '$1 $2'),
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
        //console.error(error);
      }
    }

    const getComplianceData = async () => {
      try {
        const response = await fetch('https://hilltopserver.horizons.govt.nz/watermatters.hts?Service=Hilltop&Site=' + currentConsentATH + '&Request=GetData&Measurement=WMCDS%20-%20CompliedYesterday');
        const responseText = await response.text();
        const convert = require('xml-js');
        const jsonConverted = convert.xml2json(responseText, { compact: true, spaces: 4 });
        const parsedData = JSON.parse(jsonConverted);
        settake(parsedData['Hilltop']['Measurement']['Data']['E']['I2']['_text'] == 0 ? true : false)
        setcompliedYesterday(parsedData['Hilltop']['Measurement']['Data']['E']['I7']['_text'] == 0 ? true : false)
      } catch (error) {
        //console.error(error);
      }
    }

    getComplianceData()
    getCurrentFlowmeters()
  }, [currentConsentATH])

  useEffect(() => {   
    const getAnnualTotalFlowmeterUsage = async () => {
      let totalAnnualUsage = 0
      const today = new Date()
      const startYear = new Date(today.getFullYear(), 0, 1).toLocaleDateString()
      try {
        const promises = flowmeters.map(async (item) => {
          const response = await fetch('https://hilltopserver.horizons.govt.nz/boo.hts?Service=Hilltop&Request=GetData&Site=' + currentConsentATH + '&Measurement=' + item.name.replace(' meter', '') + '&Method=Total&from=' + startYear+ '&to=now');
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
        //console.error(error);
      }
      setannualUsage(totalAnnualUsage)
    }

    const getDailyTotalFlowmeterUsage = async () => {
      let totalDailyUsage = 0
      const oneDayBefore = new Date(Date.now() - 86400000).toLocaleDateString()
      try {
        const promises = flowmeters.map(async (item) => {
          const response = await fetch('https://hilltopserver.horizons.govt.nz/boo.hts?Service=Hilltop&Request=GetData&Site=' + currentConsentATH + '&Measurement=' + item.name.replace(' meter', '') + '&Method=Total&from=' + oneDayBefore + '&to=now');
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
        //console.error(error);
      }
      setdailyUsage(totalDailyUsage)
    }

    const getOneDayFlowmeterUsage = async () => {
      try {
        const oneDayBefore = new Date(Date.now() - 86400000).toLocaleDateString()
        const promises = flowmeters.map(async (item) => {
          item.data[0].length = 0
          const response = await fetch('https://hilltopserver.horizons.govt.nz/boo.hts?Service=Hilltop&Request=GetData&Site=' + currentConsentATH + '&Measurement=' + item.name.replace(' meter', '') + '&Method=Total&from=' + oneDayBefore + '&to=now&interval=1')
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
        const today = new Date()
        const sevenDaysBefore = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString()
        const promises = flowmeters.map(async (item) => {
          item.data[1].length = 0
          const response = await fetch('https://hilltopserver.horizons.govt.nz/boo.hts?Service=Hilltop&Request=GetData&Site=' + currentConsentATH + '&Measurement=' + item.name.replace(' meter', '') + '%20Total%20(1%20Day)&from=' + sevenDaysBefore + '&to=now')
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
        const today = new Date()
        const oneMonthBefore = new Date(today.getTime() - 27 * 24 * 60 * 60 * 1000).toLocaleDateString()
        const promises = flowmeters.map(async (item) => {
          item.data[2].length = 0
          const response = await fetch('https://hilltopserver.horizons.govt.nz/boo.hts?Service=Hilltop&Request=GetData&Site=' + currentConsentATH + '&Measurement=' + item.name.replace(' meter', '') + '%20Total%20(1%20Day)&from=' + oneMonthBefore + '&to=now')
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
    
    const getAnnualFlowmeterUsage = async () => {
      try {
      const promises = flowmeters.map(async (item) => {
        item.data[3].length = 0
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth(); 
    
        const getMonthTimes = (month) => {
          const startOfMonth = new Date(currentYear, month, 1).toLocaleDateString()
          const endOfMonth = new Date(currentYear, month + 1, 0).toLocaleDateString()
          return [startOfMonth, endOfMonth > now ? now : endOfMonth];
        };
    
        for (let month = 0; month <= currentMonth; month++) {
          const monthTimes = getMonthTimes(month);
          const response = await fetch('https://hilltopserver.horizons.govt.nz/boo.hts?Service=Hilltop&Request=GetData&Site=' + currentConsentATH + '&Measurement=' + item.name.replace(' meter', '') + '&Method=Total&from=' + monthTimes[0] + '&to=' + monthTimes[1])
          const responseText = await response.text()
          const convert = require('xml-js')
          const jsonConverted = convert.xml2json(responseText, { compact: true, spaces: 4 })
          const parsedData = JSON.parse(jsonConverted)
          const value = {
            value: Number(parsedData['Hilltop']['Measurement']['Data']['E']['I1']['_text']),
            time: parsedData['Hilltop']['Measurement']['Data']['E']['T']['_text']
          }
          item.data[3].push(value)
        }
      })

      await Promise.all(promises)
      } catch (error) {
        //console.error("Error fetching flowmeter usage:", error); 
      }
    };

    const getUsageDate = async () => {
      const oneDayBefore = new Date(Date.now() - 86400000).toLocaleDateString()
      try {
        const response = await fetch('https://hilltopserver.horizons.govt.nz/boo.hts?Service=Hilltop&Request=GetData&Site=' + currentConsentATH + '&Measurement=Flow1&Method=Total&from=' + oneDayBefore + '&to=now')
        const responseText = await response.text()
        const convert = require('xml-js')
        const jsonConverted = convert.xml2json(responseText, { compact: true, spaces: 4})
        const parsedData = JSON.parse(jsonConverted)
        const value = parsedData['Hilltop']['Measurement']['Data']['E']['T']['_text']
        var usageTime = new Date(value)
        var dataRecorded = usageTime.toLocaleDateString() + ', ' + usageTime.toLocaleTimeString()
        setusageDate(dataRecorded)
      } catch (error) {
        //console.error(error)
      }
    }

    getOneDayFlowmeterUsage()
    getSevenDayFlowmeterUsage()
    getOneMonthFlowmeterUsage()
    getAnnualFlowmeterUsage()
    getAnnualTotalFlowmeterUsage()
    getDailyTotalFlowmeterUsage()
    getUsageDate()

  }, [currentConsentATH, flowmeters])

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
        //console.error(error);
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
        var currentTime = new Date(value) //date created
        var dataRecorded = currentTime.toLocaleDateString() + ', ' + currentTime.toLocaleTimeString()  //date formatted for string use
        setcurrentDate(dataRecorded);  
      } catch (error) {
        //console.error(error);
      }
    };

    const getOneDayRiverFlow = async () => {
      riverFlow[0].length = 0
      const response = await fetch('https://hilltopserver.horizons.govt.nz/boo.hts?Service=SOS&Request=GetObservation&FeatureOfInterest=' + flowsite + '&ObservedProperty=Flow%20mean%20(1%20Hour)&TemporalFilter=om:phenomenonTime,P1D')
      const responseText = await response.text()
      const convert = require('xml-js')
      const jsonConverted = convert.xml2json(responseText, { compact: true, spaces: 4})
      const parsedData = JSON.parse(jsonConverted)
      parsedData['wml2:Collection']['wml2:observationMember']['om:OM_Observation']['om:result']['wml2:MeasurementTimeseries']['wml2:point'].forEach((datapoint) => {
        const value = {
          value: Number(datapoint['wml2:MeasurementTVP']['wml2:value']['_text']),
          time: datapoint['wml2:MeasurementTVP']['wml2:time']['_text']
        }
        riverFlow[0].push(value)
      }) 
    }

    const getSevenDayRiverFlow = async () => {
      riverFlow[1].length = 0
      const response = await fetch('https://hilltopserver.horizons.govt.nz/boo.hts?Service=SOS&Request=GetObservation&FeatureOfInterest=' + flowsite + '&ObservedProperty=Flow%20mean%20(1%20Day)&TemporalFilter=om:phenomenonTime,P6D')
      const responseText = await response.text()
      const convert = require('xml-js')
      const jsonConverted = convert.xml2json(responseText, { compact: true, spaces: 4})
      const parsedData = JSON.parse(jsonConverted)
      parsedData['wml2:Collection']['wml2:observationMember']['om:OM_Observation']['om:result']['wml2:MeasurementTimeseries']['wml2:point'].forEach((datapoint) => {
        const value = {
          value: Number(datapoint['wml2:MeasurementTVP']['wml2:value']['_text']),
          time: datapoint['wml2:MeasurementTVP']['wml2:time']['_text']
        }
        riverFlow[1].push(value)
      }) 
    }

    const getOneMonthRiverFlow = async () => {
      riverFlow[2].length = 0
      const response = await fetch('https://hilltopserver.horizons.govt.nz/boo.hts?Service=SOS&Request=GetObservation&FeatureOfInterest=' + flowsite + '&ObservedProperty=Flow%20mean%20(1%20Day)&TemporalFilter=om:phenomenonTime,P27D')
      const responseText = await response.text()
      const convert = require('xml-js')
      const jsonConverted = convert.xml2json(responseText, { compact: true, spaces: 4})
      const parsedData = JSON.parse(jsonConverted)
      parsedData['wml2:Collection']['wml2:observationMember']['om:OM_Observation']['om:result']['wml2:MeasurementTimeseries']['wml2:point'].forEach((datapoint) => {
        const value = {
          value: Number(datapoint['wml2:MeasurementTVP']['wml2:value']['_text']),
          time: datapoint['wml2:MeasurementTVP']['wml2:time']['_text']
        }
        riverFlow[2].push(value)
      }) 
    }

    if (flowsite == null) {
      riverFlow[0].length = 0
      riverFlow[1].length = 0
      riverFlow[2].length = 0
      riverFlow[0].push({value: 0})
      riverFlow[1].push({value: 0})
      riverFlow[2].push({value: 0})
      setcurrentRiverFlow()
      setcurrentDate(new Date().toLocaleDateString() + ', ' + new Date().toLocaleTimeString())
    } else {
      getOneDayRiverFlow()
      getSevenDayRiverFlow()
      getOneMonthRiverFlow()
      getCurrentRiverFlow(); 
      getCurrentDate() 
    }

  }, [flowsite]);

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
        return ''; 
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
            marginTop: '3%',
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
              timePeriod={currentDate} usageTime={usageDate} dailyMax={dailyMax} />}
        </Drawer.Screen>

        <Drawer.Screen name="CONSENT">
          {props => <ConsentPage {...props} compliance={compliedYesterday}  
          take={take} flowsite={flowsite} consentExpiration={consentExpiration} 
          annualMax={annualMax} restrictions={flowbasedRestrictions} currentRiverFlow={currentRiverFlow}/>}
        </Drawer.Screen>

        <Drawer.Screen name="USAGE">
          {props => <UsagePage {...props} dataCollected={usageDate} 
          dailyMax={dailyMax} annualMax={annualMax} flowmeters={flowmeters} 
          setflowmeters={setflowmeters} currentConsentATH={currentConsentATH}/>}
        </Drawer.Screen>

        <Drawer.Screen name="RIVER">
          {props => <RiverPage {...props} flowsite={flowsite} flowAtRestriction={flowAtRestriction}
          timeframe={currentDate} riverFlow={currentRiverFlow} data={riverFlow} />}
        </Drawer.Screen>

        <Drawer.Screen name="REPORTS">
          {props => <ReportsPage {...props} flowmeters={flowmeters} riverFlow={riverFlow}
          dailyMax={dailyMax} flowAtRestriction={flowAtRestriction} flowsite={flowsite} />}
        </Drawer.Screen>

        <Drawer.Screen name="FAQ">
          {props => <FAQPage {...props} contacts={contacts} faq={faq} />}
        </Drawer.Screen>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
