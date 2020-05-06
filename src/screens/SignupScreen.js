import React, { useContext } from 'react';
import { View, StyleSheet} from 'react-native';
import NavLink from '../components/Navlink';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  
  
  
  return(
    <View style={styles.container}>
      <NavigationEvents 
        onWillBlur={clearErrorMessage}
      />
    <AuthForm 
      headerText="Sign Up for Tracker"
      errorMessage={state.errorMessage}
      submitButtonText="Sign Up"
      onSubmit={signup}
    />
    <NavLink 
      routName="Signin"
      text="Already have an account? Sign In Instead"
    />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;