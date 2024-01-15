import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import styles from './Categories.style';
import { useNavigation } from '@react-navigation/native';

const CategoriesCard = ({ categories }) => {
  const navigation = useNavigation();

  const navigateToMeals = () => {
    navigation.navigate('Meals', { category: categories.strCategory });
  };

  return (
    <TouchableOpacity onPress={navigateToMeals}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: categories.strCategoryThumb }} />
        <Text style={styles.text}>{categories.strCategory}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
