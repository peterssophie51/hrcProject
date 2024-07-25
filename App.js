import './gesture-handler'; //always has to be at the top
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'

function HomeScreen( {navagation}) {
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

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
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
});
