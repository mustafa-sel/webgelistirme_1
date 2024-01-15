import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
import axios from 'axios';
import MealsCard from '../../component/meals/MealsCard';


const Meals = ({ route }) => {
  const [data, setData] = useState([]);
  const { category } = route.params;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`); 
      setData(response.data.meals);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderData = ({ item }) => <MealsCard meals={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{category}</Text>
      <FlatList data={data} renderItem={renderData} keyExtractor={(item) => item.idMeal.toString()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffa500',
    flex: 1,
  },
  text:{
    fontWeight:'bold',
    fontSize:15,
    marginLeft:10,
  }
});

export default Meals;
