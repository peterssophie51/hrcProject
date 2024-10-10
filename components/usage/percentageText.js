import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import * as Font from 'expo-font';

//component for percentage text in the card
export function PercentageCardText(props) {
    var totalSum = 0; 
    var totalPercentage = 0;
    
    props.flowmeters.forEach(meter => { //totalling the usage 
        totalSum = totalSum + meter[props.usage];
    });
    
    if (props.max !== 0) { //calculating percentage usage based on total usage and maximum
        totalPercentage = (totalSum / props.max) * 100;
    }

    const [fontLoaded, setFontLoaded] = useState(false);
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

    //calculatting the dynamic font size for the percentage number based on how many characters over maximum of 3
    const dynamicFontSize = totalPercentage.toFixed(1).toString().length > 3 ? 50 - (totalPercentage.toFixed(1).toString().length - 3) * 5 : 50;

    return (
        <View>
            {/*proportional view*/}
            {props.type == 'proportional' && (
                <View style={{ alignContent: 'center' }}>
                    {props.flowmeters.map((item, index) => ( //map through flowmeters to show text for each flowmeter
                        <View key={index} style={[styles.container, { marginLeft: Dimensions.get('window').width * 0.14, marginBottom: Dimensions.get('window').height * -0.02 }]}>
                            <View style={[styles.textHorizontal, { justifyContent: 'flex-start' }]}>
                                {/*set number for flowmeter in graph*/}
                                <Text style={{ fontFamily: 'CalibriBold', fontSize: 18 }}>({index + 1}) </Text> 
                                {/*name of flowmeter*/}
                                <Text style={{ fontFamily: 'Calibri', fontSize: 18, lineHeight: 28 }}>{item.nickname}</Text> 
                            </View>
                            <View style={[styles.textHorizontal, { justifyContent: 'flex-start' }]}>
                                {/*usage title for each flowmeter*/}
                                <Text style={{ fontFamily: 'CalibriBold', fontSize: 16 }}>Usage </Text>
                                {/*usage value*/}
                                <Text style={{ fontFamily: 'Calibri', fontSize: 16}}>{item[props.usage]}</Text>
                                {/*units for usage*/}
                                <Text style={{ fontFamily: 'Calibri', lineHeight: 21, fontSize: 13 }}>M</Text>
                                <Text style={{ fontFamily: 'Calibri', lineHeight: 15, fontSize: 10 }}>3</Text>
                            </View>
                        </View>
                    ))}
                </View>
            )}
            {props.type == 'totalled' && ( 
                <View style={styles.container}>
                    <View style={styles.textHorizontal}>
                        {/*rounded percentage (to 1 dp)*/}
                        <Text style={[styles.percentageTitle, { fontFamily: 'CalibriBold', fontSize: dynamicFontSize }]}>
                            {totalPercentage.toFixed(1)}
                            {/*units*/}
                            <Text style={{ fontFamily: 'CalibriBold', fontSize: dynamicFontSize * 0.6 }}>%</Text>
                        </Text>
                    </View>
                    {props.max !== 0 ? ( //display of max is not equal to 0
                        <View>
                            {/*usage text*/}
                            <View style={styles.textHorizontal}>
                                {/*total usage value*/}
                                <Text style={{ fontFamily: 'Calibri', fontSize: 22 }}>{totalSum}</Text>
                                {/*total usage units*/}
                                <Text style={{ fontFamily: 'Calibri', fontSize: 17, lineHeight: 28}}>M</Text>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 13, lineHeight:20}}>3</Text>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 22 }}> of</Text>
                            </View>
                            {/*maximum usage text*/}
                            <View style={styles.textHorizontal}>
                                {/*maximum usage value*/}
                                <Text style={{ fontFamily: 'Calibri', fontSize: 22 }}>{props.max}</Text>
                                {/*maximum usage units*/}
                                <Text style={{ fontFamily: 'Calibri', fontSize: 17, lineHeight: 28 }}>M</Text>
                                <Text style={{ fontSize: 13, fontFamily: 'Calibri', lineHeight: 20 }}>3</Text>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 22 }}> per</Text>
                            </View>
                            {/*time period of data*/}
                            <View style={styles.textHorizontal}>
                                {/*time period value*/}
                                <Text style={{ fontFamily: 'Calibri', fontSize: 22 }}>{props.time}</Text>
                            </View>
                        </View>
                    ) : ( //display if max = 0
                        <View>
                            {/*total usage value*/}
                            <View style={styles.textHorizontal}>
                                {/*total usage value*/}
                                <Text style={{ fontFamily: 'Calibri', fontSize: 22 }}>{totalSum.toFixed(1)}</Text>
                                {/*total usage units*/}
                                <Text style={{ fontFamily: 'Calibri', fontSize: 17 }}>M</Text>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 13 }}>3</Text>
                            </View>
                            {/*total usage text*/}
                            <View style={styles.textHorizontal}>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 22 }}>total usage</Text>
                            </View>
                            <View style={styles.textHorizontal}>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 22 }}> of {props.time}</Text>
                            </View>
                        </View>
                    )}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { //styling container for text
        textAlign: 'center',
        alignContent: 'center',
        marginLeft: Dimensions.get('window').width * 0.1,
        marginTop: Dimensions.get('window').height * 0.04
    },
    textHorizontal: { //styling horizontal text container
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    percentageTitle: { //styling title of percentage text
        fontSize: 50,
        marginBottom: Dimensions.get('window').height * 0.02
    }
});
