import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList, StackProps } from '../configs/navigation.config';

//Screens
import Screens from '../views';

const Tab = createBottomTabNavigator<RootTabParamList>();

const Tabs: React.FC<StackProps<'Tabs'>> = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    backgroundColor: '#FF6F91',
                    elevation: 0,
                    borderRadius: 25,
                    height: 60,
                }
            }}
        >
            <Tab.Screen name='Home' component={Screens.home} options={{}} />
            <Tab.Screen name='Feed' component={Screens.feed} />
            <Tab.Screen name='Profile' component={Screens.profile} />
        </Tab.Navigator>
    )
}

export default Tabs;