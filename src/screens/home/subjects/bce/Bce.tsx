import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';




const Bce = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#5178C9', height: 261}}>
        <View style={styles.ProfileContainer}>
        <Image source={require('../../../../assets/arrowleftIcon1.png')} style={{width:17,height:25, tintColor:'white'}} />
          
          
          
        </View>
        {/* second portion */}
        <View style={styles.SecondContainer}>
          
          <View
            style={{
              justifyContent:'flex-end',
              padding: 12,
              width:"100%",
              height: 198,
            }}>
            <View>
              <Text style={styles.userName}>BT204-Basic Civil &Mechanic </Text>
             
            </View>
           
          </View>
        </View>
      </View>
      {/* white screen */}
      <View
        style={{
          padding:12,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 17,
          // flex: 1,
        }}>
           <Text style={{ width:'90%', padding:12, fontWeight:'bold', color:'black',fontSize:16}} >All Chapters</Text>
        <View style={{  gap:12, height:528}} >
        
         <ClickBoxSub  text=" Unit 1-Buliding Materials&Construct.."/>
         <ClickBoxSub  text="Unit 2-Surveying & Positioning "/>
         <ClickBoxSub  text=" Unit 3-Mapping & Sensing"/>
         <ClickBoxSub  text=" Unit 4- Force &Equilibrium"/>
         <ClickBoxSub  text=" Unit 5-Center of Gravity & MOI"/>
        </View>
        <View style={{position:'absolute', bottom:0 }} >
        {/* <LogoutBtn/> */}
        </View>
      </View>
    </View>
  );
};

export default Bce;

const styles = StyleSheet.create({
  ProfileContainer: {
    // borderWidth:1,
    padding: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  ProfileText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  SecondContainer: {
    height: '50%',
    marginHorizontal:14
  },
  userName: {
    fontSize: 19,
    fontWeight: '800',
    color: 'white',
  },
  userSubDetail: {
    fontSize: 12,
    opacity: 0.6,
    fontWeight: '500',
  },
});

export const UserInfoBtn = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#ffff',
        borderRadius: 6,
        alignItems: 'center',
        width: 96,
        height: 32,
        paddingHorizontal: 7,
        justifyContent: 'center',
      }}
      activeOpacity={0.7}>
      <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>
        Edit Profile
      </Text>
    </TouchableOpacity>
  );
};

export const ClickBoxSub = ({ text}:any) => {
  return (
    <View
      style={{
        padding: 9,
        alignItems:'center',
        width: 351,
        height: 49,
        borderWidth: 0.8,
        borderRadius: 6,
        flexDirection:'row',
        justifyContent:'flex-start',
        gap:19,
        
        backgroundColor:'#D9D9D9'
      }}>
      <Text style={{color:'black', fontWeight:'700'}}>{text}</Text>
      <View style={{ flex:1,alignItems:'flex-end' }} >
        <Image source={require('../../../../assets/icons/greaterSymbol.png')} style={{width:20,height:20, opacity:0.6}} />
      </View>
    </View>
  );
};

export const LogoutBtn = () => {
  return (
    <TouchableOpacity
      style={{
        justifyContent:'center',
        width: 358,
        height: 49,
        borderWidth: 0.8,
        borderRadius: 6,
        backgroundColor:'#5178C9',
      }} activeOpacity={0.8} >
      <Text style={{ fontSize:17, color:'white',textAlign:'center', fontWeight:'bold' }} >LogOut</Text>
    </TouchableOpacity>
  );
};
