import React, {useState} from 'react';
import {View, StyleSheet,SafeAreaView, TextInput} from 'react-native';

const Search = () => {
    const [search, setSearch] = useState('')

    return (
        <View>
            <TextInput
            style={styles.input}
            onChangeText={setSearch}
            placeholder= "Ara..."
            value={search}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        marginTop:10,
        borderRadius:10,
        padding: 10,
        backgroundColor:'#f5f5f5'
      },
})

export default Search;
