import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import * as Font from 'expo-font';

export function PercentageCardText(props) {
    var totalSum = 0;
    var totalPercentage = 0;
    
    props.flowMeters.forEach(meter => {
        totalSum = totalSum + meter.usage;
    });
    
    if (props.max !== 0) {
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

    const dynamicFontSize = totalPercentage.toFixed(1).toString().length > 3 ? 50 - (totalPercentage.toFixed(1).toString().length - 3) * 5 : 50;

    return (
        <View>
            {props.type == 'proportional' && (
                <View style={{ alignContent: 'center' }}>
                    {props.flowMeters.map((item, index) => (
                        <View key={item.key} style={[styles.container, { marginLeft: Dimensions.get('window').width * 0.14, marginBottom: Dimensions.get('window').height * -0.02 }]}>
                            <View style={[styles.textHorizontal, { justifyContent: 'flex-start' }]}>
                                <Text style={{ fontFamily: 'CalibriBold', fontSize: 18 }}>({index + 1}) </Text>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 18, lineHeight: 28 }}>{item.key}</Text>
                            </View>
                            <View style={[styles.textHorizontal, { justifyContent: 'flex-start' }]}>
                                <Text style={{ fontFamily: 'CalibriBold', fontSize: 16 }}>Usage </Text>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 16, lineHeight: 22 }}>{item.usage.toFixed(1)}</Text>
                                <Text style={{ fontFamily: 'Calibri', lineHeight: 24, fontSize: 13 }}>M</Text>
                                <Text style={{ fontFamily: 'Calibri', lineHeight: 18, fontSize: 10 }}>3</Text>
                                <Text style={{ fontFamily: 'Calibri', lineHeight: 24, fontSize: 13 }}>/S</Text>
                            </View>
                        </View>
                    ))}
                </View>
            )}
            {props.type == 'totalled' && (
                <View style={styles.container}>
                    <View style={styles.textHorizontal}>
                        <Text style={[styles.percentageTitle, { fontFamily: 'CalibriBold', fontSize: dynamicFontSize }]}>
                            {totalPercentage.toFixed(1)}
                            <Text style={{ fontFamily: 'CalibriBold', fontSize: dynamicFontSize * 0.6 }}>%</Text>
                        </Text>
                    </View>
                    {props.max !== 0 ? (
                        <View>
                            <View style={styles.textHorizontal}>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 22 }}>{totalSum}</Text>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 17, lineHeight: 28 }}>M</Text>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 13 }}>3</Text>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 17, lineHeight: 28 }}>/S</Text>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 22 }}> of</Text>
                            </View>
                            <View style={styles.textHorizontal}>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 22 }}>{props.max}</Text>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 17, lineHeight: 28 }}>M</Text>
                                <Text style={{ fontSize: 13, fontFamily: 'Calibri' }}>3</Text>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 17, lineHeight: 28 }}>/S</Text>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 22 }}> per</Text>
                            </View>
                            <View style={styles.textHorizontal}>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 22 }}>{props.time}</Text>
                            </View>
                        </View>
                    ) : (
                        <View>
                            <View style={styles.textHorizontal}>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 22 }}>{totalSum.toFixed(1)}</Text>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 17, lineHeight: 28 }}>M</Text>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 13 }}>3</Text>
                                <Text style={{ fontFamily: 'Calibri', fontSize: 17, lineHeight: 28 }}>/S</Text>
                            </View>
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
    container: {
        textAlign: 'center',
        alignContent: 'center',
        marginLeft: Dimensions.get('window').width * 0.1,
        marginTop: Dimensions.get('window').height * 0.04
    },
    textHorizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'baseline'
    },
    percentageTitle: {
        fontSize: 50,
        marginBottom: Dimensions.get('window').height * 0.02
    }
});
