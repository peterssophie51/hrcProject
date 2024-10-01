import { View, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
//import components
import { CalibriBoldText } from '../components/fonts/calibriBoldFont.js';
import { ContactCard } from '../components/faq/contactCard.js';
import { FAQCard } from '../components/faq/faqCard.js';

//component for the faq page
export function FAQPage ({ route, navagation, props, contacts, faq }) {

    return (
      <View style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height * 2, backgroundColor:'white', flex:1}}>
        {/*page title*/}
        <CalibriBoldText style={styles.title} title="FAQ" />
        {/*making page scrollable*/}
        <ScrollView>
          {/*subheading for contacts info*/}
          {/*subheading for faq info*/}
            {faq.map((item, index) => { //map through lsit of faq to render a card for each list item
              return(
                <FAQCard key={item.key} question={item.question} answer={item.answer}/>
              )
            })
          }
           <CalibriBoldText style={styles.subtitle} title="Contacts"/>
          {contacts.map((item, index) => { //map through list of contacts to render a card for each list item
            return (
              <ContactCard key={item.key} title={item.name} method={item.method} link={item.link}/>
            )
          })
          }

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