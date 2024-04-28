import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native';

const Mentor = ({navigation}:any) => {

  const handelViews= ()=>{
     navigation.navigate('description')
      }
  const handelViewsConsultation= ()=>{
     navigation.navigate('ChatScreen')
      }
  

  return (
    <View style={{backgroundColor: '#E8E8E8', flex: 1, alignItems: 'center'}}>
    <View style={{flex:1, justifyContent:'space-evenly', alignItems:'center', marginHorizontal:30,flexDirection:'row'}} >
      <Text style={styles.FindMentorText}>Find Mentor</Text>
      <Image 
       source={require('../../assets/icons/mentorLogo.png')}
       tintColor={'#5178C9'}
       />

    </View>
      <View style={styles.inputBoxView}>
        <TextInput
          placeholder="Search here"
          style={{marginHorizontal: 5, flex: 1}}
          placeholderTextColor="black"
        />
        <Image
          source={require('../../assets/icons/searchIcon.png')}
          style={styles.inputLogo}
        />
      </View>
      <MentorCard image={require('../../assets/icons/UserImg.jpg')} toView={handelViews} toConsult={handelViewsConsultation} />
      <MentorCard image={require('../../assets/icons/UserImg.jpg')}  toView={handelViews} toConsult={handelViewsConsultation} />
      <MentorCard image={require('../../assets/icons/UserImg.jpg')}  toView={handelViews} toConsult={handelViewsConsultation} />
    </View>
  );
};

export default Mentor;

const styles = StyleSheet.create({
  FindMentorText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 9,
    marginTop:13,
    marginBottom:10,
    width:'100%'
  },
  inputBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#5178C9',
    borderWidth: 1,
    padding: 2,
    paddingHorizontal:7,
    marginHorizontal:22,
    borderRadius: 6,
    opacity: 0.6,
    backgroundColor: 'white',
  },
  inputLogo: {
    width: 26,
    height: 26,
    marginHorizontal: 5,
    tintColor: 'black',
    opacity: 0.4,
  },
  cardContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 14,
    margin: 19,
    height:200,
    backgroundColor:'#5178C9',
    gap:12,
    alignItems:'flex-start'
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginTop:9
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    gap:6,
  },
  textContent: {
    fontSize: 16,
  },
  textContent1: {
    fontSize: 13,
    opacity:0.6
  },
  textContent2: {
    fontSize: 11,
    opacity:0.6
  },
  buttonContainer: {
    flexDirection: 'row',
    position:'absolute',
    bottom:-42,
    right:-12
  },
  button: {
    backgroundColor: '#E8E8E8',
    borderRadius: 6,
    marginRight: 10,
    borderWidth:1,
    width:172,
    padding:7,
    alignItems:'center',
    justifyContent:'center'
    
  },
  buttonText: {
    color: '#5178C9',
    fontSize: 14,
    fontWeight:'bold'
}})

 export const MentorCard=({image, toView,toConsult}:any)=>{
    return(
        <View style={styles.cardContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.textContainer}>
          <View style={{height:125, justifyContent:'flex-start', padding:10}} >
          <Text style={styles.textContent}>Ayush Jha</Text>
          <Text style={styles.textContent1}>Frontend Dev 8 years</Text>
          <Text style={styles.textContent2}>⭐ 4.7 (140)</Text>
          </View>
          <View style={styles.buttonContainer}>
              
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={toView}  >
              <Text style={styles.buttonText}>View Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={toConsult} >
              <Text style={styles.buttonText}>Book Consultation</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
}