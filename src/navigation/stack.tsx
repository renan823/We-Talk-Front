import * as React from 'react';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../configs/navigation.config';

//Screens
import Screens from '../views';

//Tab navigation
import Tabs from './tab';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Stacks: React.FC<RootStackParamList> = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Tabs' component={Tabs} />
                <Stack.Screen name='Login' component={Screens.login} />
                <Stack.Screen name='Initial' component={Screens.initial} />
                <Stack.Screen name='Register' component={Screens.register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Stacks;