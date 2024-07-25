import './gesture-handler'; //always has to be at the top
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
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

function CustomDrawerContent(props) {
  return (
    <View style={{flex:1, paddingTop:30}}>
      <Pressable onPress={() => props.navigation.closeDrawer()}>
        <Image source={require('./images/crossBlack.png')} style={{width:30, height:30, marginLeft:340, marginTop:15}} />
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
        screenOptions={{
          drawerStyle: {
            width: '100%',
          }
        }}
        drawerContent={(props) => <CustomDrawerContent{...props}/>}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Consent" component={ConsentPage}/>
        <Drawer.Screen name="Usage" component={UsagePage}/>
        <Drawer.Screen name="River" component={RiverPage}/>
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
  },
  buttonH: {
    paddingTop:100
  }
});
