import React, { useState, useEffect } from "react";
import { Dimensions, View, TextInput, Image } from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { StyleSheet } from "react-native";
import { Switch } from "react-native-switch";
import { List } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Font from 'expo-font';

export function TextinputAlertCard({ Component, title, defaultValue }) {
  const [enabled, setEnabled] = useState(false);
  const toggleSwitch = () => setEnabled(!enabled);
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);
  
  // Move inputValue state outside of useEffect
  const [inputValue, setInputValue] = useState(String(defaultValue));

  // Update inputValue when defaultValue changes
  useEffect(() => {
    setInputValue(String(defaultValue));
  }, [defaultValue]);

  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'CalibriBold': require('../../assets/fonts/calibrib.ttf'),
        'Calibri': require('../../assets/fonts/Calibri.ttf')
      });
      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return null; 
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <List.Accordion
          style={[styles.container, {
            borderBottomLeftRadius: expanded ? 0 : 20,
          }]}
          expanded={expanded}
          right={() => (
            <View style={styles.textcontainer}>
              <CalibriBoldText title={title.toUpperCase()} style={styles.title} />
            </View>
          )}
        >
        </List.Accordion>
        <View style={[styles.switchesContainer, { borderBottomRightRadius: expanded ? 0 : 20 }]}>
          <TouchableOpacity>
            <Switch
              value={enabled}
              onPress={toggleSwitch}
              circleSize={Dimensions.get('window').width * 0.07}
              barHeight={Dimensions.get('window').width * 0.08}
              switchWidthMultiplier={2}
              backgroundActive={'#72BF44'}
              backgroundInactive={'#CCCCCC'}
              circleActiveColor={'#243746'}
              circleInActiveColor={'#243746'}
              renderActiveText={false}
              renderInActiveText={false}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleExpanded}>
            <Image 
              source={expanded ? 
                require('../../images/dropUpSlate.png') 
                : require('../../images/dropDownSlate.png')} 
              style={{ height: 20, width: 32 }} 
            />
          </TouchableOpacity>
        </View>
      </View>
      {
        expanded && (
          <List.Item
            right={() => (
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <TextInput
                  value={inputValue}
                  onChangeText={text => setInputValue(text)}
                  style={styles.input}
                />
                {Component && <Component />}
              </View>
            )}
            style={styles.item}
          />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
  },
  container: {
    backgroundColor: '#EEEEEE',
    width: Dimensions.get('window').width * 0.55,
    marginTop: Dimensions.get('window').width * 0.04,
    marginLeft: 3,
    borderTopLeftRadius: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
  },
  textcontainer: {
    width: Dimensions.get('window').width * 0.5,
  },
  item: {
    backgroundColor: '#EEEEEE',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: Dimensions.get('window').width * 0.9,
    marginLeft: 3,
  },
  switchesContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
    borderTopRightRadius: 20,
    width: Dimensions.get('window').width * 0.35,
    marginTop: Dimensions.get('window').width * 0.04,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  input: {
    height: Dimensions.get('window').height * 0.06,
    width: Dimensions.get('window').width * 0.8,
    backgroundColor: '#CCCCCC',
    borderRadius: 10,
    fontSize: 18,
    fontFamily: 'Calibri',
    color: 'black',
    padding: 10,
  },
  unitsContainer: {
    zIndex: 5,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    marginTop: Dimensions.get('window').height * 0.01,
    marginLeft: Dimensions.get('window').width * 0.65,
  },
  units: {
    fontSize: 20,
  },
  superscript: {
    fontSize: 15,
    lineHeight: 23,
  },
});
