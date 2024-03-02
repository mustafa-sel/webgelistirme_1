import React from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

const About = ({ navigation }) => {

const handleHomeButton = () =>{
    navigation.navigate('QuizHome')
}

    return (
        <ImageBackground source={require('../../assets/bg.jpg')} style={styles.container}>
            <Text style={styles.header}>Bildin mi? hakkında...</Text>
            <ScrollView>
            <Text style={styles.content}>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nisi sapiente distinctio voluptatum maiores est molestias a nemo deserunt consequuntur fugit doloribus sint illum eaque quo ab! Facere aliquam optio non quia perferendis explicabo facilis molestiae aliquid illo dolorum pariatur, eveniet, dolor corrupti sint atque repellendus et tenetur fuga fugit nisi quasi voluptatem perspiciatis? Cupiditate ex, at saepe officiis animi ratione quo error nostrum neque iste numquam voluptatum cum similique magnam impedit minus ipsum rerum quod perspiciatis! Hic doloribus vitae dicta aspernatur fugiat quibusdam quae, recusandae accusamus nostrum nisi illum explicabo, a ratione sapiente officia? Pariatur dolore tempore maxime eum voluptatibus minima consequuntur, itaque numquam doloremque vel libero quo delectus animi fugiat, nulla voluptates dolorem debitis! Cumque debitis deleniti quidem fuga repudiandae aliquam illum tenetur nemo ab eum labore laboriosam repellendus laborum dolorem laudantium, quisquam aspernatur in dolorum fugiat blanditiis ipsa magni. Ea quaerat possimus voluptatum magni nisi ullam consequatur deserunt, numquam reiciendis? Repudiandae ea quisquam, rerum velit sunt dignissimos dolore expedita aut et at molestias quaerat autem ut numquam nisi. Aliquam debitis officiis assumenda tempore! Consequuntur fuga voluptates tempore. Atque dolore fugiat nobis, non exercitationem dicta incidunt saepe ipsa aperiam ad ullam delectus dolorem amet harum sapiente numquam tenetur voluptates rem officia tempore blanditiis. Temporibus quidem dicta quibusdam eligendi, iure vero laboriosam excepturi? Quod quam quisquam voluptate porro quae commodi earum, inventore quidem! Praesentium expedita, ducimus nulla iste accusamus animi obcaecati nihil tenetur facere impedit deserunt natus consequatur reprehenderit dignissimos sapiente similique dolorem voluptas sint maiores inventore laudantium molestiae voluptates commodi tempora. Animi illo fugiat distinctio, laudantium excepturi quia aspernatur alias magnam laboriosam minima eveniet reiciendis delectus sunt modi accusantium quaerat quis? Magni consequatur quis nam vero alias? Aliquid, libero rem? Voluptatibus adipisci, esse pariatur at facere, quos sequi consequuntur error dolorem iusto cupiditate aperiam sapiente neque quam natus.</Text>
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={handleHomeButton}>
                <Text style={styles.buttonText}>Anasayfa</Text>
              </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'
    },
    header:{
        color:'#fff',
        fontSize:29,
        padding:20
    },
    content:{
        color:'#fff',
        textAlign:'justify',
        margin:35
    },
    button: {
        backgroundColor: '#1A759F',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 20,
      },
      buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
      },
})

export default About;
