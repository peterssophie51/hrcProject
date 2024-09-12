import { View, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
//import components
import { CalibriBoldText } from '../components/fonts/calibriBoldFont.js';
import { ContactCard } from '../components/faq/contactCard.js';
import { FAQCard } from '../components/faq/faqCard.js';

//component for the faq page
export function FAQPage ({ navagation, props }) {
  const route = useRoute()
  const { contacts, faq } = route.params;

    return (
      <View style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height * 2, backgroundColor:'white', flex:1}}>
        {/*page title*/}
        <CalibriBoldText style={styles.title} title="FAQ" />
        {/*making page scrollable*/}
        <ScrollView>
          {/*subheading for contacts info*/}
          <CalibriBoldText style={styles.subtitle} title="Contacts"/>
          {contacts.map((item, index) => { //map through list of contacts to render a card for each list item
            return (
              <ContactCard key={item.key} title={item.name} method={item.method} link={item.link}/>
            )
          })
          }
          {/*subheading for faq info*/}
          <CalibriBoldText style={styles.subtitle} title="FAQ"/>
            {faq.map((item, index) => { //map through lsit of faq to render a card for each list item
              return(
                <FAQCard key={item.key} question={item.question} answer={item.answer}/>
              )
            })}
          {/*horizons logo at the bottom of the page*/}
          <Image source={require('../images/horizonsFlowTransperant.png')} style={styles.image}/>
        </ScrollView>
      </View>
    )
  }

  const styles = StyleSheet.create({
    title: { //style page title
      textAlign:'center', 
      fontSize:40, 
      marginTop: Dimensions.get('window').height * 0.12,
    },
    container: { //style page container
      backgroundColor: '#eeeeee',
      borderRadius: 20,
      width: Dimensions.get('window').width * 0.9,
      height: Dimensions.get('window').height * 0.42,
      marginLeft: Dimensions.get('window').width * 0.05,
      marginTop: Dimensions.get('window').width * 0.05
    },
    subtitle: { //style subheadings in page
      textAlign: 'center',
      fontSize: 30,
      color: '#72BF44',
      marginTop: Dimensions.get('window').height * 0.03
    },
    image: { //style bottom horizons image
      marginTop: Dimensions.get('window').width * 0.01, 
      marginLeft: Dimensions.get('window').width * 0.12, 
      width: Dimensions.get('window').width * 0.75,
      height: Dimensions.get('window').width * 0.25,
  }
  })