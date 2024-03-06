import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Formik } from 'formik'
import styles from './SignUp.style';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';


const SignUp = ({navigation}) => {
    const [text, setText] = useState('');
    
    const validation = Yup.object().shape({
        email: Yup.string().email('E-mail formatı uygun değildir.').required('e-mail alanı zorunludur.'),
        password: Yup.string().min(6 , 'Şifre en az 6 karakter olmalıdır!').required('Şifre alanı zorunludur.'),
        username:Yup.string().min(3, 'Kullanıcı Adı en az 3 karekter olmalı!').required('Kullanıcı Adı alanı zorunludur.')
    })

    const Error = ({message}) => <Text style={styles.error}>{message}</Text>
    
    async function register (values) {
        try {
         await auth().createUserWithEmailAndPassword(values.email, values.password, values.username)
        .then(res=>console.log('first', res))
         Alert.alert('Hesap oluşturuldu')
        navigation.navigate('Login')
        } catch (error) {
            console.error(error)
        }
        
    }
    
    const signIn = (values) =>{
        auth().signInWithEmailAndPassword(values.email, values.password, values.username)
        .then(res=>console.log('first', res))
        .catch(err=> console.log(err))
    }

   
    
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.loginContainer}>
                        <Image source={require('../../assets/thinking_logo-removebg-preview.png')} style={styles.image} />
                        <Formik
                            validationSchema={validation}
                            initialValues={{ email: '', password: '' , username: ''}}
                            onSubmit={(values, {resetForm}) => {
                                resetForm();
                                console.log(values);
                                signIn(values);
                            }}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                <>
                                    <TextInput
                                        name="username"
                                        onTouchStart={handleBlur('username')}
                                        placeholder="Kullanıcı Adı"
                                        style={styles.textInput}
                                        onChangeText={handleChange('username')}
                                        value={values.username}
                                    />
                                    {touched.username && errors.username && <Error message={errors.username}/> }

                                    <TextInput
                                        autoCapitalize='none'
                                        name="email"
                                        onTouchStart={handleBlur('email')}
                                        placeholder="Email"
                                        style={styles.textInput}
                                        onChangeText={handleChange('email')}
                                        value={values.email}
                                        inputMode='email'
                                    />
                                    {touched.email && errors.email && <Error message={errors.email}/> }
                                    <TextInput
                                        name="password"
                                        onTouchStart={handleBlur('password')}
                                        placeholder="Şifre"
                                        style={styles.textInput}
                                        onChangeText={handleChange('password')}
                                        value={values.password}
                                        secureTextEntry
                                    />
                                    {touched.email && errors.password && <Error message={errors.password}/> }
                                    <View style={{ width: 250, marginTop: 30,  }}>
                                        <Button onPress={() => register(values)} title="Kayıt" />
                                    </View>
                                    <View style={{ width: 250, marginTop: 10, marginBottom:10, fontSize:20 }}>
                                        <Button onPress={handleSubmit} title="Giriş" />
                                    </View>
                                </>
                            )}
                        </Formik>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export default SignUp;
