import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuizHome from './src/pages/QuizHome';
import Difficulty from './src/pages/Difficulty';
import EasyDifficulty from './src/pages/Difficulty/Easy/EasyDifficulty';
import Result from './src/pages/Results/Result';
import NormalDifficulty from './src/pages/Difficulty/Normal/NormalDifficulty';
import { StatusBar } from 'react-native';
import HardDifficulty from './src/pages/Difficulty/Hard/HardDifficulty';
import About from './src/about/About';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer >
            <StatusBar hidden />
                <Stack.Navigator screenOptions={{ headerShown: false }} >
                    <Stack.Screen name="QuizHome" component={QuizHome} />
                    <Stack.Screen name="Difficulty" component={Difficulty} />
                    <Stack.Screen name="EasyDifficulty" component={EasyDifficulty} />
                    <Stack.Screen name="NormalDifficulty" component={NormalDifficulty} />
                    <Stack.Screen name="HardDifficulty" component={HardDifficulty} />
                    <Stack.Screen name="Result" component={Result} />
                    <Stack.Screen name="About" component={About} />
                </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
