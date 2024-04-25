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


const HomeScreen = ({navigation}: any) => {

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
          <TouchableOpacity onPress={()=>  navigation.dispatch(DrawerActions.openDrawer)}>
            <Image
              source={require('../../assets/userPic.jpeg')}
              style={{width: 60, height: 60, borderRadius: 40}}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View style={{justifyContent: 'space-evenly'}}>
            <Text style={{fontWeight: '500', color: '#ffff'}}>
              Hey ManishJe
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
        <TextInput
          placeholder="Search here"
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            padding: 12,
            marginBottom: 10,
            width: '95%',
            borderRadius: 21,
            paddingHorizontal: 21,
            opacity: 0.6,
            backgroundColor: '#668CD5',
          }}
        />
        {/* here add scro */}
        {/* popular courses section */}
      </View>
      <View style={{marginHorizontal:25,marginTop:16, flexDirection:'row', justifyContent:'space-between'}} >
        <ScrollButton backgroundColor="#5178C9" color="white" Lessons="Acedmics" />
        <ScrollButton backgroundColor="white" color="blue" Lessons="Coding" />
        <ScrollButton backgroundColor="white" color="blue" Lessons="Marketing" />
      </View>
      <View style={{height: '62%', padding: 23}}>
       
        <ScrollView>
          <View style={{flexDirection: 'row', gap: 12}}>
            <SubjectCard backgroundColor="#FEF6F4" Subject="DSA" />
            <SubjectCard backgroundColor="#F5FAF4" Subject="OOPs" />
          </View>
          <View style={{flexDirection: 'row', gap: 12, marginTop: 16}}>
            <SubjectCard backgroundColor="#FEFAEF" Subject="Digital" />
            <SubjectCard backgroundColor="#F5F5FD" Subject="Coding" />
          </View>
          <View style={{flexDirection: 'row', gap: 12, marginTop: 16}}>
            <SubjectCard backgroundColor="#FEF6F4" Subject="Devlopment" />
            <SubjectCard backgroundColor="#F5FAF4" Subject="ADA" />
          </View>
          <View style={{flexDirection: 'row', gap: 12, marginTop: 16}}>
            <SubjectCard backgroundColor="#FEF6F4" Subject="Devlopment" />
            <SubjectCard backgroundColor="#F5FAF4" Subject="ADA" />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

export const SubjectCard = ({backgroundColor, Subject}: any) => {
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
        source={require('../../assets/cardImg2.png')}
        style={{width: 130, height: 150}}
        resizeMode="contain"
      />

      <View style={{flex: 1, justifyContent: 'flex-end', padding: 12, gap: 2}}>
        <Text style={{fontSize: 17, color: 'black', fontWeight: '700'}}>
          {Subject}
        </Text>
        <Text style={{fontSize: 14, color: 'grey', opacity: 0.6}}>
          11 tasks
        </Text>
      </View>
    </View>
  );
};

export const ScrollButton = ({backgroundColor, color, Lessons}: any) => {
  return (
    
      <TouchableOpacity
        style={{
          backgroundColor: backgroundColor,
          width: 105,
          padding: 9,
          borderRadius: 6,
          alignItems: 'center',
          borderWidth: 0.5,
        }}
        delayPressIn={100}
        delayPressOut={100}>
        <Text style={{color: color}}>{Lessons}</Text>
      </TouchableOpacity>
  );
};
