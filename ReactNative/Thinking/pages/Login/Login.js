import React, { useState } from 'react';
import { View,Alert, Text, TextInput, Button, Image, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Formik } from 'formik'
import styles from './Login.style';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';


const Login = ({navigation}) => {
    const [text, setText] = useState('');
    
    const validation = Yup.object().shape({
        email: Yup.string().email('E-mail formatı uygun değildir.').required('e-mail alanı zorunludur.'),
        password: Yup.string().min(6 , 'Şifre en az 6 karakter olmalıdır!').required('Şifre alanı zorunludur.')
    })

    const Error = ({message}) => <Text style={styles.error}>{message}</Text>
    
    
    async function signIn (values){
        try {
            await auth().signInWithEmailAndPassword(values.email, values.password)
           navigation.navigate('Home')
           Alert.alert('Giriş Yapıldı')
           } catch (error) {
               console.error(error)
           }
    }

    const handleSignUp = () =>{
        navigation.navigate('SignUp')
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
                            initialValues={{ email: '', password: '' }}
                            onSubmit={(values, {resetForm}) => {
                                resetForm();
                                console.log(values);
                                signIn(values);
                            }}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                <>
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
                                    <View style={{ width: 250, marginTop: 30, marginBottom:10, fontSize:20 }}>
                                        <Button onPress={handleSubmit} title="Giriş" />
                                    </View>
                                    <View style={{ width: 250, marginBottom: 20 }}>
                                        <Button onPress={handleSignUp} title="Kayıt Ol" />
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

export default Login;
