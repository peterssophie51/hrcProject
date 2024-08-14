import React from "react";
import { View,StyleSheet, Dimensions, Text } from "react-native";
import { useState, useEffect } from "react";
import * as Font from 'expo-font'


export function PercentageCardText(props) {
    const type = 'totalled'

    const flowmeters=[
        { 
            key: 'Flow One', 
            usage: 20, 
        }, 
        { 
            key:'Flow Two', 
            usage: 20, 
        }, 
        {
            key:'Flow Three', 
            usage: 20, 
        }]

    const [fontLoaded, setFontLoaded] = useState(false);
    //function to load in calibri bold and calibri font
    useEffect(() => {
        async function loadFont() {
        try {
            await Font.loadAsync({ 
            'CalibriBold': require('../../assets/fonts/calibrib.ttf'),
            'Calibri': require('../../assets/fonts/Calibri.ttf'),
            });
            setFontLoaded(true);
        } catch (error) {
            console.error("Error loading fonts: ", error);
        }
        }

        loadFont();
    }, []);

    return(
        <View>
            {type=='proportional' && (
                <View style={{alignContent: 'center'}}>
                    {flowmeters.map((item, index) => (
                        <View key={item.key} style={[styles.container, {marginLeft: Dimensions.get('window').width * 0.14, marginBottom:Dimensions.get('window').height * -0.02}]}>
                            <View style={[styles.textHorizontal, {justifyContent: 'flex-start'}]}>
                                <Text style={{fontFamily: 'CalibriBold', fontSize: 18}}>({index + 1}) </Text>
                                <Text style={{fontFamily: 'Calibri', fontSize: 18, lineHeight:28}}>{item.key}</Text>
                            </View>
                            <View style={[styles.textHorizontal, {justifyContent:'flex-start'}]}>
                                <Text style={{fontFamily: 'CalibriBold', fontSize: 16}}>Usage </Text>
                                <Text style={{fontFamily: 'Calibri', fontSize: 16, lineHeight: 22}}>{item.usage}</Text>
                                <Text style={{fontFamily: 'Calibri', lineHeight: 24, fontSize:13}}>M</Text>
                                <Text style={{fontFamily: 'Calibri', lineHeight:18, fontSize: 10}}>3</Text>
                                <Text style={{fontFamily: 'Calibri', lineHeight: 24, fontSize: 13}}>/S</Text>
                            </View>
                        </View>
                    ))
                    }
                </View>
            )}
            {type=='totalled' && (
               <View style={styles.container}>
               <View style={styles.textHorizontal}>
                   <Text style={[styles.percentageTitle, {fontFamily:'CalibriBold'}]}>60
                       <Text style={{fontFamily:'CalibriBold', fontSize:30}}>%</Text>
                   </Text>
               </View>
               <View style={styles.textHorizontal}>
                   <Text style={{fontFamily:'Calibri', fontSize: 22}}>60</Text>
                   <Text style={{fontFamily:'Calibri', fontSize: 17, lineHeight: 28}}>M</Text>
                   <Text style={{fontFamily:'Calibri', fontSize: 13}}>3</Text>
                   <Text style={{fontFamily:'Calibri', fontSize: 17, lineHeight: 28}}>/S</Text>
                   <Text style={{fontFamily:'Calibri', fontSize: 22}}> of</Text>
               </View>
               <View style={styles.textHorizontal}>
                   <Text style={{fontFamily:'Calibri', fontSize: 22}}>100</Text>
                   <Text style={{fontFamily:'Calibri', fontSize: 17, lineHeight: 28}}>M</Text>
                   <Text style={{fontSize: 13, fontFamily:'Calibri'}}>3</Text>
                   <Text style={{fontFamily:'Calibri', fontSize: 17, lineHeight: 28}}>/S</Text>
                   <Text style={{fontFamily:'Calibri', fontSize: 22}}> per</Text>
               </View>
               <View style={styles.textHorizontal}>
                   <Text style={{fontFamily:'Calibri', fontSize: 22}}> annual</Text>
               </View>
           </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        alignContent: 'center',
        marginLeft: Dimensions.get('window').width * 0.1,
        marginTop: Dimensions.get('window').height * 0.04
    },
    textHorizontal: {
        display: 'flex', 
        flexDirection:'row',
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    percentageTitle: {
        fontSize: 50,
        marginBottom: Dimensions.get('window').height * 0.02
    }
})