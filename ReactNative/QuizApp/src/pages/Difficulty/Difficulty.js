import React, { useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from "./Difficulty.style";




const Difficulty = ({ navigation }) => {

    const handleEastButton = () => {
        navigation.navigate('EasyDifficulty')
    }
    
    const handleNormalButton = () =>{
        navigation.navigate('NormalDifficulty')
    }

    const handleHardButton = () =>{
        navigation.navigate('HardDifficulty')
    }


    return (
        <ImageBackground source={require('../../../assets/bg.jpg')} style={styles.container}>
            <View style={styles.buttonContainer}>
                <View style={styles.easy}>
                    <Text style={styles.text}>Kolay</Text>
                    <TouchableOpacity style={styles.easyButton} onPress={handleEastButton}>
                        <Text style={styles.text}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.normal}>
                    <Text style={styles.text}>Orta</Text>
                    <TouchableOpacity style={styles.normalButton} onPress={handleNormalButton}>
                        <Text style={styles.text}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.hard}>
                    <Text style={styles.text}>Zor</Text>
                    <TouchableOpacity style={styles.hardButton} onPress={handleHardButton}>
                        <Text style={styles.text}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}


export default Difficulty;
