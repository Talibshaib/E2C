import {Image, Text, View} from 'react-native';
import Button from '../../components/ui/Button';

const GetStartedScreen = ({navigation}:any) => {
  return (
    <View style={{backgroundColor: '#5178C9', flex: 1, position: 'relative'}}>
      <View style={{alignItems: 'flex-end'}}>
        <Image source={require('../../assets/img2.png')} />
      </View>
      <View
        style={{padding: 8, position: 'absolute', top: '28%', marginLeft: 24}}>
        <Text style={{fontSize: 48, color:'#1B3645' }}>Your</Text>
        <Text style={{fontSize: 60 , color:'#ffff' }}>Personal</Text>
        <Text style={{fontSize: 52 , color:'#A37958'}}>Journey</Text>
        <Text style={{fontSize: 50, color:'#ffff'}}>Begins</Text>
        <Text style={{fontSize: 48 , color:'#A37958' }}>Here</Text>
      </View>
      <View style={{flex:1, justifyContent:'flex-end' , alignItems:'center', marginBottom:53 }} >
      <Button
     onPress={() => navigation.push('Home')}
       />
      </View>
    </View>
  );
};

export default GetStartedScreen;
