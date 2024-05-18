import {
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import React from 'react';
  
  const Android = () => {
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#5178C9', height: 261}}>
          <View style={styles.ProfileContainer}>
            <View
              style={{
                backgroundColor: 'white',
                width: 39,
                height: 37,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../../assets/arrowleftIcon1.png')}
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
                  <Text style={styles.userName}> Android</Text>
                  <Text style={styles.userName}> Development</Text>
                </View>
                <Image
                  source={require('../../../../assets/icons/carrierImg.png')}
                />
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
          <Text
            style={{
              fontSize: 19,
              fontWeight: 'bold',
              color: 'black',
              marginHorizontal: 13,
            }}>
            All Topics
          </Text>
  
          <View style={styles.container}>
            <ScrollView scrollToOverflowEnabled={false}>
              <View style={{gap: 12}}>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderWidth: 0.5,
                    borderRadius: 8,
                    borderColor: '#5178C9',
                    width: 373,
                    height: 293,
                    alignItems: 'center',
                    padding: 25,
                  }}>
                  <ScrollView >
                    <Text
                      style={{
                        color: '#5178C9',
                        fontWeight: '500',
                        fontSize: 18,
                        textAlign: 'center',
                      }}>
                      Frontend
                    </Text>
                    <View style={{gap: 13, marginTop: 12}}>
                      <View style={{borderRadius: 6, backgroundColor: '#D9D9D9'}}>
                        <Text
                          style={{
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            width: 309,
                            height: 39,
                            color:'black'
                          }}>
                         Jetpack Compose
                        </Text>
                      </View>
                      <View style={{borderRadius: 6, backgroundColor: '#D9D9D9'}}>
                        <Text
                          style={{
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            width: 309,
                            height: 39,
                            color:'black'
                          }}>
                          Declarative UI
                        </Text>
                      </View>
                      <View style={{borderRadius: 6, backgroundColor: '#D9D9D9'}}>
                        <Text
                          style={{
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            width: 309,
                            height: 39,
                            color:'black'
                          }}>
                          Kotlin-based
                        </Text>
                      </View>
                      <View style={{borderRadius: 6, backgroundColor: '#D9D9D9'}}>
                        <Text
                          style={{
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            width: 309,
                            height: 39,
                            color:'black'
                          }}>
                         Material Design Components
                        </Text>
                      </View>
                    </View>
                  </ScrollView>
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderWidth: 0.5,
                    borderRadius: 8,
                    borderColor: '#5178C9',
                    width: 373,
                    height: 293,
                    alignItems: 'center',
                    padding: 25,
                  }}>
                  <ScrollView>
                    <Text
                      style={{
                        color: '#5178C9',
                        fontWeight: '500',
                        fontSize: 18,
                        textAlign: 'center',
                        
                      }}>
                      Backend
                    </Text>
                    <View
                      style={{
                        gap: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 12,
                      }}>
                      <View style={{borderRadius: 6, backgroundColor: '#D9D9D9'}}>
                        <Text
                          style={{
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            width: 309,
                            height: 39,
                            color:'black'
                          }}>
                         Kotlin
                        </Text>
                      </View>
                      <View style={{borderRadius: 6, backgroundColor: '#D9D9D9'}}>
                        <Text
                          style={{
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            width: 309,
                            height: 39,
                            color:'black'
                          }}>
                         Firebase
                        </Text>
                      </View>
                      <View style={{borderRadius: 6, backgroundColor: '#D9D9D9'}}>
                        <Text
                          style={{
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            width: 309,
                            height: 39,
                            color:'black'
                          }}>
                          Firebase Cloud Firestore
                        </Text>
                      </View>
                      <View style={{borderRadius: 6, backgroundColor: '#D9D9D9'}}>
                        <Text
                          style={{
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            width: 309,
                            height: 39,
                            color:'black'
                          }}>
                          Android Room
                        </Text>
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  };
  
  export default Android;
  
  const styles = StyleSheet.create({
    ProfileContainer: {
      padding: 18,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 10,
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
      fontSize: 30,
      fontWeight: '500',
      color: 'white',
    },
    userSubDetail: {
      fontSize: 12,
      opacity: 0.6,
      fontWeight: '500',
    },
    container: {alignItems: 'center', marginTop: 14, flex: 1},
    image: {
      width: 351,
      height: 111,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      textAlignVertical: 'center',
      height: '100%',
      width: '100%',
  
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
  
      padding: 10,
    },
  });
  