import React, { useState } from 'react';
import {
  Animated,
  SafeAreaView,
  Text,
  View
} from 'react-native';

//Style
import styles from './styles';

//Navigation
import { StackProps } from '../../configs/navigation.config';

//use it after animation
//navigation.navigate('Login');

//colocar uma animação no 'title'

const Initial: React.FC<StackProps<'Initial'>> = ({ navigation }) => {
  (setInterval(() => {
    navigation.navigate('Login');
  }, 2500))

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>We Talk</Text>
        <Text style={styles.subtitle}>Conversas dinâmicas</Text>
      </View>
    </SafeAreaView>
  )
}

export default Initial;