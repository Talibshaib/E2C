import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

const DescriptionPage = () => {
  return (
    <View style={{backgroundColor: '#F4F5FA', flex: 1}}>
      <View style={{margin: 25}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            marginBottom: 12,
          }}>
          <Image
            source={require('../../../assets/arrowleftIcon1.png')}
            style={{width: 25, height: 25}}
          />
          <Image source={require('../../../assets/icons/heart.png')} />
        </View>
        <View style={{ borderRadius:6}} >
        <Image
          source={require('../../../assets/icons/UserImg.jpg')}
          style={{width: 375, height: 175 , borderRadius:6}}
          resizeMode='cover'
        />
        </View>
      </View>
      {/* member description */}
      <View style={{margin: 25,  height:549, justifyContent:'space-between'}}>
        <Text style={styles.CarrierText}>Ayush Jha</Text>
      <Text style={{color:'black'}} >⭐⭐⭐⭐(4.6)</Text>
        <View style={styles.descriptioContainer}>
          <Text style={styles.descriptionText}>
            Dependability: We partner with trusted carriers known for their
            reliability and efficiency to ensure your shipments reach their
            destination safely and on time. Flexibility: From small parcels to
            large freight shipments, our carrier network offers a range of
            services to accommodate your unique requirements. Whether it's
            same-day delivery, expedited shipping, or standard transit times,
            large freight shipments, our carrier network offers a range of
            services to accommodate your unique requirements. Whether it's
            same-day delivery, expedited shipping, or standard transit times,
        
           
          </Text>
        </View>
        <View style={{height: 164, justifyContent: 'flex-end',}}>
       
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 50,
            }}>
            <Image source={require('../../../assets/icons/shareIcon.png')} />
            <TouchableOpacity
              style={{
                backgroundColor: '#5178C9',
                padding: 13,
                borderRadius: 6,
                alignItems: 'center',
                width: '70%',
                
              }}
              activeOpacity={0.6}>
              <Text style={{color:'white', fontSize:14}} >Confirm </Text>
            </TouchableOpacity>
            <Image source={require('../../../assets/icons/message.png')} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DescriptionPage;

const styles = StyleSheet.create({
  CarrierText: {
    backgroundColor: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    borderWidth:0.4,
     borderTopLeftRadius:9,
     borderBottomRightRadius:9,
    textAlign:'left',
    padding:10,
    width:150,
    color:'black'
    
  },
  descriptioContainer: {},
  descriptionText: {
    color: 'black',
    fontSize: 13,
  },
});
