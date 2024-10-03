import React from "react";
import { View } from "react-native";
import { AlertCard } from "./singleAlertCard";
import { TextinputAlertCard } from "./textinputAlertCard";
import { StyleSheet, Dimensions} from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";

export function AlertsContent(props) {

    const m3s = () => {
        return (
            <View style={styles.unitsContainer}>
                  <CalibriBoldText title='M' style={styles.units} />
                  <CalibriBoldText title='3' style={styles.superscript} />
                  <CalibriBoldText title='/S' style={styles.units} />
            </View>
        )
    }
    const m3 = () => {
        return (
            <View style={styles.unitsContainer}>
                  <CalibriBoldText title='M' style={styles.units} />
                  <CalibriBoldText title='3' style={styles.superscript} />
            </View>
        )
    }
    const percentage = () => {
        return (
            <View style={styles.unitsContainer}>
                  <CalibriBoldText title='%' style={styles.units} />
            </View>
        )
    }

    return(
        <View>
            <AlertCard title='Compliance'/>
            <AlertCard title='Complied' />
            <TextinputAlertCard title='River Flow' Component={m3s}/>
            {
                props.flowmeters.map((item, index) => {
                    return (
                        <TextinputAlertCard 
                            key={index}
                            title={item.nickname + ': ' + item.name} 
                            Component={m3}/>
                    )
                })
            }
            <TextinputAlertCard title='Total Usage' Component={m3}/>
            <TextinputAlertCard title='Daily % Usage' Component={percentage}/>
            <TextinputAlertCard title='Annual % Usage' Component={percentage}/>
        </View>
    )
}

const styles = StyleSheet.create({
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
})