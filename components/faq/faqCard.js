import React from "react";
import { View, StyleSheet, Text, Dimensions, Image} from "react-native";
import { List } from "react-native-paper";
import { useState } from "react";
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";

export function FAQCard(props) {
    const [expanded, setexpanded] = useState(false)
    const handlePress = () => (
        setexpanded(!expanded)
    )
    return(
        <List.Accordion 
            expanded={expanded}
            onPress={handlePress}
            style={[styles.questionContainer, 
                expanded ? {borderBottomLeftRadius: 0, borderBottomRightRadius: 0} : 
                    {borderBottomLeftRadius:20, borderBottomRightRadius:20}]}
            left={() => <View style={{width:Dimensions.get('window').width * 0.7, alignContent:'center'}}><CalibriBoldText title={props.question} style={styles.question}/></View>}
            right={() => (
                    <Image
                    source={expanded ? require('../../images/dropUpBlack.png') : require('../../images/dropDownBlack.png')}
                    style={styles.arrow}
                    />
              )}>
            <List.Item 
                left={() => <CalibriText title={props.answer} style={styles.answer}/>} 
                style={styles.answerContainer}>
            </List.Item>
        </List.Accordion>
    )
}


const styles = StyleSheet.create({
    questionContainer: {
        backgroundColor: '#eeeeee',
        width: Dimensions.get('window').width * 0.9,
        marginLeft: Dimensions.get('window').width * 0.05,
        marginTop: Dimensions.get('window').height * 0.02,
        borderTopRightRadius: 20, borderTopLeftRadius:20,
    }, 
    answerContainer: {
        backgroundColor: '#eeeeee',
        width: Dimensions.get('window').width * 0.9,
        marginLeft: Dimensions.get('window').width * 0.05,
        borderBottomLeftRadius: 20, borderBottomRightRadius:20
    },
    arrow: {
        width: Dimensions.get('window').width * 0.063,
        height: Dimensions.get('window').width * 0.04,
    },
    question: {
        fontSize: 20,
        marginLeft: Dimensions.get('window').width * 0.05
    },
    answer: {
        fontSize: 17,
        marginLeft: Dimensions.get('window').width * 0.05,
        marginTop: Dimensions.get('window').height * -0.013,
    }
})