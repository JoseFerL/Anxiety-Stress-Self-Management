/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground, KeyboardAvoidingView} from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput';
import SignInBackground from '../../../assets/gif/SignInBackGround.gif';
import CustomButton from '../../components/CustomButton';

const HomeScreen = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('Sign in');
  };

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.root, {height: height}}>
      <ImageBackground source={SignInBackground} style={styles.background}>
        <View style={styles.overlay} />
        <Image source={Logo} style={styles.logo, {height: height * 0.35}} resizeMode="contain" />
        <Text>{"\n"}</Text>
        <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
        <View style={styles.buttonRowContainer}>
          <View style={styles.buttonRowInner}>
            <CustomButton text="Sign Up" onPress={() => navigation.navigate('Sign Up')} type="PRIMARY"/>
            <CustomButton text="Login" onPress={onSignInPressed} type="SECONDARY"/>
          </View>
        </View>
        <CustomButton text= "Forgot Password?" onPress={() => navigation.navigate('Forgot Password')} type="TERTIARY"/>
        <View style={styles.divider}/>
        <CustomButton text="Google" onPress={onSignInPressed} type="GOOGLE"/>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,122,186,0.5)',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  logo: {
    maxWidth: 300,
    maxHeight: 200,
  },
  buttonRowContainer: {
    flexDirection: 'row',
    width: '90%',
    padding: 5,
  },
  buttonRowInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  divider:{
    width: '90%',
    borderBottomWidth: 2,
    borderBottomColor: '#EDE9E9',
    margin: 5,
  },
});

export default HomeScreen;
