import React from 'react';
import {Text, StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Routs from './src/Routs/StackRouts'

export default function app() {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor={'#10001B'} />
      <Routs/>
    </NavigationContainer>
  );
}