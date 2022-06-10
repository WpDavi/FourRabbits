import React from "react";
import {Text, View} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../StackPage/Login";
import First from "../StackPage/First";
import Registration from "../StackPage/Registration";
import Routs2 from "./TabRouts";


const Stack = createNativeStackNavigator();

export default function Routs () {
    return(
        
        <Stack.Navigator>

            <Stack.Screen
             name="First"
             component={First}
             options={{ headerShown: false}}
             />

            <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}                    
             />

             <Stack.Screen
             name="Registration"
             component={Registration}
             options={{headerShown: false}}
             />

             <Stack.Screen
             name="Routs2"
             component={Routs2}
             options={{headerShown: false}}
             />

        </Stack.Navigator>
        
    );
}