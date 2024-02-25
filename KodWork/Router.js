import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/HomeScreen';
import DetailScreen from './src/screens/Detail/DetailScreen';
import FavoritedJobs from './src/components/FavoritedJobs';
import UserProvider from './src/context/Provider';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const JobsTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen  name="JobsTab" component={HomeScreen}  options={{
          tabBarLabel: 'Jobs',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-text-search" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Favorited" component={FavoritedJobs}  options={{
          tabBarLabel: 'Favorited',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
  )
}
function Router() {
  return (
    <UserProvider>
      <NavigationContainer>
         <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: 'white' },
            headerTintColor: '#ef5350',
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen name="Jobs" component={JobsTab} />
          <Stack.Screen name="Detail" component={DetailScreen} options={({ route }) => ({ title: route.params.name })} />          
        </Stack.Navigator> 
      </NavigationContainer>
    </UserProvider>
  );
}

export default Router;
