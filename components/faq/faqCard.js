import React from "react";
import { View, StyleSheet, Dimensions, Image} from "react-native";
import { List } from "react-native-paper";
import { useState } from "react";
//import components
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";

//individual component for faq card with answer
export function FAQCard(props) {
    const [expanded, setexpanded] = useState(false) //manage whether card expanded or not
    const handlePress = () => ( //handle press of arrow (expand and unexpand)
        setexpanded(!expanded)
    )
    return (
        <List.Accordion 
            expanded={expanded} 
            onPress={handlePress}
            style={[styles.questionContainer, 
                expanded ? {borderBottomLeftRadius: 0, borderBottomRightRadius: 0} : 
                    {borderBottomLeftRadius:20, borderBottomRightRadius:20}]} //manage whether bottom radius rounded (not expanded) or not (expanded)
            left={() => //render question in header of accordion
                <View style={{width:Dimensions.get('window').width * 0.7, alignContent:'center'}}>
                    <CalibriBoldText title={props.question} style={styles.question}/>
                </View>}
            right={() => ( //render arrows (depending on state of expanded) that can be used to manage expanded state of card
                <View style={{flex:1, justifyContent: 'center'}}>
                    <Image
                    source={expanded ? require('../../images/dropUpBlack.png') : require('../../images/dropDownBlack.png')}
                    style={styles.arrow}
                    />
                </View>
              )}>
            <List.Item //render answer to faq question
                left={() => <CalibriText title={props.answer} style={styles.answer}/>} 
                style={styles.answerContainer}>
            </List.Item>
        </List.Accordion>
    )
}


const styles = StyleSheet.create({
    questionContainer: { //style container of question in top bar of accordion list
        backgroundColor: '#eeeeee',
        width: Dimensions.get('window').width * 0.9,
        marginLeft: Dimensions.get('window').width * 0.05,
        marginTop: Dimensions.get('window').height * 0.02,
        borderTopRightRadius: 20, borderTopLeftRadius:20,
    }, 
    answerContainer: { //style contaienr of answer in expanded accordion list
        backgroundColor: '#eeeeee',
        width: Dimensions.get('window').width * 0.9,
        marginLeft: Dimensions.get('window').width * 0.05,
        borderBottomLeftRadius: 20, borderBottomRightRadius:20
    },
    arrow: { //style arrow image shown to manage expanded state of accordion list
        width: Dimensions.get('window').width * 0.063,
        height: Dimensions.get('window').width * 0.04,
    },
    question: { //style question text in card
        fontSize: 20,
        marginLeft: Dimensions.get('window').width * 0.05
    },
    answer: { //style answer text in card
        fontSize: 17,
        marginLeft: Dimensions.get('window').width * 0.05,
        marginTop: Dimensions.get('window').height * -0.013,
    }
})