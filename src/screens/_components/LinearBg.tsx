import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';

const LinearBg = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('GetStart');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#5178C9',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../../assets/LogoOne.png')}
        style={{width: 218, height: 162}}
        resizeMode='contain'
      />
    </View>
  );
};

export default LinearBg;
