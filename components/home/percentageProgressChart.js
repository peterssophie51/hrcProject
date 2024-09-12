import { PieChart } from "react-native-gifted-charts";
import { Dimensions, View, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import * as Font from 'expo-font';
//importing components
import { CalibriText } from "../fonts/calibriFont";

//progress chart in the middle of the home page
export function ProgressChart(props) {
  //function to round a number to a certain amount of dp (as entered)
  function roundNumber(num, roundTo) {
    return Number.isInteger(num) ? num : num.toFixed(roundTo);
  }

  const percentage = (props.abstracted / props.max) * 100; //percentage use
  
  
  const screenWidth = Dimensions.get('window').width; //screen width of page

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

  //do not load content if font does not load
  if (!fontLoaded) {
    return null;
  }

  return (
    //container of pie chart
    <View style={{ marginTop: Dimensions.get('window').height * 0.12, marginLeft: screenWidth * 0.1 }}>
      <PieChart
        donut
        radius={screenWidth * 0.40}
        innerRadius={screenWidth * 0.3}
        data={props.data}
        centerLabelComponent={() => { //component to render text in the middle of the progress chart
          return (
            <View style={{ marginTop: percentage > 100 ? -25 : -35 }}>
              {/*percentage text in middle of donut*/}
              <Text style={[styles.headerText, { fontSize: percentage > 100 ? 80 : 90 }]}>
                {roundNumber(percentage, 1)}
                {/*units*/}
                <Text style={[styles.headerText, { fontSize: percentage > 100 ? 50 : 60 }]}>%</Text>
              </Text>
              {/*container of values in pie chart*/}
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }}>
                {/*amount abstracted rounded to 2 dp*/}
                <Text style={styles.subText}>{roundNumber(props.abstracted, 2)}</Text>
                {/*units*/}
                <Text style={styles.units}>M</Text>
                <Text style={styles.superscript}>3 </Text>
                {/*maximum*/}
                <Text style={styles.subText}>of {roundNumber(props.max, 2)}</Text>
                {/*units*/}
                <Text style={styles.units}>M</Text>
                <Text style={styles.superscript}>3 </Text>
                {/*indicates timeframe*/}
                <Text style={styles.subText}>per {props.graphTime}</Text>
              </View>
              {/*show when data was recorded*/}
              <CalibriText title={'Last Recorded at 20:00 (NZST)\nJune 14th 2024'} style={styles.subText} />
            </View>
          );
        }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  headerText: { //style percentage text
    textAlign: 'center',
    fontFamily: 'CalibriBold'
  },
  subText: { //style usage text
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 18,
    fontFamily: 'Calibri'
  },
  superscript: { //style superscript text in units
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 10,
    fontFamily: 'Calibri'
  },
  units: { //style units text
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Calibri'
  }
});
