import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import JobsCard from '../../components/JobsCard';
import { useNavigation } from '@react-navigation/native';
import PageScreen from '../../components/PageScreen';


const pageNumber = [
    {
        page:1
    },
    {
        page:2
    },
    {
        page:3
    },
    {
        page:4
    },
    {
        page:5
    },
    {
        page:6
    },
    {
        page:7
    },
    {
        page:8
    },
    {
        page:9
    },
    {
        page:10
    },
]
const HomeScreen = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1)

    const fetchData = async (URL) => {
        try {
            const { data: jobsList } = await axios.get(URL);
            setData(jobsList);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };
    console.log('ss', data.page)
    useEffect(() => {
    const URL = `https://www.themuse.com/api/public/jobs?page=${page}`;

        fetchData(URL);
    }, [page]);
    const renderJobs = ({ item }) => (
        <TouchableOpacity 
        // onPress={() => navigation.navigate('Detail', {item})}
       onPress={()=>navigation.navigate('Detail', { item, name: item.categories[0].name })} 
        >
            <JobsCard jobs={item}/>
        </TouchableOpacity>
    );
    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        );
    }   
    return (        
        <FlatList
            data={data.results}
            renderItem={renderJobs}
            keyExtractor={(item) => item.id.toString()}

            ListFooterComponent={()=>
                <View style={styles.footerContainer}>
                {pageNumber.map((item, index)=> <PageScreen sayfa={data.page} index={index} setLoading={setLoading} page={item.page} setPage={setPage} key={index}/>)}
                </View>    
            }
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerContainer:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
