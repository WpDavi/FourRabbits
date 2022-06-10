import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from "../TabPage/Home";
import Nofication from "../TabPage/Nofication";
import Perfil from "../TabPage/Perfil";
import Post from "../TabPage/Post";
import Search from "../TabPage/Search";

const Tab = createBottomTabNavigator();

export default function Routs2() {
    return(

        <Tab.Navigator>

            <Tab.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}  
            />

            <Tab.Screen
            name="Nofication"
            component={Nofication}
            options={{ headerShown: false }}  
            />
            
            <Tab.Screen
            name="Post"
            component={Post}
            options={{ headerShown: false }}              
            />

            <Tab.Screen
            name="Perfil"
            component={Perfil}
            options={{ headerShown: false }}  
            />

            <Tab.Screen
            name="Search"
            component={Search}
            options={{ headerShown: false }}  
            />

        </Tab.Navigator>
    );
}