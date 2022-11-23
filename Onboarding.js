/*import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES } from './Theme';
import { useState } from 'react';
import { View, Text, Image } from 'react-native';


const onboardingData = [
    {
    id:1,
    title:'Welcome to the Maringo App Pre-Launch',
    description:'Get ready to step into the next generation of social media',
    image: require('./assets/Confetti.png')
  },
  {
    id:2,
    title:'Reimagine the way you think and use social media',
    description:'Maringo aims to transforms the conventions, by combining innovative web3 technologies with the social media features we know and love',
    image: require('./assets/Rocket.png')
  },
  {
    id:3,
    title:'A social media platform that truly rewards its users',
    description:'As the core of our existence, we want to build a platform to reward our users. Where you not only engage and socialise but can also directly monetise your profile to earn passively.',
    image: require('./assets/Coin.png')
  },
  
]




 
  
  function Onboarding() {
    
const [showHomePage, setShowHomePage]= useState(false)
const buttonLabel = (label) => {
  return(
    <View style={{
      padding:17
    }}>
      <Text style={{
        color:COLORS.title,
        fontWeight:'600',
        fontSize:SIZES.h2
      }}>
        {label}
      </Text>
    </View>
  )
}
const RenderItem = ({item})=>{
  return(
    <View style={{
      flex:1,
      alignItems:'center',
      padding:15,
      paddingTop:100,
    }}>
      <Image
      source={item.image}
      style={{
        width:SIZES.width - 80,
        height:400,
      }}
      resizeMode="contain"
      />

      <Text style={{
        fontWeight:'bold',
        color:COLORS.title,
        fontSize:SIZES.h3
      }}>
        {item.title}
      </Text>
      <Text style={{
        paddingTop:3,
        color:COLORS.title,
        fontSize:SIZES.h3
      }}>
        {item.description}
      </Text>
    </View>
    )
  }

if(!showHomePage){
    return(
      <AppIntroSlider
        data={onboardingData}
        renderItem={RenderItem}
  
        activeDotStyle={{
          backgroundColor:COLORS.primary,
          width:30,
        }}
        // showSkipButton
        // renderNextButton={()=> buttonLabel('Next')}
        // renderSkipButton={()=> buttonLabel('Skip')}
        // renderDoneButton={()=>buttonLabel('Done')}
        // onDone={()=>{
        //   setShowHomePage(true);
        // }}
        />
    )
  }
    return (
        <View 
        style={{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
        }}>
          <Text>HOME PAGE</Text>
      </View>
    );
    
  }
  
  export default Onboarding;*/

  import React from 'react';
  import AppIntroSlider from 'react-native-app-intro-slider';
  import { 
    StyleSheet,
    View,
    Text,
    Image,
    Button } from 'react-native';

  const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      //image: require('./assets/1.jpg'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      //image: require('./assets/2.jpg'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      //image: require('./assets/3.jpg'),
      backgroundColor: '#22bcb5',
    }
  ];
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 10,
      justifyContent: 'center',
    },
    titleStyle: {
      padding: 10,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
    },
    paragraphStyle: {
      padding: 20,
      textAlign: 'center',
      fontSize: 16,
    },
    introImageStyle: {
      width: 200,
      height: 200,
    },
    introTextStyle: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      paddingVertical: 30,
    },
    introTitleStyle: {
      fontSize: 25,
      color: 'white',
      textAlign: 'center',
      marginBottom: 16,
      fontWeight: 'bold',
    },
  });
   
  export default class App extends React.Component {
    state = {
      showRealApp: false
    }
    _renderItem = ({ item }) => {
      return (
        <View style={styles.slide}>
          <Text style={styles.title}>{item.title}</Text>
           <Text style={styles.text}>{item.text}</Text>
        </View>
      );
    }
    _onDone = () => {
      // User finished the introduction. Show real app through
      // navigation or simply by controlling state
      this.setState({ showRealApp: true });
    }
    render() {
      if (this.state.showRealApp) {
        return <App />;
      } else {
        return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
      }
    }
  }

   