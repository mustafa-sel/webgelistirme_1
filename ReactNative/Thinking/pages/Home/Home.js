import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MenuCard from '../../components/menuCard';

const Home = () => {
    return (
        <View style={styles.menuContainer}>
            <MenuCard/>
        </View>
    );
}

const styles = StyleSheet.create({
    menuContainer:{
        flex:1,
    }
})

export default Home;
