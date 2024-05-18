import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Carrier = ({navigation}:any) => {

    const handelCarrierPrimary=()=>{
   navigation.navigate("WebDev")
  }
    const handelCarrierPrimary1=()=>{
   navigation.navigate("Android")
  }
    const handelCarrierPrimary2=()=>{
   navigation.navigate("Ai_Ml")
  }
    const handelCarrierPrimary3=()=>{
   navigation.navigate("CloudComputing")
  }


  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#5178C9', height: 261}}>
        <View style={styles.ProfileContainer}>
            <View style={{backgroundColor:'white', width:39, height:37, borderRadius:6, alignItems:'center', justifyContent:'center'}} >
          <Image
            source={require('../../../assets/arrowleftIcon1.png')}
            style={{width: 17, height: 25, tintColor: 'blue'}}
          />
            </View>
        </View>
        {/* second portion */}
        <View style={styles.SecondContainer}>
          <View
            style={{
              justifyContent: 'flex-end',
              width: '100%',
              height: 190,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{marginTop: 12}}>
                <Text style={styles.userName}> Carrier</Text>
                <Text style={styles.userName}> Options</Text>
              </View>
              <Image source={require('../../../assets/icons/carrierImg.png')} />
            </View>
          </View>
        </View>
      </View>
      {/* white screen */}
      <View
        style={{
          padding: 25,
          flex: 1,
        }}>
        <Text style={{fontSize: 19, fontWeight: 'bold', color: 'black', marginHorizontal:13}}>
          All Options
        </Text>

        <View style={styles.container}>
            <TouchableOpacity style={{borderRadius:8, alignItems:'center', overflow:'hidden', width:350,height:111}} activeOpacity={0.5}  onPress={handelCarrierPrimary} >
           
          <ImageBackground
            source={require('../../../assets/icons/carrierImg1.png')}
            style={styles.image}>
            <Text style={styles.text}>Web dev</Text>
          </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={{borderRadius:8, alignItems:'center', overflow:'hidden', width:350,height:111}} activeOpacity={0.5}  onPress={handelCarrierPrimary1} >
            <View style={{borderRadius:8, alignItems:'center', overflow:'hidden', width:350,height:111}} >
          <ImageBackground
            source={require('../../../assets/icons/carrierImg2.png')}
            style={styles.image}>
            <Text style={styles.text}>Android Dev</Text>
          </ImageBackground>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{borderRadius:8, alignItems:'center', overflow:'hidden', width:350,height:111}} activeOpacity={0.5}  onPress={handelCarrierPrimary2} >
            <View style={{borderRadius:8, alignItems:'center', overflow:'hidden', width:350,height:111}} >
          <ImageBackground
            source={require('../../../assets/icons/carrierImg3.png')}
            style={styles.image}>
            <Text style={styles.text}>AI/ML</Text>
          </ImageBackground>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={{borderRadius:8, alignItems:'center', overflow:'hidden', width:350,height:111}} activeOpacity={0.5}  onPress={handelCarrierPrimary3} >
            <View style={{borderRadius:8, alignItems:'center', overflow:'hidden', width:350,height:111}} >
          <ImageBackground
            source={require('../../../assets/icons/carrierImg4.png')}
            style={styles.image}>
            <Text style={styles.text}>Cloud Computing</Text>
          </ImageBackground>
            </View>
            </TouchableOpacity>
          {/* <ImageBackground
            source={require('../../../assets/icons/carrierImg2.png')}
            style={styles.image}>
            <Text style={styles.text}>Android Dev</Text>
          </ImageBackground>
          <ImageBackground
            source={require('../../../assets/icons/carrierImg3.png')}
            style={styles.image}>
            <Text style={styles.text}>AI/ML</Text>
          </ImageBackground>
          <ImageBackground
            source={require('../../../assets/icons/carrierImg4.png')}
            style={styles.image}>
            <Text style={styles.text}>AI/ML</Text>
          </ImageBackground> */}
        </View>
      </View>
    </View>
  );
};

export default Carrier;

const styles = StyleSheet.create({
  ProfileContainer: {
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 14,
  },
  ProfileText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
  SecondContainer: {
    height: '50%',
    marginHorizontal: 14,
  },
  userName: {
    fontSize: 32,
    fontWeight: '500',
    color: 'white',
    letterSpacing: 1.5,
  },
  userSubDetail: {
    fontSize: 12,
    opacity: 0.6,
    fontWeight: '500',
  },
  container: { alignItems:'center', gap:20,justifyContent:'center', marginTop:14},
  image: {
    width:351,
    height:111,
    resizeMode: 'cover',
    justifyContent:'center',
    
    
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlignVertical:'center',
    height:'100%',
    width:'100%',

    flex:1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
     
    padding: 10,
  },
});
