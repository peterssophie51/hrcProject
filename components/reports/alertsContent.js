import React from "react";
import { View } from "react-native";
import { AlertCard } from "./singleAlertCard";
import { TextinputAlertCard } from "./textInputAlertCard";

export function AlertsContent(props) {
    return(
        <View>
            <AlertCard />
            <TextinputAlertCard />
        </View>
    )
}