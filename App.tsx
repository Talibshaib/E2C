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
                height: 28,
                tintColor: tabInfo.focused ? '#5178C9' : 'black',
              }}
              />
            ),
            // tabBarLabel: '',
        }}
      />
      
      <Tab.Screen
        name="Progress"
        component={UserInfoScreen}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => (
            <Image
              source={require('./src/assets/progressImg.png')}
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
        component={LinearBg}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => (
            <Image
              source={require('./src/assets/profileImg.png')}
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
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="linearBg" component={LinearBg} options={{ headerShown: false }} />
      <Stack.Screen name="GetStart" component={GetStartedScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Registration} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="home" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Acedmics" component={AcedmicsScreen} options={{ headerShown: false }} />
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
