import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { DatatypeItem } from "./datatypeItem";

export function DatatypeSelector() {
    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
            <List.Accordion
                title="Crop Irrigator 1"
                description="Flow Meter 1"
                expanded={expanded}
                onPress={handlePress}
                style={{borderTopLeftRadius:20, borderTopRightRadius:20, backgroundColor:'#eeeeee'}}>
                <DatatypeItem title='Crop Irrigator 1' description='Flow Meter 1'/>
                <DatatypeItem title="Crop Irrigator 2" description="Flow Meter 2"/>
                <List.Item title="Total Water Usage" 
                    style={{
                        borderBottomLeftRadius:20, 
                        borderBottomRightRadius:20, 
                        backgroundColor:'#eeeeee'}}/>
            </List.Accordion>
    );
}
