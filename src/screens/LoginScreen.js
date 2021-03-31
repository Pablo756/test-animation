import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';
import {windowWidth} from '../utils/Dimensions';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <FormInput
        value={email}
        placeholderText="Email"
        onChangeText={(userEmail) => setEmail(userEmail)}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
      />
      <FormInput
        value={password}
        placeholderText="Password"
        onChangeText={(userPassword) => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <FormButton buttonTitle="Login" onPress={() => login(email, password)} />
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>New user? Join here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: windowWidth / 12,
    marginBottom: windowWidth / 20,
  },
  navButton: {
    marginTop: windowWidth / 25,
  },
  navButtonText: {
    fontSize: windowWidth / 19,
    color: '#6646ee',
  },
});
