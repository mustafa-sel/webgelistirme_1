import React from 'react';
import {View, Image, Text, Button, ImageBackground} from 'react-native';
import styles from './DetailCard.style';
import {Linking} from 'react-native';

const DetailCard = ({details}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: details.strMealThumb}} />
      <View style={styles.text_container}>
        <Text style={styles.text_header}>{details.strMeal}</Text>
        <Text style={styles.text}>{details.strArea}</Text>
        <View style={styles.line}></View>
        <Text style={styles.descriptions}>{details.strInstructions}</Text>
      </View>
      <View style={styles.button}>
      <Button
        onPress={
          ()=>{
              Linking.openURL(details.strYoutube);  
        } }
        title="Watch on youtube"
        color="#ffffff"
      />
      </View>
    </View>
  );
};

export default DetailCard;
