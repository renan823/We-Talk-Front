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
import { StackProps } from '../../configs/navigation.config';

const Login: React.FC<StackProps<'Login'>> = ({ navigation }) => {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>We Talk</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>
      </View>
      <View>
        <View style={styles.label}>
          <Text style={styles.labelText}>Nome</Text>
          <TextInput style={styles.input}/>
        </View>
        <View style={styles.label}>
          <Text style={styles.labelText}>Senha</Text>
          <TextInput style={styles.input}/>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
      <TouchableHighlight style={styles.link} onPress={() => { navigation.navigate('Register'); }}>
        <Text style={styles.linkText}>Não tem uma conta? Cadastre-se!</Text>
      </TouchableHighlight>
    </SafeAreaView>
  )
}

export default Login;