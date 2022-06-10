import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation} from '@react-navigation/native'

import styles from "./Styles";

export default function Registration( ){

    const navigation = useNavigation();
    return(
        <View style={styles.containercadastro}>
            
            <View style={styles.containerimgcadastro}>
                <Image source={require('../../assets/StackImage/logocadastro.png')} />
            </View>

            <View style={styles.containerformcadastro}>

                <Text style={styles.txttitulocadastro}>Cadastro</Text>

                <TextInput placeholderTextColor={'#9FA0A2'} style={styles.inputcadastro} placeholder="Nome"/>
                <TextInput placeholderTextColor={'#9FA0A2'} style={styles.inputcadastro} placeholder="Nome de usuário"/>
                <TextInput placeholderTextColor={'#9FA0A2'} secureTextEntry={true} style={styles.inputcadastro} placeholder="Senha"/>
                <TextInput placeholderTextColor={'#9FA0A2'} secureTextEntry={true} style={styles.inputcadastro} placeholder="Confirmar senha"/>
                
                <TouchableOpacity style={styles.buttonentrar}>
                  <Text style={styles.txtbuttonentrar}> Entrar </Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => navigation.navigate('login')}
                 style={styles.buttonjaecadastrado}>
                    <Text style={styles.txtbuttonjaecadastrado}>Ja e cadastrado? faça o login</Text>
                 </TouchableOpacity>

            </View>



            
        </View>
    );
}