import React, { useState } from "react";
import { RadioGroup } from "react-native-radio-buttons-group";

export function TimeRadios() {
    const [selectedTime, setselectedTime] =  useState('1')

    return(
        <RadioGroup 
            onPress={setselectedTime}
            selectedId={selectedTime}
            radioButtons={[
                {
                    id:'1', 
                    label:'7 days', 
                    value:'7 days'
                }, 
                {
                    id:'2', 
                    label:'1 week', 
                    value:'1 week'
                },
                { 
                    id:'3',
                    label:'1 month',
                    value:'1 month'
                },
                {
                    id:'4',
                    label:'annual',
                    value:'annual'
                }
            ]}

        />
    )
}