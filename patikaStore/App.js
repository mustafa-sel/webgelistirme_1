import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, FlatList} from 'react-native';
import Search from './components/Search';
import Shop_data from './assets/data/Shop_data.json'
import ShopCard from './components/ShopCard';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>PATIKASTORE</Text>
            <Search/>
            <FlatList
                data={Shop_data}
                renderItem={({item}) => <ShopCard item={item}/>}
                keyExtractor={item => item.id}
                style={styles.container}
                numColumns={2}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
    },
    header:{
        color:'#663399',
        fontSize:30,
    }
})

export default App;
