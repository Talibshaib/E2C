import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';

export default function ChatScreen() {
  return (
    <View style={styles.cont}>
      <TouchableOpacity style={styles.nav}>
        <Image
          style={styles.navImg}
          source={require('../../../assets/arrowleftIcon1.png')}
        />
        <Text style={styles.navTxt}> Submit Proposal</Text>
      </TouchableOpacity>
      <View style={styles.letter}>
        <Text style={styles.letterTxt}>Connect</Text>
      </View>
      <TextInput
        style={[styles.letterBox, {height: 200, textAlignVertical: 'top'}]}
        placeholderTextColor="#9A9A9A"
        multiline
        placeholder={'Write your message here...'}
      />
      <View style={styles.btnAlign}>
        <View style={styles.attach}>
          <Text style={styles.attachTxt}>Attachments</Text>
          <TouchableOpacity style={styles.attachBtn}>
            <Text style={styles.attachBtnTxt}>Attach File</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.submit}>
          <TouchableOpacity style={styles.submitBox}>
            <Text style={styles.submitBoxTxt}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancel}>
            <Text style={styles.cancelTxt}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 25,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  navImg: {
    width: 20,
    height: 20,
  },
  navTxt: {
    fontSize: 22,
    fontWeight: '500',
    color: 'black',
  },
  letter: {
    padding: 10,
  },
  letterTxt: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  letterBox: {
    marginTop: 20,
    marginHorizontal: 10,
    height: 200,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#5178C9',
    paddingHorizontal: 20,
    color:'black'
  },
  attach: {
    padding: 10,
  },
  attachTxt: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  attachBtn: {
    width: 120,
    marginTop: 10,
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#5178C9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  attachBtnTxt: {
    color: '#5178C9',
    fontSize: 16,
    fontWeight: '400',
  },
  submit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 100,
  },
  submitBox: {
    padding: 8,
    backgroundColor: '#5178C9',
    borderRadius: 6,
  },
  submitBoxTxt: {
    width: 150,
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  cancel: {
    width: 150,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#5178C9',
  },
  cancelTxt: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
  },
  btnAlign: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
