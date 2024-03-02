import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import styles from './QuizHome.style';
import { ImageBackground } from 'react-native';


const QuizHome = ({navigation}) => {

    const handleStart = () => {
        navigation.navigate('Difficulty')
    }

    const aboutButton = () =>{
        navigation.navigate('About')
    }
    return (

        <ImageBackground source={require('../../../assets/bg.jpg')} style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>BİLDİN Mİ?</Text>
                <Image style={{width:150, height:150}} source={require('../../../assets/quiz.png')}/>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.contentA}>Hadi Başla!!</Text>
                <Text style={styles.contentB}>Şimdi Oyna & Kazan</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.startButton} onPress={handleStart}>
                        <Text style={styles.start}>Başla</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.aboutButton} onPress={aboutButton}>
                        <Text style={styles.about}>Hakkımızda...</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>

    );
}


export default QuizHome;
