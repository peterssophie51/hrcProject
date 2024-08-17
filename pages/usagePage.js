import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { CalibriBoldText } from '../components/fonts/calibriBoldFont';
import { CalibriText } from '../components/fonts/calibriFont.js'
import { PercentagePill } from '../components/usage/percentageCard.js';
import { Switch } from '../components/switch.js';
import { DatatypeSelector } from '../components/usage/datatypeSelector.js';

export function UsagePage ({ navagation }) {
  const dataCollected = '20:00 (NZST) June 14th 2024'
  const dailyData= [{ key: 'Flow One', usage: 60}, {key:'Flow Two', usage: 40}, {key:'Flow Three', usage: 55}]
  const [type, settype] = useState('totalled')
  const dailyMax = 200
  const annualData = [{key: 'Flow One', usage: 100}, {key: 'Flow Two', usage: 100}, {key:'Flow Three', usage: 200}]
  const annualMax = 700

    return (
      <View style={styles.page}>
        <CalibriBoldText  style={styles.title} title="Usage" />
        <CalibriText style={styles.lastRecorded} title={'Last Recorded ' + dataCollected} time='annual'/>
        <ScrollView>
          <View style={{display: 'flex', flexDirection:'row'}}>
            <PercentagePill data={annualData} type={type} max={annualMax} time='annual'/>
            <PercentagePill data={dailyData} type={type} max={dailyMax} time='day'/>
          </View>
          <Switch style={{
            marginTop: Dimensions.get('window').width * 0.05, 
            width:Dimensions.get('window').width * 0.9, 
            marginLeft:Dimensions.get('window').width *0.05, }} options={[
              { label: "Totalled", value: 'totalled', activeColor:'#72BF44'},
              { label: "Proportional", value: 'proportional', activeColor:'#72BF44' },
            ]} action={settype}
          />
          <DatatypeSelector/>
        </ScrollView>
      </View>
    )
  }

const styles = StyleSheet.create({
  page: {
    flex: 1,
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