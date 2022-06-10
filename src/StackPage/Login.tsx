import React from "react";
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'

import styles from "./Styles";

export default function Login() {
    
    const navigation = useNavigation()

    return(
        <View style={styles.containerlogin}>

            <Animatable.View delay={300}  animation='lightSpeedIn'>
                <Text style={styles.txtbemvindo}> Bem-Vindo(a) </Text>
            </Animatable.View> 

            <Animatable.View animation='slideInUp' style={ styles.formlogin}>

                <Text style={styles.txt}>Email</Text>
                <TextInput placeholderTextColor={'#9FA0A2'} style={styles.inputlogin} placeholder="Digite um email..."/>

                <Text style={styles.txt}> Senha </Text>
                <TextInput secureTextEntry={true} placeholderTextColor={'#9FA0A2'} style={styles.inputlogin} placeholder="Digite uma senha..."/>
                
                <TouchableOpacity
                onPress={() => navigation.navigate('Routs2')}                                
                 style={styles.buttonlogin}>
                    <Text style={styles.txtbuttonlogin}> Entrar </Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                onPress={() => navigation.navigate('Registration') } >
                <Text style={styles.txtregistro}> Não possui uma conta? <Text style={{fontWeight:'bold'}}> Registre-se </Text> </Text>
                </TouchableOpacity>

                <Image style={{alignSelf:'center', marginTop:40}} source={require('../../assets/StackImage/login.png')} />
                
            
            </Animatable.View>           
            






        </View>


    )
}