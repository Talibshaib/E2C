import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';


export default function Registration({navigation}:any) {
 
  const [name, setName] = useState("");
  const [nameVerify, setNameVerify] = useState(false);
  const [collegename, setCollegeName] = useState("");
  const [collegeVerify, setCollegeVerify] = useState(false);
  const [semester, setSemester] = useState("");
  const [semesterVerify, setSemesterVerify] = useState(false);
  const [userName, setUserName] = useState("");
  const [userNameVerify , setUserNameVerify] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify ] = useState(false);
  const [conformPassword, setConformPassword] = useState("");
  const [conformPasswordVerify, setConformPasswordVerify ] = useState(false);

  function handelHome() {
    navigation.navigate('Home')
    
  }

  function handelSubmit(){
    const userData = {
      name:name,
      collegename,
      semester,
      userName,
      password,
      conformPassword
  };
  axios.post("http://192.168.1.4/register",userData).then((res)=>{console.log(res.data);
}
  )
  .catch((e)=>{console.log(e)
 }
  )


  }
  
 function handelName(e){
 const nameVar = e.nativeEvent.text;
 setName(nameVar)
 setNameVerify(false)
 if(nameVar.length>1){
  setNameVerify(true)  
 }
  
 }
function handelCollege(e){
  const collegeVar = e.nativeEvent.text;
  setCollegeName(collegeVar)
  setCollegeVerify(false)
  if(collegeVar.length>3){
    setCollegeVerify(true)
  }
}
function handelSemester(e){
  const semesterVar = e.nativeEvent.text;
    setSemester(semesterVar)
    setSemesterVerify(false)

    // Check if semesterVar is not empty and is a single digit
    if(semesterVar.length === 1 && /^\d$/.test(semesterVar)){
        setSemesterVerify(true);
    } else {
        setSemesterVerify(false);
    }
}
function handleuserName(e){
  const usernameVar = e.nativeEvent.text;
  setUserName(usernameVar)
  setUserNameVerify(false)
  if(usernameVar.length>2){
    setUserNameVerify(true)
  }
}

function handelPassword(e){
   const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar)
    setPasswordVerify(false)
    if(passwordVar.length>4){
      setPasswordVerify(true)
    }

}
function handleConformPassword(e){
  const conformPasswordVar = e.nativeEvent.text;
  setConformPassword(conformPasswordVar)
  setConformPasswordVerify(false)
  if(conformPasswordVar!==password){
   
    return;
  }
 setConformPasswordVerify(true)
}


  return (
    <ScrollView showsVerticalScrollIndicator={false} >
    <KeyboardAvoidingView>
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
            onChange={e=>{handelName(e)}}
          />
          {
            name.length<1?null:nameVerify?null:
            <Text style={{
              color:'red'
            }} >
              name should be greater than 1 character
            </Text>
          }
          <TextInput
            style={styles.input_bx}
            placeholderTextColor={'#909090'}
            placeholder="College Name"
            onChange={e=>{handelCollege(e)}}
          />
            {
            collegename.length<1?null:collegeVerify?null:
            <Text style={{
              color:'red'
            }} >
              Enter a valid college name
            </Text>
          }
          <TextInput
            style={styles.input_bx}
            placeholderTextColor={'#909090'}
            placeholder="Semester"
            keyboardType='numeric'
            // maxLength={1}
            onChange={e=>{handelSemester(e)}}
          />
          
          <TextInput
            style={styles.input_bx}
            placeholderTextColor={'#909090'}
            placeholder="Username"
            onChange={e=>{handleuserName(e)}}
          />
            {
            userName.length<1?null:userNameVerify?null:
            <Text style={{
              color:'red'
            }} >
              Enter a valid username
            </Text>
          }
          <TextInput
            style={styles.input_bx}
            placeholderTextColor={'#909090'}
            placeholder="Password"
            onChange={e=>{handelPassword(e)}}
          />
            {
            password.length<1?null:passwordVerify?null:
            <Text style={{
              color:'red'
            }} >
              Enter a  valid passord of 4 or more digit
            </Text>
          }
             
          <TextInput
            style={styles.input_bx}
            placeholderTextColor={'#909090'}
            placeholder="Confirm Password"
            onChange={e=>{handleConformPassword(e)}}
          />
          {
            conformPassword.length<1?null:conformPasswordVerify?null:
            conformPasswordVerify === false &&
            <Text style={{ color: 'red' }}>
              Passwords do not match
            </Text>
          }
        
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.botton_bx} onPress={()=>handelHome()} onpr >
            <Text style={styles.botton_txt}>Sign In</Text>
          </TouchableOpacity>
          <Text style={styles.connect}>
            Have account? <Text style={styles.connect_tx}>Connect</Text>
          </Text>
        </View>
      </View>
    </View>
    </KeyboardAvoidingView>
    </ScrollView>
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
