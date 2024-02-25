import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const PageScreen = ({sayfa, index, page, setPage, setLoading }) => {
    return (
        <TouchableOpacity style={styles.btnContainer} onPress={() => {
            setPage(page)
            setLoading(true)
        }}>
            <Text style={[styles.text, {color:page===sayfa ? '#EF5350': '#000'}]}>{page}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        marginVertical: 20,
        marginHorizontal: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default PageScreen;
