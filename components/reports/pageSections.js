import { View, Text, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import * as Font from 'expo-font'

export function PageSections(props) {
    const [expanded, setExpanded] = useState(false); // useState instead of React.useState
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

    const handlePress = () => {
        setExpanded(!expanded);
    }
    return (
        <List.Accordion
            style={styles.accordion}
            titleStyle={[styles.accordionStyle, {fontFamily: 'CalibriBold'}]}
            title={props.title}
            expanded={expanded}
            onPress={handlePress}
            right={() => ( //image to expand/unexpand depending on whether expanded or not
                <Image
                  source={expanded 
                    //show drop up image if accordion dropped down
                    ? require('../../images/dropUpWhite.png')  
                    //show drop down image if accordion dropped up
                    : require('../../images/dropDownWhite.png') 
                  }
                  style={{ height: 15, width: 25 }}
                />
              )}
            >
                
            <List.Item right={props.content} style={[styles.item, {fontFamily: 'Calibri'}]}/>
        </List.Accordion>
    );
}

const styles = StyleSheet.create({
    accordion: {
        backgroundColor: '#243746',
        color: 'white',
        marginTop: Dimensions.get('window').width * 0.04, 
        width: Dimensions.get('window').width * 0.9,
        marginLeft:Dimensions.get('window').width *0.05, 
        borderRadius: 20
    },
    accordionStyle: {
        color: 'white',
        fontSize: 23
    },
    item: {
        width: Dimensions.get('window').width * 0.9,
    }
})