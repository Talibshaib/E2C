import {Profiler} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function ConnectScreen({navigation}:any) {

  const handelChatScreen= ()=>{
    navigation.navigate("ChatScreen")
      }
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.profileTxt}>Tasks</Text>
      </View>
      <View style={styles.search}>
        <View>
          <TextInput
            placeholder="Search for tasks"
            placeholderTextColor="#9A9A9A"
            style={styles.searchIn}
          />
        </View>
        <TouchableOpacity style={styles.searchAdd}>
          <Image
            source={require('../../../assets/plus.png')}
            style={styles.searchAddImg}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.team}>
        <Text style={styles.teamTxt}>Find Team</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.description}>
        <Text style={styles.desTxt}>
          Browse tasks that match your interest or join a team that helps you
          grow..
        </Text>
      </View>
      <ScrollView style={styles.cont1}>
        <View style={styles.main}>
          <View style={styles.sec1}>
            <Text style={styles.sec1Txt}>Post Today</Text>
            <Text style={styles.sec1Txt2}>
              I am looking for a Figma designer for my agency
            </Text>
          </View>
          <View style={styles.sec2}>
            <Text style={styles.sec2Txt}>
              I am looking for people who can do the UI/UX design for me from
              this link...
            </Text>
            <Text style={styles.sec2Txt2}>more</Text>
          </View>
          <View style={styles.sec3}>
            <TouchableOpacity style={styles.sec3Btn}  onPress={handelChatScreen} >
              <Text style={styles.sec3Txt}>Connect</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sec3Btn}>
              <Text style={styles.sec3Txt}>Whishlist</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.sec1}>
            <Text style={styles.sec1Txt}>Post Today</Text>
            <Text style={styles.sec1Txt2}>
              I am looking for a Figma designer for my agency
            </Text>
          </View>
          <View style={styles.sec2}>
            <Text style={styles.sec2Txt}>
              I am looking for people who can do the UI/UX design for me from
              this link...
            </Text>
            <Text style={styles.sec2Txt2}>more</Text>
          </View>
          <View style={styles.sec3}>
            <TouchableOpacity style={styles.sec3Btn}  onPress={handelChatScreen} >
              <Text style={styles.sec3Txt}>Connect</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sec3Btn}  >
              <Text style={styles.sec3Txt}>Whishlist</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.sec1}>
            <Text style={styles.sec1Txt}>Post Today</Text>
            <Text style={styles.sec1Txt2}>
              I am looking for a Figma designer for my agency
            </Text>
          </View>
          <View style={styles.sec2}>
            <Text style={styles.sec2Txt}>
              I am looking for people who can do the UI/UX design for me from
              this link...
            </Text>
            <Text style={styles.sec2Txt2}>more</Text>
          </View>
          <View style={styles.sec3}>
            <TouchableOpacity style={styles.sec3Btn}  onPress={handelChatScreen} >
              <Text style={styles.sec3Txt}>Connect</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sec3Btn}>
              <Text style={styles.sec3Txt}>Whishlist</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  profile: {
    padding: 0,
    margin: 0,
  },
  profileTxt: {
    fontSize: 26,
    fontWeight: '600',
    color: 'black',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingTop: 22,
    paddingBottom: 22,
  },
  searchIn: {
    fontSize: 16,
    height: 50,
    width: 290,
    padding: 10,
    borderRadius: 6,
    color: 'black',
    borderWidth: 2,
    borderColor: '#E8E8E8',
  },
  searchAdd: {
    width: 48,
    height: 48,
    backgroundColor: '#E8E8E8',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  searchAddImg: {
    width: 30,
    height: 30,
  },
  team: {},
  teamTxt: {
    fontSize: 24,
    fontWeight: '600',
    color: '#5178C9',
  },
  line: {
    height: 2,
    backgroundColor: '#E8E8E8',
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    marginTop: 10,
    marginBottom: 24,
  },
  desTxt: {
    fontSize: 14,
    color: 'grey',
  },
  cont1: {
    flex: 1,
  },
  main: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 8,
    borderRadius: 6,
    marginBottom: 20,
  },
  sec1: {
    flexDirection: 'column',
    paddingTop: 20,
  },
  sec1Txt: {
    fontSize: 12,
    color: 'grey',
  },
  sec1Txt2: {
    fontSize: 22,
    color: '#5178C9',
    fontWeight: '400',
  },
  sec2: {
    flexDirection: 'column',
    marginTop: 20,
  },
  sec2Txt: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  sec2Txt2: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5178C9',
  },
  sec3: {
    marginTop: 25,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sec3Btn: {
    width: 150,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sec3Txt: {
    fontSize: 16,
    color: 'grey',
  },
});
