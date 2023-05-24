import React from 'react';
import {
  SafeAreaView,
  Text,
  View
} from 'react-native';

//Styles
import styles from './styles';

//Navigation
import { StackProps } from '../../configs/navigation.config';

const Register: React.FC<StackProps<'Register'>> = ({ navigation }) => {
  return(
    <SafeAreaView>
      <View>
        <Text>Tela de cadastro =)</Text>
      </View>
    </SafeAreaView>
  )
}

export default Register;