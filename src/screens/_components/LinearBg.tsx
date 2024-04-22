import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LinearBg = ({navigation}: any) => {
//   useEffect(() => {
//     setTimeout(() => {
//       navigation.navigate('Home');
//     }, 2000);
//   }, []);
  return (
    <View
      style={{
        backgroundColor: '#5178C9',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../../assets/logo2.png')}
        style={{width: 192, height: 162}}
      />
    </View>
  );
};

export default LinearBg;
