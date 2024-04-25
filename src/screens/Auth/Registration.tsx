import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function Registration() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.logo_Txt}>Easy2college</Text>
        </View>
        <View style={styles.reg}>
          <Text style={styles.reg_txt}>Registration</Text>
          <Text style={styles.reg_txt_2}>
            "Embark on your learning journey.welcome to your edycational realm!"
          </Text>
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.input_bx}
            placeholderTextColor={'#909090'}
            placeholder="Full Name"
          />
          <TextInput
            style={styles.input_bx}
            placeholderTextColor={'#909090'}
            placeholder="College Name"
          />
          <TextInput
            style={styles.input_bx}
            placeholderTextColor={'#909090'}
            placeholder="Semester"
          />
          <TextInput
            style={styles.input_bx}
            placeholderTextColor={'#909090'}
            placeholder="Username"
          />
          <TextInput
            style={styles.input_bx}
            placeholderTextColor={'#909090'}
            placeholder="Password"
          />
          <TextInput
            style={styles.input_bx}
            placeholderTextColor={'#909090'}
            placeholder="Confirm Password"
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.botton_bx}>
            <Text style={styles.botton_txt}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.connect}>
            Have account? <Text style={styles.connect_tx}>Connect</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  container: {
    margin: 25,
  },
  logo: {},
  logo_Txt: {
    fontSize: 16,
    color: '#5178C9',
    fontWeight: '500',
  },
  reg: {
    marginTop: 59,
    gap: 6,
  },
  reg_txt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '400',
  },
  reg_txt_2: {
    fontSize: 10,
    color: '#000000',
  },
  input: {
    marginTop: 40,
    gap: 28,
  },
  input_bx: {
    backgroundColor: '#F6F6F6',
    padding: 16,
    borderRadius: 6,
    height: 50,
    borderWidth: 1,
    borderColor: '#5178C9',
    fontSize: 16,
    color: '#000000',
  },

  button: {
    marginTop: 28,
    gap: 8,
  },
  botton_bx: {
    backgroundColor: '#5178C9',
    padding: 10,
    borderRadius: 6,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botton_txt: {
    color: '#ffffff',
    fontSize: 18,
  },
  connect: {
    textAlign: 'left',
    color: '#000000',
    fontSize: 14,
  },
  connect_tx: {
    color: '#5178C9',
  },
});
