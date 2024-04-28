import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Carrier from './CarrrierOptions/Carrier';




const HomeScreen = ({navigation}: any) => {
   
  const handelToSubOverView1=()=>{
   navigation.navigate("Acedmics")
  }
  const handelToSubOverView3=()=>{
   navigation.navigate("Bce")
  }
  const handelToSubOverView2=()=>{
   navigation.navigate("Bme")
  }
  const handelToSubOverView4=()=>{
   navigation.navigate("Math")
  }
  const handelCarrier=()=>{
   navigation.navigate("CareerScreenPrimary")
  }
  const handelCarrierPrimary=()=>{
   navigation.navigate("CareerScreenPrimary")
  }
   
  return (
    <View>
      <View
        style={{
          backgroundColor: '#5178C9',
          padding: 25,
          justifyContent: 'space-between',
          height: 344,
        }}>
        <View
          style={{flexDirection: 'row', gap: 23, justifyContent: 'flex-start'}}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/profile.jpg')}
              style={{width: 60, height: 60, borderRadius: 6}}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View style={{justifyContent: 'space-evenly'}}>
            <Text style={{fontWeight: '500', color: '#ffff'}}>
              Hey JaswantJe
            </Text>
            <Text style={{fontWeight: '400', opacity: 0.6, color: '#ffff'}}>
              Ready to learn something new
            </Text>
          </View>
        </View>
        <Text
          numberOfLines={3}
          style={{fontSize: 35, lineHeight: 42, color: '#ffffff'}}>
          Hey, what would you like to learn today ?{' '}
        </Text>
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center',
           borderColor: 'gray',
           borderWidth: 1,
           padding: 2,
           width: '100%',
           borderRadius: 6,
           opacity: 0.6,
           backgroundColor: '#668CD5',
        }} >

        <TextInput
          placeholder="Search here"
          style={{marginHorizontal:5, flex:1}}
        />
          <Image source={require('../../assets/icons/searchIcon.png')} style={{width:26, height:26, marginHorizontal:5, tintColor:'white',opacity:0.4 }} />
        </View>
        {/* here add scro */}
        {/* popular courses section */}
      </View>
      <View style={{marginHorizontal:25,marginTop:16, flexDirection:'row', justifyContent:'space-between'}} >
        <ScrollButton backgroundColor="#5178C9" color="white" Lessons="Acedmics" />
        <ScrollButton backgroundColor="white" color="blue" Lessons="Career "  onPress={handelCarrierPrimary} />
      </View>
      <View style={{height: '62%', padding: 23}}>
        <ScrollView>
          <View style={{flexDirection: 'row', gap: 12}}  >
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={handelToSubOverView1}
            >
            <SubjectCard backgroundColor="#FEF6F4" Subject="Engg. Chem" chapters={7}  image={require('../../assets/homeIcon/chemistry.png')}  />
            </TouchableOpacity>
            <TouchableOpacity 
            activeOpacity={0.8}
            onPress={handelToSubOverView2}
            >
            <SubjectCard backgroundColor="#F5FAF4" Subject="BME" chapters={5} 
            image={require('../../assets/homeIcon/mechanicalEng.png')} />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', gap: 12, marginTop: 16}}>
            <TouchableOpacity 
             activeOpacity={0.8}
             onPress={handelToSubOverView3}
             >
            <SubjectCard backgroundColor="#FEFAEF" Subject="BCE" chapters={5} image={require('../../assets/homeIcon/civilEngg.png')} />
            </TouchableOpacity>
            <TouchableOpacity 
            activeOpacity={0.8}
            onPress={handelToSubOverView4}
            
            >
            <SubjectCard backgroundColor="#F5F5FD" Subject="M-2" chapters={5} image={require('../../assets/homeIcon/m1.png')} />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', gap: 12, marginTop: 16}}>
            <TouchableOpacity 
            activeOpacity={0.8}
            >
            <SubjectCard backgroundColor="#FEF6F4" Subject="coding" chapters={5} image={require('../../assets/homeIcon/coding.png')} />
            </TouchableOpacity>
            <TouchableOpacity 
            activeOpacity={0.8}
             >
            <SubjectCard backgroundColor="#F5FAF4" Subject="ADA" chapters={5} image={require('../../assets/homeIcon/physics.png')} />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', gap: 12, marginTop: 16}}>
            <SubjectCard backgroundColor="#FEFAEF" Subject="Devlopment" chapters={6} image={require('../../assets/homeIcon/commuinication.png')} />
            <SubjectCard backgroundColor="#F5F5FD" Subject="ADA" chapters={6} image={require('../../assets/homeIcon/m2.png')} />
          </View>
          <View style={{flexDirection: 'row', gap: 12, marginTop: 16}}>
            <SubjectCard backgroundColor="#FEF6F4" Subject="Devlopment" chapters={6} image={require('../../assets/homeIcon/mechanicalEng.png')} />
            <SubjectCard backgroundColor="#F5FAF4" Subject="ADA"  chapters={6} image={require('../../assets/homeIcon/bee.png')} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

export const SubjectCard = ({backgroundColor, Subject, chapters,image}: any) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        height: 216,
        width: 180,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={image}
        style={{width: 130, height: 150}}
        resizeMode="contain"
      />

      <View style={{flex: 1, justifyContent: 'flex-end', padding: 12, gap: 2}}>
        <Text style={{fontSize: 17, color: 'black', fontWeight: '700'}}>
          {Subject}
        </Text>
        <Text style={{fontSize: 14, color: 'grey', opacity: 0.6}}>
           Unit: {chapters}
        </Text>
      </View>
    </View>
  );
};

export const ScrollButton = ({backgroundColor, color, Lessons, onPress }: any) => {
  return (
    
      <TouchableOpacity
        style={{
          backgroundColor: backgroundColor,
          width: 175,
          padding: 9,
          borderRadius: 6,
          alignItems: 'center',
          borderWidth: 0.5,
        }}
        delayPressIn={100}
        delayPressOut={100}
        onPress={onPress}
        >
        <Text style={{color: color}}>{Lessons}</Text>
      </TouchableOpacity>
  );
};
