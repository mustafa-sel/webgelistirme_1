import React from 'react';
import { View, Text, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import JobsCard from './JobsCard';
import RemoveCard from './RemoveCard';


const FavoritedJobs = ({ route ,navigation}) => {
    const favoritedList = useSelector(state => state.favoritedList);
  const navigations = useNavigation();
  const renderJobs = ({ item }) => (
    <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate('Detail', {item})}>
        <RemoveCard jobs={item}/>     
    </TouchableOpacity>
);
    return (
        <View>
            <Text>Favori İşler</Text>
            <FlatList
                data={favoritedList}
                renderItem={renderJobs}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
   
});

export default FavoritedJobs;
