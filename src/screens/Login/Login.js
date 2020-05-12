import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Lottie from 'lottie-react-native';

import loginAnimation from '../../../assets/animations/loginAnimation.json';

import styles from './styles';
import Constants from '../../utils/Constants';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = props => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={styles.alignImg}>
          <Lottie
            source={loginAnimation}
            autoPlay
            loop
            style={styles.imgSize}
            resizeMode="contain"
          />
        </View>
        <View style={styles.alignText}>
          <Text style={styles.text}>Entrar</Text>
        </View>
        <View style={styles.alignInputs}>
          <Input style={styles.input} placeholder="Usuário" iconName="user" />
          <Input
            style={styles.input}
            placeholder="Senha"
            iconName="lock"
            passwordInput
          />
          <TouchableOpacity
            style={styles.alignForgetPasswordText}
            activeOpacity={0.6}>
            <Icon
              name="controller-stop"
              size={5}
              color={Constants.primaryColor}
            />
            <Text style={styles.forgetText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <Button style={styles.btn}>Entrar</Button>
          <TouchableOpacity
            style={styles.returnBtn}
            activeOpacity={0.8}
            onPress={() => props.navigation.goBack()}>
            <Text style={styles.returnText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
