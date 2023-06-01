import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

//Styles
import styles from './styles';

//Navigation
import { StackProps } from '../../configs/navigation.config';

const Register: React.FC<StackProps<'Register'>> = ({ navigation }) => {
  return(
    <SafeAreaView>
      <ScrollView>
        <View>
          <View></View>
        </View>
        <View>
        <View style={styles.label}>
          <Text style={styles.labelText}>Nome</Text>
          <TextInput style={styles.input}/>
        </View>
        <View style={styles.label}>
          <Text style={styles.labelText}>Senha</Text>
          <TextInput style={styles.input}/>
        </View>
        <View style={styles.label}>
          <Text style={styles.labelText}>Senha</Text>
          <TextInput style={styles.input}/>
        </View>
        <View style={styles.label}>
          <Text style={styles.labelText}>Senha</Text>
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
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register;