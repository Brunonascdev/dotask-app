import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';

import Lottie from 'lottie-react-native';

import landing from '../../../assets/animations/landing.json';

import Button from '../../components/Button';

import styles from './styles';

import Icon from 'react-native-vector-icons/Feather';

const LandingPage = props => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.alignText}>
        <Text style={styles.landingText}>Entre ou crie uma conta</Text>
        <Text style={styles.descriptionText}>
          com o doTask você da um boost na sua produtividade de maneira
          elegante!
        </Text>
      </View>
      <View style={styles.alignButton}>
        <Button
          style={{...styles.btn, ...styles.btnLogin}}
          onPress={() => props.navigation.navigate('Login')}
          textStyle={styles.btnText}>
          <Icon name="chevron-left" size={15} />
          Entrar
        </Button>
        <Button
          style={{...styles.btn, ...styles.btnRegister}}
          onPress={() => props.navigation.navigate('Register')}
          textStyle={styles.btnText}>
          Registrar-se
          <Icon name="chevron-right" size={15} />
        </Button>
      </View>
      <View style={styles.alignImg}>
        <Lottie
          source={landing}
          autoPlay
          loop
          style={styles.imgSize}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
};

export default LandingPage;
