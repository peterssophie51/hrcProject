import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { CalibriBoldText } from '../components/fonts/calibriBoldFont';
import { CalibriText } from '../components/fonts/calibriFont.js'
import { PercentagePill } from '../components/usage/percentageCard.js';

export function UsagePage ({ navagation }) {
  const dataCollected = '20:00 (NZST) June 14th 2024'
  const dailyData= [{ key: 'Flow One', usage: 60}, {key:'Flow Two', usage: 40}, {key:'Flow Three', usage: 55}]
  const type = 'totalled'
  const dailyMax = 200
  const annualData = [{key: 'Flow One', usage: 100}, {key: 'Flow Two', usage: 100}, {key:'Flow Three', usage: 20}]
  const annualMax = 700

    return (
      <View style={styles.page}>
        <CalibriBoldText  style={styles.title} title="Usage" />
        <CalibriText style={styles.lastRecorded} title={'Last Recorded ' + dataCollected} time='annual'/>
        <View style={{display: 'flex', flexDirection:'row'}}>
        <PercentagePill data={annualData} type={type} max={annualMax} time='annual'/>
        <PercentagePill data={dailyData} type={type} max={dailyMax} time='day'/>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
  page: {
    width:Dimensions.get('window').width, 
    height:Dimensions.get('window').height * 2, 
    backgroundColor:'white'
  },
  title: {
    textAlign:'center', 
    fontSize:40, 
    marginTop: Dimensions.get('window').height * 0.12
  },
  lastRecorded: {
    textAlign: 'center',
    fontSize: 17,
    marginTop: Dimensions.get('window').height * 0.02
  }
})