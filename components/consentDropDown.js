import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

export function ConsentDropdownHeader() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Farm Water Consent');
  const [items, setItems] = useState([
    {label: 'Farm Water Consent', value: 'Farm Water Consent'},
    {label: 'Crops Water Consent', value: 'Crops Water Consent'},
    {label: 'Animals Water Consent', value: 'Animals Water Consent'}
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      listItemContainerStyle={{}}
      style={{}}
      labelStyle={{}}

    />
  );
}


