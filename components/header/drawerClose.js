import { View, Image, Pressable } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export function DrawerCloseCross(props) {
    return (
      //drawer open section
      <View style={{flex:1, paddingTop:30}}>
        <Pressable onPress={() => props.navigation.closeDrawer()}>
          <Image source={require('../../images/crossWhite.png')} style={{width:35, height:35, marginLeft:'85%', marginTop:15}} />
        </Pressable>
        
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
      
    );
  }

