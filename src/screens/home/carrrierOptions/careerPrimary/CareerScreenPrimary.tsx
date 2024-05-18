import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

export default function CareerScreen({navigation}:any) {
 const handelCarrierAll= ()=>{
  navigation.navigate("Carrier")
    }
 const handelHomehere= ()=>{
  navigation.navigate("home")
    }
  return (
    <View style={{flex: 1, paddingBottom: 10}}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profileImg}>
            <Image
              style={styles.profileImg}
              source={require('../../../../assets/profile.jpg')}
            />
          </View>
          <View style={styles.profileTxt}>
            <Text style={styles.profileTxt1}>Profile</Text>
            <Text style={styles.profileTxt2}>Jashwant Kumar</Text>
          </View>
        </View>
        <View style={styles.intrest}>
          <Text style={styles.intrestTxt}>Find your Interest</Text>
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputBox}
            placeholder="Search"
            placeholderTextColor="white"
          />
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.btnbox} onPress={handelHomehere}  >
            <Text style={styles.btnTxt}>Acadmics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnbox, styles.btnbox1]} >
            <Text style={[ styles.btnbox1Text1]}>Career</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={styles.parentScroll}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container3}>
          <View style={styles.searchTrend}>
            <View style={styles.searchTxt}>
              <Text style={styles.searchTxt1}>Most Searched Careers</Text>
            </View>
            <View style={styles.searchCrousal}>
              <ImageBackground
                style={styles.crousalBg} // Provide a value for borderRadius
                source={require('../../../../assets/trending.png')}>
                <Text style={styles.crousalTxt}>Cyber</Text>
                <Text style={styles.crousalTxt}>Security</Text>
              </ImageBackground>
            </View>
          </View>
        </View>
        <View style={styles.container4}>
          <View style={styles.topic}>
            <Text style={styles.topicTxt}>Topic</Text>
          </View>
          <View style={styles.topicMain}>
            <ScrollView
              horizontal
              style={styles.topicScroll}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.topicBox}>
                <Text style={styles.topicBoxTxt}>Next.js</Text>
              </View>
              <View style={styles.topicBox}>
                <Text style={styles.topicBoxTxt}>ReactJs</Text>
              </View>
              <View style={styles.topicBox}>
                <Text style={styles.topicBoxTxt}>Loop</Text>
              </View>
              <View style={styles.topicBox}>
                <Text style={styles.topicBoxTxt}>OPPs</Text>
              </View>
            </ScrollView>
            <ScrollView horizontal style={styles.topicScroll}>
              <View style={styles.topicBox}>
                <Text style={styles.topicBoxTxt}>API</Text>
              </View>
              <View style={styles.topicBox}>
                <Text style={styles.topicBoxTxt}>Vue </Text>
              </View>
              <View style={styles.topicBox}>
                <Text style={styles.topicBoxTxt}>Talwind</Text>
              </View>
              <View style={styles.topicBox}>
                <Text style={styles.topicBoxTxt}>Router</Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.container5}>
          <View style={styles.trendTxt}>
            <Text style={styles.trendTxt1}>Trending Career</Text>
          </View>
          <View style={styles.trendCrou}>
            <ImageBackground
              style={styles.trendCrouImg}
              source={require('../../../../assets/dataScience.png')}>
              <Text style={styles.trendCrouTxt}>Data Science</Text>
            </ImageBackground>
          </View>
        </View>
        <View style={styles.container6}>
          <TouchableOpacity style={styles.allOpBox} onPress={handelCarrierAll} >
            <Text style={styles.allOpTxt}>All Career Options</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // main: {padding: 25 , },
  container: {padding: 25, backgroundColor: '#5178C9'},
  profile: {flexDirection: 'row', gap: 7},
  profileImg: {height: 49, width: 50, borderRadius: 6},
  profileTxt: {gap: 15},
  profileTxt1: {color: 'white', fontWeight: '500'},
  profileTxt2: {color: 'white', fontWeight: '500'},
  intrest: {marginTop: 42},
  intrestTxt: {color: 'white', fontSize: 39, fontWeight: '400'},
  input: {marginTop: 25, marginBottom: 5},
  inputBox: {
    paddingHorizontal: 21,
    backgroundColor: '#668cd5',
    height: 50,
    borderRadius: 6,
    fontSize: 16,
  },
  container2: {paddingHorizontal: 25, backgroundColor: 'white'},
  btn: {
    marginTop: 14,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  btnbox: {
    borderColor: '#5E8CEA',
    alignItems: 'center',
    justifyContent: 'center',
    width: 175,
    padding: 9,
    borderRadius: 6,
    borderWidth: 0.5,
  },
  btnbox1:{
  backgroundColor:'#5178C9',
  
  },
  btnTxt: {
    color: '#5E8CEA',
  },
  btnbox1Text1: {
    color: 'white',
  },
  parentScroll: {flex: 1, backgroundColor: 'white'},
  container3: {
    paddingHorizontal: 25,
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  searchTrend: {flexDirection: 'column', gap: 20},
  searchTxt: {},
  searchTxt1: {fontSize: 24, color: 'black'},
  searchCrousal: {
    overflow: 'hidden', // Make sure overflow is hidden
    borderRadius: 6,
  },
  crousalBg: {
    height: 112,
    paddingHorizontal: 10,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  crousalTxt: {
    fontSize: 32,
    color: 'white',
  },
  container4: {
    paddingHorizontal: 25,
    backgroundColor: 'white',
  },
  topic: {marginBottom: 22},
  topicTxt: {fontSize: 24, color: 'black'},
  topicMain: {marginBottom: 10},
  topicScroll: {flexDirection: 'row', marginBottom: 10},
  topicBox: {
    width: 85,
    // height: 26,
    padding:4,
    paddingHorizontal:9,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#5178C9',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 41,
  },
  topicBoxTxt: {fontSize: 13, color: 'black'},
  container5: {paddingHorizontal: 25, backgroundColor: 'white'},
  trendTxt: {marginBottom: 20},
  trendTxt1: {fontSize: 24, color: 'black'},
  trendCrou: {
    overflow: 'hidden', // Make sure overflow is hidden
    borderRadius: 6,
    marginBottom: 20,
  },
  trendCrouImg: {
    height: 195,
    paddingHorizontal: 10,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  trendCrouTxt: {fontSize: 32, color: 'white'},
  container6: {paddingHorizontal: 25, backgroundColor: 'white'},
  allOpBox: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#5178C9',
    height: 50,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  allOpTxt: {fontSize: 18, color: 'black'},
});
