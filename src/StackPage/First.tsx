import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'

import styles from "./Styles";




export default function First(){

    const navigation = useNavigation()

    return(
        <View style={styles.container}>

            <View style={styles.containerimg}>  

                 <Animatable.Image
                 animation='flipInY'
                 style={styles.logoimg}
                 source={require('../../assets/StackImage/logo.png')}/> 

            </View>


            <Animatable.View delay={200} animation='slideInUp' style={styles.containerform}>
                
                <Text style={styles.txtform}>
                O Four Rabbits é um projeto que visa o compartilhamento de imagens e vídeos de forma anônima
                </Text>                
                
                <Text style={styles.txtlogin}>Faça o login para começar</Text>

                <TouchableOpacity
                onPress={() => navigation.navigate("Login")}                
                 style={styles.button}>
                    <Text style={styles.txtbutton}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=> navigation.navigate("Registration")} >
                    <Text style={styles.txtcadastro}> Não sou Cadastrado </Text>
                </TouchableOpacity>          

            </Animatable.View>        
        
            
            
        </View>
    );
}

