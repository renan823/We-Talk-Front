import * as React from 'react';
import { View } from 'react-native';

//Screens
import Screens from './src/views/index';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/configs/navigation.config';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC<RootStackParamList> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Screens.login}/>
        <Stack.Screen name='Initial' component={Screens.initial}/>
        <Stack.Screen name='Register' component={Screens.register}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;