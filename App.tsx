import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation,DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import Splash from './src/screens/Splash/Splash';
import LinearBg from './src/screens/_components/LinearBg';
import GetStartedScreen from './src/screens/GetStarted/GetStartedScreen';
import { DrawerContent, createDrawerNavigator } from '@react-navigation/drawer';
import DrawerPortion from './DrawerPortion';
import UserInfoScreen from './src/screens/UserInfo/UserInfoScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Image } from 'react-native';

const StackNav = ({navigation}:any)=>{
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='UserInfo'   >
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
    <Stack.Screen name="GetStart" component={GetStartedScreen}  options={{ headerShown: false }} />
    <Stack.Screen name="UserInfo" component={UserInfoScreen}  options={{ headerShown: false }} />
    <Stack.Screen name="linearBg" component={LinearBg}  options={{ headerShown: false }} />
  </Stack.Navigator>
  )
}

const DrawerNav = ()=>{
  const Drawer = createDrawerNavigator();

return(
  <Drawer.Navigator 
  drawerContent={props=> <DrawerPortion{...props}/>}
  screenOptions={{
    headerShown:false,
    headerTitleAlign:'center',
    headerStyle:{
      backgroundColor:'#5178C9',
    },
    headerTintColor:'white',
   }} >
    <Drawer.Screen name="Home" component={StackNav} />
    {/* <Drawer.Screen name="Splash" component={Splash} /> */}
    {/* <Drawer.Screen name="linearBg" component={LinearBg} /> */}
  </Drawer.Navigator>
)
}

const BottomNv = ()=>{
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator
    screenOptions={{
     tabBarLabelStyle:{
      paddingBottom:3, fontSize:12, fontWeight:'bold'
     },
    }}
    >
    <Tab.Screen name="Home" component={HomeScreen}   options={{ headerShown: false,tabBarIcon:(tabnIfo)=>{
      return(
       <Image source={require('./src/assets/home.png')} style={{width:20,height:20,tintColor:tabnIfo.focused?'#5178C9':'black'

       }} />
      )
    }}} />
    <Tab.Screen name="Profile" component={LinearBg}  options={{ headerShown: false,tabBarIcon:(tabnIfo)=>{
      return(
       <Image source={require('./src/assets/profileImg.png')} style={{width:19,height:19,
        tintColor:tabnIfo.focused?'#5178C9':'black'
       }} />
      )
    } }} />
    <Tab.Screen name="Progress" component={UserInfoScreen}  options={{ headerShown: false , tabBarIcon:(tabnIfo)=>{
      return(
       <Image source={require('./src/assets/progressImg.png')} style={{width:20,height:20,
        tintColor:tabnIfo.focused?'#5178C9':'black'
       }} />
      )
    } }} />
  </Tab.Navigator>
);
}


function App() {
  return (
    <NavigationContainer>
     
     <GestureHandlerRootView>
     <BottomNv/>
     </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;