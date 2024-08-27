import { View, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { CalibriBoldText } from '../components/fonts/calibriBoldFont.js';
import { ContactCard } from '../components/faq/contactCard.js';
import { FAQCard } from '../components/faq/faqCard.js';

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
  ]
  
  const faq = [
    {   
      key: 0, 
      question:'How do I find my Consent ATH?', 
      answer:"You should already have your consent ATH when applyig for a consent, if you don't have this infrormation, please contact us at Horizons!"
    },
    {
      key: 1,
      question:'What is my consent flowsite?',
      answer:'This is the section of the river that is linked to your abstraction. For more information, you can visit out website or contact us at Horizons!'
    }
  
  ]

    return (
      <View style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height * 2, backgroundColor:'white', flex:1}}>
        <CalibriBoldText style={styles.title} title="FAQ" />
        <ScrollView>
          <CalibriBoldText style={styles.subtitle} title="Contacts"/>
          {contacts.map((item, index) => {
            return (
              <ContactCard key={item.key} title={item.name} method={item.method} link={item.link}/>
            )
          })
          }
          <CalibriBoldText style={styles.subtitle} title="FAQ"/>
            {faq.map((item, index) => {
              return(
                <FAQCard key={item.key} question={item.question} answer={item.answer}/>
              )
            })}
          <Image source={require('../images/horizonsFlowTransperant.png')} style={styles.image}/>
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
    },
    image: {
      marginTop: Dimensions.get('window').width * 0.01, 
      marginLeft: Dimensions.get('window').width * 0.12, 
      width: Dimensions.get('window').width * 0.75,
      height: Dimensions.get('window').width * 0.25,
  }
  })