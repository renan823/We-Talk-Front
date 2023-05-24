//Navigation
import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

//For stack navigation
export type RootStackParamList = {
  Initial: undefined,
  Login: undefined,
  Register: undefined,
  Tabs: undefined
}

type ScreenStackNavigationProp<T extends keyof RootStackParamList> = StackNavigationProp<RootStackParamList, T>;

type ScreenStackRouteProp<T extends keyof RootStackParamList> = RouteProp<RootStackParamList, T>;

export type StackProps<T extends keyof RootStackParamList> = {
  route: ScreenStackRouteProp<T>;
  navigation: ScreenStackNavigationProp<T>;
};

//For bottom tabs navigation
export type RootTabParamList = {
  Feed: undefined,
  Home: undefined,
  Profile: undefined
}

type ScreenTabNavigationProp<T extends keyof RootTabParamList> = BottomTabNavigationProp<RootTabParamList, T>;

type ScreenTabRouteProp<T extends keyof RootTabParamList> = RouteProp<RootTabParamList, T>;

export type TabProps<T extends keyof RootTabParamList> = {
  route: ScreenTabRouteProp<T>;
  navigation: ScreenTabNavigationProp<T>;
}
