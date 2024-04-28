import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';



export default function LoginScreen({navigation}:any) {
  const [password, setPassword] = useState("");
const [passwordVerify, setPasswordVerify ] = useState(false);

   function handelToRegister(){
    navigation.navigate("Register")
   }
   function handelToHomeScreen(){
    navigation.navigate("home")
   }

  

function handelPassword(e){
  const passwordVar = e.nativeEvent.text;
   setPassword(passwordVar)
   setPasswordVerify(false)
   if(passwordVar.length>4){
     setPasswordVerify(true)
   }

}
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.main}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.logo_Txt}>Easy2college</Text>
        </View>
        <View style={styles.login}>
          <Text style={styles.login_txt}>Login</Text>
          <Text style={styles.login_txt_2}>
            "Embark on your learning journey.welcome to your edycational realm!"
          </Text>
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.input_bx}
            placeholderTextColor={'#909090'}
            placeholder="Username"
          />
          <TextInput
            style={styles.input_bx}
            placeholderTextColor={'#909090'}
            placeholder="Password"
            onChange={e=>{handelPassword(e)}}
          />
        </View>
        <View style={styles.forgot}>
          <Text style={styles.forgot_txt}>Forgot Password?</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.botton_bx} onPress={handelToHomeScreen}  >
            <Text style={styles.botton_txt}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.signup}  >
            Don't have an account? <Text style={styles.signup_tx} onPress={handelToRegister} >Sign up</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
    height: '100%',
  },
  container: {
    margin: 25,
    // backgroundColor: 'red',
  },
  logo: {},
  logo_Txt: {
    fontSize: 16,
    color: '#5178C9',
    fontWeight: '500',
  },
  login: {
    marginTop: 84,
    gap: 8,
  },
  login_txt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '400',
  },
  login_txt_2: {
    fontSize: 10,
    color: '#000000',
  },
  input: {
    marginTop: 112,
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
  forgot: {
    marginTop: 9,
    textAlign: 'right',
  },
  forgot_txt: {
    color: '#A7A5A6',
    fontSize: 14,
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
  signup: {
    textAlign: 'left',
    color: '#000000',
    fontSize: 14,
  },
  signup_tx: {
    color: '#5178C9',
  },
});
