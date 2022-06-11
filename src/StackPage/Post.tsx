import React from "react";
import {View, Text,Alert, Image, StyleSheet, TouchableOpacity, TextInput, SafeAreaView} from 'react-native'

export default function Post() {
    
    const selectImage = () =>{
        Alert.alert(
            "Alert Title",
            "My Alert Msg",)
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.containerheader}>
                <TouchableOpacity>
                    <Image style={{width:35, height:25}}
                    source={require('../../assets/back.png')}/>
                    
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={styles.posttxt}> Postar </Text>
                </TouchableOpacity>               
            </View>
            <View style={styles.Linha}></View>

            <View style={{ flexDirection:'row', marginTop: 20, marginHorizontal:20  }}>
                <TouchableOpacity >
                    <Image style={{ width:50, height:50, }}
                    source={require('../../assets/perfil.png')} />
                </TouchableOpacity>

                <TextInput style={styles.textimput}
                 placeholder='Oque tem a dizer?'
                 multiline={true}
                 placeholderTextColor={'#6C0F6D'}/>
            </View>

            <TouchableOpacity >
                    <Image style={{ width:35, height:35, position:'absolute', bottom:-150, right:30 }}
                    source={require('../../assets/cam.png')} />
            </TouchableOpacity>
            <View>
                <Image style={{width:370, resizeMode:'contain', alignItems:'flex-start', alignSelf:'center'  }}
                 source={require('../../assets/wall.png')} />
            </View>

        </SafeAreaView>        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
       
        
    },
    

    containerheader:{
        marginHorizontal: 30,
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    Linha:{
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#6C0F6D'

    },

    posttxt:{
        fontWeight:'bold',
        fontSize:20,
        color: '#6C0F6D'
        
    },

    textimput:{
        marginLeft: 20
        
    }

    
})