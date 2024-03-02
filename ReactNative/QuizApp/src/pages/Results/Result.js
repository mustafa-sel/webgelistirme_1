import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const Result = ({ route }) => {
    const navigation = useNavigation()
    const score= route.params?.score
    const handleHome = () =>{
        navigation.navigate('QuizHome')
    }
    
    return (
        <ImageBackground source={require('../../../assets/bg.jpg')} style={styles.container}>
            {score >70 ? <Image source={require('../../../assets//victory.png')} style={styles.victory}/> 
            : <Image source={require('../../../assets//lose.png')} style={styles.lose}/>}
            <Text style={styles.score}>Score: {score}</Text>
            <View>
                <TouchableOpacity onPress={handleHome}>
                    <Text style={styles.text}>Tekrar Dene...</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
   container:{
    flex:1,
    alignItems:'center',
   },
   victory:{
    width:400,
    height:400,
    resizeMode: 'center',
    marginBottom:50,
   },
   lose:{
    width:250,
    height:250,
    resizeMode: 'contain',
    marginVertical:100,
    borderRadius:150,
    padding:20,
    opacity:0.9,

   },
   text:{
    fontSize:20,
    color:'#fff',
    backgroundColor:'#34A0A4',
    borderRadius:100,
    padding:10,
    margin:80,
   },
   score:{
    fontSize:40,
    color:'#fff',
    backgroundColor:'#34A0A4',
    borderRadius:100,
    padding:20
   },
})

export default Result;
