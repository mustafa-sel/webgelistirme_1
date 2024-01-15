import React, {useEffect, useState} from 'react';
import {StyleSheet, Button, SafeAreaView, FlatList} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
import CategoriesCard from '../../component/categories/CategoriesCard';

const Categories = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(Config.API_URL);
      setData(response.data.categories);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const renderData = ({item}) => <CategoriesCard categories={item}/>;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderData} key={item=>item.idCategory}/>     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#ffa500',
    flex:1,
  }
});

export default Categories;
