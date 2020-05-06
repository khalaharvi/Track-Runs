import createDataContext from './createDataContext';
import trackerApi from '../api/authApi';
import {AsyncStorage} from 'react-native';
import { navigate } from '../navigationRef';

const authReducer = ( state, action) => {
  switch(action.type){
    case 'sign_in':
      return { errorMessage: '', token: action.payload};
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: ''}
    case 'sign_out':
      return { token: null, errorMessage: ''};
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if(token) {
    dispatch({ type: 'sign_in', payload: token });
    navigate('TrackList');
  } else {
    navigate('loginFlow');
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message'});
};

const signup = (dispach) =>  async ({ email, password }) =>{
    try {
      const response = await trackerApi.post('/signup', { email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispach({ type: 'sign_in', payload: response.data.token });
      navigate('TrackList');
    } catch(err) {
      dispach({ type: 'add_error', payload: 'Something went wrong with sign up'})
      console.log('err', err.message);
    }
};

const signin = (dispach) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password});
    await AsyncStorage.setItem('token', response.data.token);
    dispach({ type: 'sign_in', payload: response.data.token });
    navigate('TrackList');
  } catch(err) {
    dispach({ type: 'add_error', payload: 'Something went wrong with sign in'})
    
  }
};

const signout = (dispach) => async () =>{
  await AsyncStorage.removeItem('token');
  dispach({ type: 'sign_out'});
  navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {signup, signin, clearErrorMessage, tryLocalSignin, signout},
  { token: null, errorMessage: '' }
);