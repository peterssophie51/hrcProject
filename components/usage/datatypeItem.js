import React from "react";
import { List } from "react-native-paper";

export function DatatypeItem(props) {
    return(
        <List.Item 
            title={props.title} 
            description={props.description}
            style={{backgroundColor:'#eeeeee'}}/>
    )
}
