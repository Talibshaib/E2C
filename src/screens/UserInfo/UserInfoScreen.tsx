import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';


const UserInfoScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#5178C9', height: 261}}>
        <View style={styles.ProfileContainer}>
        <Image source={require('../../assets/arrowleftIcon1.png')} style={{width:17,height:25, tintColor:'white'}} />
          <Text style={styles.ProfileText}>Profile</Text>
          <Image source={require('../../assets/settingIcon.png')} style={{width:27,height:27, tintColor:'white'}} />
          
        </View>
        {/* second portion */}
        <View style={styles.SecondContainer}>
          <Image
            source={require('../../assets/cardImg.png')}
            style={{
              width: 88,
              backgroundColor: '#ffff',
              height: 87,
              borderRadius: 6,
            }}
            resizeMode="contain"
          />
          <View
            style={{
              flexDirection: 'column',
              padding: 12,
              height: 118,
              gap: 12,
            }}>
            <View>
              <Text style={styles.userName}>Jaswant Kumar</Text>
              <Text style={styles.userSubDetail}>TIT main</Text>
            </View>
            <UserInfoBtn />
          </View>
        </View>
      </View>
      {/* white screen */}
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: 17,
          flex: 1,
        }}>
        <ClickBox />
        <ClickBox />
        <ClickBox />
        <ClickBox />
        <ClickBox />
        <View style={{ height:197, justifyContent:'flex-end'}} >
        <LogoutBtn/>
        </View>
      </View>
    </View>
  );
};

export default UserInfoScreen;

const styles = StyleSheet.create({
  ProfileContainer: {
    // borderWidth:1,
    padding: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
  ProfileText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  SecondContainer: {
    height: '50%',
    padding: 13,
    flexDirection: 'row',
    gap: 25,
    margin: 15,
    marginHorizontal:30,
    alignItems: 'center',
  },
  userName: {
    fontSize: 16,
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

export const ClickBox = () => {
  return (
    <View
      style={{
        // padding: 25,
        alignItems:'center',
        width: 351,
        height: 49,
        borderWidth: 0.8,
        borderRadius: 6,
        // backgroundColor:'#5178C9'
      }}>
      <Text style={{color:'black'}}>hii</Text>
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
      <Text style={{ fontSize:17, color:'white',textAlign:'center'}} >LogOut</Text>
    </TouchableOpacity>
  );
};
