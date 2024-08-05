import { PieChart } from "react-native-gifted-charts";
import { Dimensions, View, StyleSheet, Text } from "react-native";
import { CalibriText } from "../fonts/calibriFont";
import { useState, useEffect } from "react";
import * as Font from 'expo-font';
        
export function ProgressChart(props) {
  function roundNumber(num, roundTo) {
      if (Number.isInteger(num) == false) {
        return num.toFixed(roundTo)
      } else {
        return num
      }
  }

  const abstracted = 33.2 //amount abstracted in time period
  const max = 51.7 //max for time period
  const percentage = ((abstracted/max) * 100) //percentage use
  const data = [{value: percentage, color:'#00A7CF'}, {value: 100-percentage, color:'#95C6DD'}];  //values for pie chart
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
        <View style={{marginTop:'28%', marginLeft:screenWidth * 0.1}}> 
            <PieChart 
                donut
                radius={screenWidth * 0.40}
                innerRadius={screenWidth * 0.3} //use to set the width of the progress bar
                data={data}
                centerLabelComponent={() => { //text inside the progress chart
                    return (
                        <View style={{marginTop:-35}}>
                          
                            <Text style={[styles.headerText, {fontSize:90}]}> {roundNumber(percentage, 1)} 
                              <Text style={[styles.headerText, {fontSize:60}]}>%</Text>
                            </Text>

                            <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'center'}}>
                              <Text style={styles.subText}>{roundNumber(abstracted, 2)}</Text>
                                <Text style={styles.units}>M</Text>
                                  <Text style={styles.superscript}>3 </Text>
                              <Text style={styles.subText}>of {roundNumber(max, 2)}</Text>
                                <Text style={styles.units}>M</Text>
                                  <Text style={styles.superscript}>3 </Text>
                              <Text style={styles.subText}>per {props.graphTime}</Text>
                            </View>



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
        textAlign:'center',
        lineHeight:18,
        fontFamily:'Calibri'
    }, 
    superscript: {
      fontSize:10,
      textAlign:'center',
      lineHeight:10,
      fontFamily:'Calibri'
    },
    units: {
      fontSize:14,
      lineHeight:16,
      fontFamily:'Calibri'
    }
})