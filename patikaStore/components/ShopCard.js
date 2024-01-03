import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './ShopCardStyle';


const ShopCard = ({item}) => {
    return (    
            <View style={styles.imgContainer}>
            <Image style={styles.image} source={{uri: item.imgURL}}/>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
            {!item.inStock&&<Text style={styles.stok}>STOKTA YOK</Text>}
            </View>
        
    );
}



export default ShopCard;
