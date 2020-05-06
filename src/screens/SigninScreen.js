import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import NavLink from '../components/Navlink';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  
  
  return(
    <View style={styles.container}>
      <NavigationEvents 
        onWillBlur={clearErrorMessage}
      />
    <AuthForm 
      headerText="Sign In for Tracker"
      errorMessage={state.errorMessage}
      submitButtonText="Sign In"
      onSubmit={signin}
    />
    <NavLink 
      routName="Signup"
      text="Don't have an account? Sign Up Instead"
    />
    </View>
  );
};


SigninScreen.navigationOptions = () => {
  return {
    header: () => {
      return null;
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 300
  }
});

export default SigninScreen;