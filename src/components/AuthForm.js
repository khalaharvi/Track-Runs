import React, { useState } from 'react';
import { Text, Button, Input } from 'react-native-elements';
import { StyleSheet } from 'react-native'
import Spacer from './Spacer';
const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return(
    <>
      <Spacer>
      <Text h3>{headerText}</Text>
    </Spacer>
      <Input 
        label="Email" 
        value={email} 
        onChangeText={newEmail => setEmail(newEmail)} 
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Input 
        label="Password" 
        value={password} 
        onChangeText={newPassword => setPassword(newPassword)} 
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry
      />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }
    <Spacer>
      <Button title={submitButtonText}
        onPress={() => onSubmit({ email, password })} />
    </Spacer>
    </>
  )
};

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
    fontSize: 16,
    marginLeft: 15,
    marginTop: 15
  },
  link: {
    color: 'blue'
  }
});

export default AuthForm;