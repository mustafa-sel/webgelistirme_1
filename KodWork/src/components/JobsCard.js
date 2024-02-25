import React from 'react';
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native';

const JobsCard = ({ jobs }) => {

return (
        <View style={styles.container}>
            <Text style={styles.categories}>{jobs?.categories?.[0]?.name}</Text>
            <Text style={styles.company}>{jobs?.company?.name}</Text>
            <View>
                <Text style={styles.locations}>{jobs?.locations?.[0]?.name}</Text>
            </View>
            <View>
                <Text style={styles.levels}>{jobs?.levels?.[0]?.name}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 1,
        margin: 7,
        borderColor: '#BDBDBD',
        borderRadius: 10,
        padding: 10,
    },
    categories: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    company: {
        color: 'black'

    },
    locations: {
        backgroundColor: '#EF5350',
        color: 'white',
        borderRadius: 15,
        padding: 5,
        width: 150,
        fontWeight: 'bold',
        marginTop: 5
    },
    levels: {
        textAlign: 'right',
        color: '#EF5350',
        fontWeight: 'bold',

    },
})

export default JobsCard;
