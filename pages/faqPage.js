import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { CalibriBoldText } from '../components/fonts/calibriBoldFont.js';
import { ContactCard } from '../components/faq/contactCard.js';
import { FAQCard } from '../components/faq/faqCard.js';

export function FAQPage ({ navagation }) {
  const contacts = ['Horizons website', 'Horizons phone number', 'Horizons fax', 'Horizons email']
    return (
      <View style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height * 2, backgroundColor:'white', flex:1}}>
        <CalibriBoldText style={styles.title} title="FAQ" />
        <ScrollView>
          <CalibriBoldText style={styles.subtitle} title="Contacts"/>
          {contacts.map((item, index) => {
            return(
              <ContactCard key={item} title={item}/>
            )
          })
          }
          <CalibriBoldText style={styles.subtitle} title="FAQ"/>
            <FAQCard question='Question asjadasjsahgaajdsasdsaajsasajsasdghasdjg' answer='Answer'/>
        </ScrollView>
      </View>
    )
  }

  const styles = StyleSheet.create({
    title: {
      textAlign:'center', 
      fontSize:40, 
      marginTop: Dimensions.get('window').height * 0.12,
    },
    container: {
      backgroundColor: '#eeeeee',
      borderRadius: 20,
      width: Dimensions.get('window').width * 0.9,
      height: Dimensions.get('window').height * 0.42,
      marginLeft: Dimensions.get('window').width * 0.05,
      marginTop: Dimensions.get('window').width * 0.05
    },
    subtitle: {
      textAlign: 'center',
      fontSize: 30,
      color: '#72BF44',
      marginTop: Dimensions.get('window').height * 0.03
    }
  })