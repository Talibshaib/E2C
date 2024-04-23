import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ButtonUi({ onPress }:any) {
  
  return (
    <TouchableOpacity
     onPress={onPress}
    
      style={{
        width: '85%',
        backgroundColor: '#ffff',
        padding: 17,
        borderRadius: 23,
        alignItems: 'center',
        elevation: 5,
      }}
      delayPressIn={100}
      delayPressOut={100}>
      <Text style={{color: 'black', fontSize: 24, fontWeight: 'bold'}}>
        Get Started
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
