import React from 'react';
import {View, Dimensions, Image, Text, TouchableOpacity} from 'react-native';
import styles from './MealsCard.style';
import { useNavigation } from '@react-navigation/native';


const MealsCard = ({meals}) => {
  const navigation = useNavigation()

  const mealsNavigation = () =>{
    navigation.navigate('Detail' , {meal: meals.strMeal})
  }
 
  return (
    <TouchableOpacity onPress={mealsNavigation}>
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: meals.strMealThumb }} />
      <View style={styles.text_container}>

      <Text style={styles.text} numberOfLines={1}>{meals.strMeal}</Text>
      </View>
    </View>
  </TouchableOpacity>
  );
};



export default MealsCard;
