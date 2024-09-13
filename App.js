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
  //VARIABLES
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
  const flowsite = "Flowsite" //current flowsite
  const oneDayData= [{value: 4286}, {value: 4232}, {value: 4277}, {value: 4211},
    {value: 4209}, {value: 4300}, {value: 4289}, {value: 4295}, 
    {value: 4273}, {value: 4270}, {value: 4269}, {value: 4218}] //example data for one day timeframe
  const sevenDayData = [{value:4267}, {value:4213}, {value: 4299}, {value:4187}, {value:4304}, {value:4265}, {value:4258}] //example data for seven days timeframe
  const oneMonthData = [{value:4213}, {value:4189}, {value:4194}, {value:4205}, {value:4279}, {value:4304}, {value:4289}] //example data for one month timeframe
  const annualData = [{value: 4189}, {value:4167}, {value:4205}, {value:4255}, 
    {value:4289}, {value: 4261}, {value:4202}, {value:4216},
  {value:4199}, {value:4200}, {value:4233}, {value:4149}] //example data for annual timeframe
  const dataCollected = 'Data collected' //when data was collected
  const dailyDataUsage= [{ key: 'Flow One', usage: 40}, {key:'Flow Two', usage: 30}, {key:'Flow Three', usage: 20}] //example data for daily usage
  const dailyMax = 100 //example data for daily maximum abstraction
  const annualDataUsage = [{key: 'Flow One', usage: 100}, {key: 'Flow Two', usage: 100}, {key:'Flow Three', usage: 200}] //example data for annual usage
  const annualMax = 700 //example data for annual maximum abstraction
  //example flowmeter data
  //index 0 is one day data, index 1 is seven day data, index 2 is one month data and idnex 3 is annual data
  const [flowMeters, setflowMeters] = useState([{name:'FLOW METER 1', nickname:'Animals', data:[
    [{value: 60}, {value: 21}, {value: 43}], 
    [{value:109}, {value:98}, {value:131}], 
    [{value:289}, {value:398}, {value:403}], 
    [{value:862}, {value:987}, {value:1079}]]},
                      {name: 'FLOW METER 2', nickname: 'Farm', data:[
    [{value:20}, {value: 39}, {value: 7}], 
    [{value:11}, {value:34}, {value:26}], 
    [{value:51}, {value:89}, {value:123}], 
    [{value:142}, {value:202}, {value:121}]] }
  ])
  const [compliance, setcompliance] = useState(true) //consent has complied or not
  const [take, settake] = useState(true) //consent can take water or not
  const consentExpiration = "Consent expiration" 
  //all data for different flow based restrictions
  const restrictions= [
    {   
        id: 0,
        restriction:'AA', 
        flowAtRestriction: 41.58, 
        instantaneous:1.605, 
        hourlyRestriction: '', 
        dailyRestriction: 200,
        annualRestriction: ''
    },
    {
        id:1,
        restriction:'ONE', 
        flowAtRestriction: 13.9007, 
        instantaneous: 20.75, 
        hourlyRestriction: '', 
        dailyRestriction: 2000,
        annualRestriction: ''
    },
    {
        id: 2,
        restriction:'TWO', 
        flowAtRestriction: 11.100, 
        instantaneous: '', 
        hourlyRestriction: '', 
        dailyRestriction: 140,
        annualRestriction: ''
    }, 
]
  const abstracted = 200; //amount abstracted in time period
  const data = [
    { value: (abstracted/annualMax) * 100 > 100 ? 100 : ((abstracted/annualMax) * 100), color: '#00A7CF' },
    { value: (abstracted/annualMax) * 100 > 100 ? 0 : 100 - ((abstracted/annualMax) * 100), color: '#95C6DD' }
  ];  //values for pie chart
  const riverFlow = 40 // river flow value
  const restriction = 10 //river flow at restriction
 



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
        <Drawer.Screen name="HOME">
          {props => <HomeScreen {...props} take={take} settake={settake} abstracted={abstracted} 
              annualMax={annualMax} data={data} riverFlow={riverFlow} restriction={restriction} 
              timePeriod={dataCollected} />}
        </Drawer.Screen>

        <Drawer.Screen name="CONSENT">
          {props => <ConsentPage {...props} compliance={compliance} setcompliance={setcompliance} 
          take={take} settake={settake} flowsite={flowsite} consentExpiration={consentExpiration} 
          annualMax={annualMax} restrictions={restrictions} />}
        </Drawer.Screen>

        <Drawer.Screen name="USAGE">
          {props => <UsagePage {...props} dataCollected={dataCollected} dailyData={dailyDataUsage} 
          dailyMax={dailyMax} annualData={annualDataUsage} annualMax={annualMax} flowMeters={flowMeters} 
          setflowMeters={setflowMeters} />}
        </Drawer.Screen>

        <Drawer.Screen name="RIVER">
          {props => <RiverPage {...props} flowsite={flowsite} oneDayData={oneDayData} 
          sevenDayData={sevenDayData} oneMonthData={oneMonthData} annualData={annualData} />}
        </Drawer.Screen>

        <Drawer.Screen name="FAQ">
          {props => <FAQPage {...props} contacts={contacts} faq={faq} />}
        </Drawer.Screen>

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
