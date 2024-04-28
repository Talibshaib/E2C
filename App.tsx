import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Image } from 'react-native';

import HomeScreen from './src/screens/home/HomeScreen';
import GetStartedScreen from './src/screens/getStarted/GetStartedScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import Registration from './src/screens/auth/Registration';
import LinearBg from './src/screens/_components/LinearBg';
import UserInfoScreen from './src/screens/userInfo/UserInfoScreen';
import AcedmicsScreen from './src/screens/home/acedmics/AcedmicsScreen';
import Bce from './src/screens/home/subjects/bce/Bce';
import Bme from './src/screens/home/subjects/bme/Bme';
import Math from './src/screens/home/subjects/mathematics/Math';
import Carrier from './src/screens/home/CarrrierOptions/Carrier';
import WebDev from './src/screens/home/courses/cloud/CloudComputing';
import Mentor from './src/screens/mentor/Mentor';
import DescriptionPage from './src/screens/mentor/descripton/DescriptionPage';
import CareerScreen from './src/screens/home/CarrrierOptions/careerPrimary/CareerScreenPrimary';
import ConnectScreen from './src/screens/studentHub/studentHubPrimary/CreateTaskScreen';
import ChatScreen from './src/screens/studentHub/chatStudent/ChatScreen';
import Android from './src/screens/home/courses/androidDev/Android';
import Ai_Ml from './src/screens/home/courses/ai_ml/Ai_Ml';
import CloudComputing from './src/screens/home/courses/cloud/CloudComputing';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          display:'none',
          fontSize: 12,
          fontWeight: 'bold',
        },
        
      }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => (
            <Image
              source={require('./src/assets/home.png')}
              style={{
                width: 26,
                height: 26,
                tintColor: tabInfo.focused ? '#5178C9' : 'black',
              }}
              />
            ),
            // tabBarLabel: '',
        }}
      />
      
      <Tab.Screen
        name="Progress"
        component={ConnectScreen}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => (
            <Image
            source={require('./src/assets/studentHub.png')}
              style={{
                width: 26,
                height: 28,
                tintColor: tabInfo.focused ? '#5178C9' : 'black',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mentor"
        component={Mentor}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => (
            <Image
            source={require('./src/assets/findMentor.png')}
              style={{
                width: 26,
                height: 28,
                tintColor: tabInfo.focused ? '#5178C9' : 'black',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserInfoScreen}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => (
            <Image
              source={require('./src/assets/profileIcon.png')}
              style={{
                width: 26,
                height: 28,
                tintColor: tabInfo.focused ? '#5178C9' : 'black',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="linearBg">
      <Stack.Screen name="linearBg" component={LinearBg} options={{ headerShown: false }} />
      
      <Stack.Screen name="GetStart" component={GetStartedScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Registration} options={{ headerShown: false }} />
      <Stack.Screen name="Carrier" component={Carrier} options={{ headerShown: false }} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ConnectScreen" component={ConnectScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CareerScreenPrimary" component={CareerScreen} options={{ headerShown: false }} />
      <Stack.Screen name="description" component={DescriptionPage} options={{ headerShown: false }} />
      <Stack.Screen name="mentor" component={Mentor} options={{ headerShown: false }} />
      <Stack.Screen name="WebDev" component={WebDev} options={{ headerShown: false }} />
      <Stack.Screen name="Math" component={Math} options={{ headerShown: false }} />
      <Stack.Screen name="Bce" component={Bce} options={{ headerShown: false }} />
      <Stack.Screen name="Bme" component={Bme} options={{ headerShown: false }} />
      <Stack.Screen name="home" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Acedmics" component={AcedmicsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Android" component={Android} options={{ headerShown: false }} />
      <Stack.Screen name="Ai_Ml" component={Ai_Ml} options={{ headerShown: false }} />
      <Stack.Screen name="CloudComputing" component={CloudComputing} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <StackNav />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
