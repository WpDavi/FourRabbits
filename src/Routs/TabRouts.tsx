import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import {launchImageLibrary } from 'react-native-image-picker';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from "../TabPage/Home";
import Nofication from "../TabPage/Nofication";
import Perfil from "../TabPage/Perfil";
import Post from "../TabPage/Post";
import Search from "../TabPage/Search";

const Tab = createBottomTabNavigator();

export default function Routs2() {

    const navigation = useNavigation();

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
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor:'#6C0F6D',
            tabBarShowLabel: false,
            tabBarStyle:{
                backgroundColor:'#161820',
                position:'absolute',
                bottom: 10,
                left: 10,
                right: 10,
                elevation: 0,
                borderRadius: 30,
                height: 70, 
            },            
        }}
        >

            <Tab.Screen
            name="Home"
            component={Home}
            options={{  
                headerShown: false,             
                tabBarIcon:({focused}) => (
                    
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image
                        source={require('../../assets/TabImage/home.png')}
                        
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#6C0F6D' : 'white',
                        }}
                        />
                        <Text
                        style={{color: focused ? '#6C0F6D' : 'white', fontSize:12}}
                        >Início</Text>
                    </View>
                )
            }}
            />

            <Tab.Screen
            name="Nofication"
            component={Nofication}
            options={{  
                headerShown: false,             
                tabBarIcon:({focused}) => (
                    
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image
                        source={require('../../assets/TabImage/notification.png')}
                        
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#6C0F6D' : 'white',
                        }}
                        />
                        <Text
                        style={{color: focused ? '#6C0F6D' : 'white', fontSize:12}}
                        >Notificação</Text>
                    </View>
                )
            }}  
            />
            
            <Tab.Screen
            name="Post"
            component={Post}
            options={{  
                headerShown: false,             
                tabBarIcon:({focused}) => (
                    
                    <View style={{backgroundColor:'red', padding:15, borderRadius:39, position:'absolute', bottom:40}}>

                        <TouchableOpacity
                        onPress={selectImage} >
                        <Image
                        source={require('../../assets/TabImage/centro.png')}
                        
                        style={{
                            
                            width: 40,
                            height: 40,
                            tintColor: focused ? '#6C0F6D' : 'white',
                        }}
                        />
                        </TouchableOpacity>
                        
                        
                    </View>
                )
            }}              
            />

            <Tab.Screen
            name="Perfil"
            component={Perfil}
            options={{  
                headerShown: false,             
                tabBarIcon:({focused}) => (
                    
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image
                        source={require('../../assets/TabImage/perfil.png')}
                        
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#6C0F6D' : 'white',
                        }}
                        />
                        <Text
                        style={{color: focused ? '#6C0F6D' : 'white', fontSize:12}}
                        >Perfil</Text>
                    </View>
                )
            }}  
            />

            <Tab.Screen
            name="Search"
            component={Search}
            options={{  
                headerShown: false,             
                tabBarIcon:({focused}) => (
                    
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image
                        source={require('../../assets/TabImage/procurar.png')}
                        
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#6C0F6D' : 'white',
                        }}
                        />
                        <Text
                        style={{color: focused ? '#6C0F6D' : 'white', fontSize:12}}
                        >Procurar</Text>
                    </View>
                )
            }}  
            />

        </Tab.Navigator>
    );
}