import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList} from 'react-native';
import axios from 'axios';
import DetailCard from '../../component/detail/DetailCard';



const Detail = ({route}) => {
    const {meal} = route.params
    const [data,setData]=useState([])

    useEffect(() => {
        fetchDetail();
      }, []);

    const fetchDetail = async () => {
        try {
          const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`); 
          setData(response.data.meals);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const renderData = ({item}) => <DetailCard details={item}/>;

      return (
        <SafeAreaView style={styles.container}>
          <FlatList data={data} renderItem={renderData} style={{backgroundColor:'#f2f2f2'}} key={item=>item.idCategory}/>
        </SafeAreaView>
      );
    };

const styles = StyleSheet.create({
  container:{
    
    flex: 1,
  }
 
})

export default Detail;
