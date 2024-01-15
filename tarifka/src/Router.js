import React from 'react';
import { StyleSheet, View } from 'react-native';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from './pages/Detail';

const Router = () => {
  const Stack = createStackNavigator();
  return (
    
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Categories" >
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

const styles = StyleSheet.create({
  
});

export default Router;
