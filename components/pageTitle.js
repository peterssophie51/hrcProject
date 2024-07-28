import { Text } from 'react-native';

export function PageTitle(props) {
    return (
        <Text style={{ textAlign:'center', fontSize:40, fontWeight: 'bold', marginTop: '3%', fontFamily: 'Arial'}}>{props.title}</Text>
    )
}