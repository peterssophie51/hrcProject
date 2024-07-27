import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Pressable, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerItem , DrawerToggleButton} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export function DrawerCloseCross(props) {
    return (
      <View style={{flex:1, paddingTop:30}}>
        <Pressable onPress={() => props.navigation.closeDrawer()}>
          <Image source={require('../images/crossWhite.png')} style={{width:35, height:35, marginLeft:'85%', marginTop:15}} />
        </Pressable>
        
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
      
    );
  }

