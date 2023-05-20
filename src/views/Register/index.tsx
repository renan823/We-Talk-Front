import React from 'react';
import {
  SafeAreaView,
  Text,
  View
} from 'react-native';

//Styles
import styles from './styles';

//Navigation
import { Props } from '../../configs/navigation.config';

const Register: React.FC<Props<'Register'>> = ({ navigation }) => {
  return(
    <SafeAreaView>
      <View>
        <Text>Tela de cadastro =)</Text>
      </View>
    </SafeAreaView>
  )
}

export default Register;