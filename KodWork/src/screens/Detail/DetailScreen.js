import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import styles from './DetailScreen.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const DetailScreen = ({ route }) => {
  const navigation = useNavigation()
  const job = route.params?.item
  console.log('first', route)
  const { width } = useWindowDimensions();
  const source = { html: job?.contents }
  const dispatch = useDispatch()

  const handleFavorited = () => {
    dispatch({type:'FAV_LİST', payload:{item:job}})
  }
  const handleSubmit = () => {
    Alert.alert('Application sent')
    navigation.navigate('Jobs')
  }


  if(!job)return null
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>{job?.categories?.[0]?.name}</Text>
        <Text style={styles.text}>Locations: <Text style={styles.locations}>{job.locations[0].name}</Text></Text>
        <Text style={styles.text}>Job Level: <Text style={styles.levels}>{job.levels[0].name}</Text></Text>
        <Text style={styles.subtitle}>Job Detail</Text>
      </View>
      <View style={styles.content}>
        <RenderHtml
          contentWidth={width}
          source={source}
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={[styles.buttonSubmit, { backgroundColor: '#EF5350' }]} onPress={handleSubmit}>
          <Icon name='exit-to-app' size={20} color='white' />
          <Text style={{ color: 'white' }}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonFavori, { backgroundColor: '#EF5350' }]} onPress={handleFavorited}>
          <Icon name='cards-heart' size={20} color='white' />
          <Text style={{ color: 'white' }}>Favorite Job</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default DetailScreen;
