import { View, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
//import components
import { CalibriBoldText } from '../components/fonts/calibriBoldFont.js';
import { ContactCard } from '../components/faq/contactCard.js';
import { FAQCard } from '../components/faq/faqCard.js';

//component for the faq page
export function FAQPage ({ navagation }) {
  const contacts = [
    {
      key: 0,
      name: 'Horizons website',
      method: 'https',
      link: 'www.horizons.govt.nz//'
    },
    {
      key: 1,
      name: 'Horizons phone number',
      method: 'sms',
      link:'+64 6 9522 800'
    },
    {
      key: 2,
      name: 'Horizons fax',
      //method:
      //link:
    },
    {
      key: 3,
      name: 'Horizons email',
      method:'mailto',
      link: 'help@horizons.govt.nz'
    }
  ] //all contacts to be rendered in contacts card
  const faq = [
    {   
      key: 0, 
      question:'This is a long question in the FAQ', 
      answer:"You should already have your consent ATH when applyig for a consent, if you don't have this infrormation, please contact us at Horizons!"
    },
    {
      key: 1,
      question:'What is my consent flowsite?',
      answer:'This is the section of the river that is linked to your abstraction. For more information, you can visit out website or contact us at Horizons!'
    }
  
  ] //all faq questions and answers to be rendered in faq cards

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