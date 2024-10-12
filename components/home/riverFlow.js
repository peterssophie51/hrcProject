import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
//importing components
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";

//rievr flow card to indicate river flows
export function RiverFlow(props) {
    const restrictionText = props.restriction != null ? "RESTRICTION AT " + roundNumber(props.restriction, 3) : '— ' //when data is restricted
    const timePeriodText = 'Last Recorded at ' + props.timePeriod //when data was last recorded
    
    //function to round the number to a certain amount of decimal points
    function roundNumber(num, roundTo) {
        if (Number.isInteger(num) == false) {  
          return num.toFixed(roundTo)
        } else {
          return num
        }
    } 

    return(
        //container for river flow information
        <View style={styles.container}> 
        <CalibriBoldText title={props.flowsite || 'No associated flowsite'} style={styles.flowsite}/>
            {/*container for river flow and title at the top of the page*/} 
            <View style={styles.topTextContainer}> 
                {/*river flow value*/}
                <CalibriBoldText title={props.riverFlow || '—'} style={styles.flow}/>
                    {/*units for river flow*/}
                    <CalibriBoldText style={styles.units} title='m'/>
                        <CalibriBoldText style={styles.superscript} title='3'/>
                    <CalibriBoldText style={styles.units} title='/s'/>
                {/*container for data title*/}
                <View style={styles.topTextText}> 
                    {/*title*/}
                    <CalibriBoldText title="CURRENT RIVER FLOW" style={styles.title} />
                </View>
            </View>
            <View style={styles.topTextContainer}> 
                {/*river flow value*/}
                <CalibriBoldText title={props.riverFlowAtCompliance || '—'} style={styles.flow}/>
                    {/*units for river flow*/}
                    <CalibriBoldText style={styles.units} title='m'/>
                        <CalibriBoldText style={styles.superscript} title='3'/>
                    <CalibriBoldText style={styles.units} title='/s'/>
                {/*container for data title*/}
                <View style={styles.topTextText}> 
                    {/*title*/}
                    <CalibriBoldText title="RIVER FLOW AT 3AM" style={styles.title} />
                </View>
            </View>
            {/*container for below information*/}
            <View style={styles.subTextContainer}> 
                {/*what flow restriction is at*/}
                <View style={styles.restrictionContainer}>
                    <CalibriText style={styles.subText} title={restrictionText} />
                        <CalibriText style={styles.subTextUnits} title='m'/>
                            <CalibriText style={styles.subTextSuperscript} title='3'/>
                        <CalibriText style={styles.subTextUnits} title='/s'/>
                </View>
                {/*when the data was recorded*/}
                <CalibriText style={styles.subText} title={timePeriodText} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{ //styling the container of the river flow data
        marginTop: Dimensions.get('window').width * 0.05, 
        width: Dimensions.get('window').width * 0.9,
        height:Dimensions.get('window').height * 0.25, 
        marginLeft:Dimensions.get('window').width *0.05, 
        marginRight:Dimensions.get('window').width * 0.08,
        borderRadius: 20,
        backgroundColor: '#eeeeee',
        display: 'flex',
        justifyContent: 'center'
    },
    topTextContainer: { //styling the top text in the river flow card
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        height: Dimensions.get('window').height * 0.055
    },
    flow: { //styling river flow text
        fontSize:35,
        marginLeft: Dimensions.get('window').width * 0.04
    },
    superscript: { //styling superscript text in units
        fontSize:16,
        textAlign:'center',
        lineHeight:50,
        fontFamily:'Calibri'
    },
    units: { //styling units in title text
        fontSize:22,
        lineHeight:55,
        fontFamily:'Calibri'
    },
    title: { //styling title text
        marginTop:Dimensions.get('window').width * 0.011,
        marginBottom: Dimensions.get('window').height * -0.009,
        fontSize:17,
        textAlign:'left',
    },
    subTextContainer:{ //styling subtext container for bottom text
        marginTop: Dimensions.get('window').height * 0.01
    },
    subText: { //styling text in bottom container
        fontSize: 18,
        marginLeft: Dimensions.get('window').width * 0.04,
    },
    subTextUnits: {
        fontSize: 15,
        lineHeight: 23
    }, 
    subTextSuperscript: {
        fontSize: 12,
        lineHeight:18
    },
    restrictionContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    topTextText: { 
        display:'flex', 
        flexDirection:'column', 
        position: 'absolute',
        marginLeft: Dimensions.get('window').width * 0.46,
    },
    flowsite: { 
        fontSize: 23, 
        textAlign: 'center',
       
        marginBottom: Dimensions.get('window').height * 0.01
    }
})