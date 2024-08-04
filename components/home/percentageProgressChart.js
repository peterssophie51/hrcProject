import { PieChart } from "react-native-gifted-charts";
import { Dimensions, View, StyleSheet, Text } from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";
import { useState, useEffect } from "react";
import * as Font from 'expo-font';
        
export function ProgressChart() {
    //values for pie chart
    const percentage = 8
    const data = [{value: percentage, color:'#00A7CF'}, {value: 100-percentage, color:'#95C6DD'}];
    const screenWidth = Dimensions.get('window').width

    const [fontLoaded, setFontLoaded] = useState(false);

    //function to load in calibri bold and calibri font
  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({ //other actions can be completed simultaneously
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

  //do not load content if font does not load
  if (!fontLoaded) {
    return null; 
  }

    return (
        <View style={{marginTop:'28%', marginLeft:screenWidth * 0.08}}>
            <PieChart 
                donut
                radius={screenWidth * 0.42}
                innerRadius={screenWidth * 0.3} //use to set the width of the progress bar
                data={data}
                centerLabelComponent={() => {
                    return (
                        <View style={{marginTop:-35}}>
                            <Text style={[styles.headerText, {fontSize:90}]}>{percentage}<Text style={[styles.headerText, {fontSize:70}]}>%</Text></Text>
                            <CalibriText title={'106M3 of 2000M3 per day'} style={styles.subText}/>
                            <CalibriText title={'Last Recorded at 20:00 (NZST)\nJune 14th 2024'} style={styles.subText}/>
                        </View>
                    );
                    }}
                
            />
        </View>
    );};


const styles = StyleSheet.create({
    headerText: {
        textAlign:'center',
        fontFamily:'CalibriBold'
    },
    subText: {
        fontSize: 18,
        textAlign:'center'
    }
})