import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
//importing components
import { CalibriBoldText } from "../fonts/calibriBoldFont";
import { CalibriText } from "../fonts/calibriFont";

//rievr flow card to indicate river flows
export function RiverFlow(props) {
    const riverFlow = 1.222 // river flow value
    const restriction = 39.2 //river flow at restriction
    const timePeriod = '20:00 (NZST) June 14th 2024' //time period data collected
    const restrictionText = "RESTRICTION AT " + roundNumber(restriction, 3) //when data is restricted
    const timePeriodText = 'Last Recorded at ' + timePeriod //when data was last recorded
    
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
            {/*container for river flow and title at the top of the page*/} 
            <View style={styles.topTextContainer}> 
                {/*river flow value*/}
                <CalibriBoldText title={riverFlow} style={styles.flow}/>
                    {/*units for river flow*/}
                    <CalibriBoldText style={styles.units} title='M'/>
                        <CalibriBoldText style={styles.superscript} title='3'/>
                    <CalibriBoldText style={styles.units} title='/S'/>
                {/*container for data title*/}
                <View style={{display:'flex', flexDirection:'column'}}> 
                    {/*title*/}
                    <CalibriBoldText title="CURRENT RIVER" style={styles.title} />
                    <CalibriBoldText title="FLOW" style={styles.title} />
                </View>
            </View>
            {/*container for below information*/}
            <View style={styles.subTextContainer}> 
                {/*what flow restriction is at*/}
                <CalibriText style={styles.subText} title={restrictionText} />
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
        height:Dimensions.get('window').height * 0.15, 
        marginLeft:Dimensions.get('window').width *0.05, 
        marginRight:Dimensions.get('window').width * 0.08,
        borderRadius: 20,
        backgroundColor: '#eeeeee'
    },
    topTextContainer: { //styling the top text in the river flow card
        display:'flex',
        flexDirection:'row',
    },
    flow: { //styling river flow text
        fontSize:45,
        marginLeft: Dimensions.get('window').width * 0.04
    },
    superscript: { //styling superscript text in units
        fontSize:20,
        textAlign:'center',
        lineHeight:50,
        fontFamily:'Calibri'
    },
    units: { //styling units in title text
        fontSize:30,
        lineHeight:70,
        fontFamily:'Calibri'
    },
    title: { //styling title text
        marginTop:Dimensions.get('window').width * 0.011,
        marginBottom: Dimensions.get('window').height * -0.009,
        fontSize:20,
        textAlign:'left',
        marginLeft: Dimensions.get('window').width * 0.1
    },
    subTextContainer:{ //styling subtext container for bottom text
        marginTop: Dimensions.get('window').height * -0.005
    },
    subText: { //styling text in bottom container
        fontSize: 18,
        marginLeft: Dimensions.get('window').width * 0.04,
    }
})