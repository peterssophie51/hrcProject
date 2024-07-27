import './gesture-handler'; //always has to be at the top
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Pressable, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerItem , DrawerToggleButton} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


function HomeScreen( {navagation, navigation}) {
  return (
    <View>
      <Text></Text>
    </View>
  )
}

function ConsentPage ({ navagation }) {
  return (
    <View>
      <Text>Consents</Text>
    </View>
  )
}

function UsagePage ({ navagation }) {
  return (
    <View>
      <Text>Usage</Text>
    </View>
  )
}

function RiverPage ({ navagation }) {
  return (
    <View>
      <Text>River</Text>
    </View>
  )
}

function FAQPage ({navagation}) {
  return (
    <View>
      <Text>FAQ</Text>
    </View>
  )
}

function DrawerCloseCross(props) {
  return (
    <View style={{flex:1, paddingTop:30}}>
      <Pressable onPress={() => props.navigation.closeDrawer()}>
        <Image source={require('./images/crossWhite.png')} style={{width:40, height:40, marginLeft:'85%', marginTop:15}} />
      </Pressable>
      
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
    
  );
}

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={({navigation}) => ({
          headerLeft: (props) => (
            <Pressable onPress={() => navigation.toggleDrawer()}>
              <Image source={require('./images/crossWhite.png')} style={{width:40, height:40}} />
            </Pressable>
          ),
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
            fontSize: 40,
            marginLeft:'10%',
            textAlign: 'center',
            marginTop: '10%',
            fontWeight: "bold"
          },

        })}
        drawerContent={(props) => <DrawerCloseCross{...props}/>}
        options={{gestureEnabled: 'false'}}
      >
        <Drawer.Screen name="HOME" component={HomeScreen} />
        <Drawer.Screen name="CONSENT" component={ConsentPage}/>
        <Drawer.Screen name="USAGE" component={UsagePage}/>
        <Drawer.Screen name="RIVER" component={RiverPage}/>
        <Drawer.Screen name="FAQ" component={FAQPage}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
