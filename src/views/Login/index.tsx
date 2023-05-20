import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

//Style
import styles from './styles';

//Navigation
import { Props } from '../../configs/navigation.config';

const Login: React.FC<Props<'Login'>> = ({ navigation }) => {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>We Talk</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.label}></View>
        <View style={styles.label}></View>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>Logi</Text>
        </TouchableHighlight>
      </View>
      <TouchableHighlight onPress={() => { navigation.navigate('Register'); }}>
        <Text style={styles.link}>Não tem uma conta? Cadastre-se!</Text>
      </TouchableHighlight>
    </SafeAreaView>
  )
}

export default Login;