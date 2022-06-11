import React, {useState} from "react";
import {View, Text,Alert, Image, StyleSheet, TouchableOpacity, TextInput, SafeAreaView} from 'react-native'
import {launchImageLibrary } from 'react-native-image-picker';



export default function Post() {

    const [image, setImage] = useState()
    
    const selectImage = () => {
        
        const options = {
            title: 'Seleccinar Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            }
        }      
        
        launchImageLibrary(options, response =>{
            if(response.errorCode) {
                console.log(response.errorMessage)
            } else if ( response.didCancel) {
                console.log('Usuario Cancelou')
            } else {
                const path = response.assets[0].uri
                setImage(path)
            }
        })
        
        
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
                 placeholder='Oque tem a dizr?'
                 multiline={true}
                 placeholderTextColor={'#6C0F6D'}/>
            </View>

            <TouchableOpacity 
            
            onPress={selectImage}>
                    <Image style={{ width:35, height:35, bottom:-130, right:-330}}
                    source={require('../../assets/cam.png')} />
            </TouchableOpacity>

            <View style={{width: 370, alignSelf:'center',  marginTop:170, alignItems:'flex-start'}}>
                <Image style={{ alignSelf:'center',height:400, width:370 }}
                 source={{ uri: image }} />
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