import React from "react";
import { View } from "react-native";
import { NotificationCard } from "./notifiationCard";
import { TextinputNotificationCard } from "./notificationInputCard";
import { StyleSheet, Dimensions} from "react-native";
import { CalibriBoldText } from "../fonts/calibriBoldFont";

export function NotificationContent(props) {

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
            <NotificationCard title='Compliance'/>
            <NotificationCard title='Complied' />
            <TextinputNotificationCard title='River Flow' Component={m3s} defaultValue={props.flowAtRestriction == null ? '' : props.flowAtRestriction}/>
            {
                props.flowmeters.map((item, index) => {
                    return (
                        <TextinputNotificationCard 
                            key={index}
                            title={item.nickname} 
                            Component={m3}
                            defaultValue={props.dailyMax}
                        />
                    )
                })
            }
            <TextinputNotificationCard title='Total Usage' Component={m3} defaultValue={props.dailyMax}/>
            <TextinputNotificationCard title='Daily % Usage' Component={percentage} defaultValue={100}/>
            <TextinputNotificationCard title='Annual % Usage' Component={percentage} defaultValue={100}/>
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