import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

const MenuCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>THINKING ANAOKULU</Text>
            </View>
            <View style={styles.cardContainer}>
                <TouchableOpacity style={styles.cardOne}>
                    <Image source={require('../assets/student.png')} style={{width:80, height:80, margin:10,}}/>
                    <Text style={styles.ogrenci}>Öğrenci Bilgileri</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardTwo}>
                     <Image source={require('../assets/business-investment.png')} style={{width:80, height:80, margin:10,}}/>
                    <Text style={styles.maliye}>Mali Veriler</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1,
        backgroundColor:'#e5e5e5',
    },
    headerContainer:{
        width:'100%',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        backgroundColor:'#D37676',
        height:80,
        alignItems:'center',
        justifyContent:'center',
    },
    header:{
        fontWeight:'bold',
        fontSize:23,
        color:'#fff'
    },
    cardContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    cardOne:{
        borderWidth:1,
        margin:15,
        height:300,
        width:150,
        padding:5,
        alignItems:'center',
        justifyContent:'center',
    },
    ogrenci:{
        fontWeight:'bold',
        fontSize:20,
    },
    cardTwo:{
        borderWidth:1,
        margin:15,
        height:300,
        padding:5,
        width:150,
        alignItems:'center',
        justifyContent:'center',
    },
    maliye:{
        fontWeight:'bold',
        fontSize:20,
    },
})

export default MenuCard;
