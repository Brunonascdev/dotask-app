import React from 'react';
import {View, Text, Image} from 'react-native';

import Button from '../../components/Button';

import styles from './styles';

const LandingPage = props => {
  return (
    <View style={styles.container}>
      <View style={styles.alignText}>
        <Text style={styles.landingText}>Log in or create an account.</Text>
        <Text style={styles.descriptionText}>
          with doTask you can get organized yourself in an elegant way!
        </Text>
      </View>
      <View style={styles.alignButton}>
        <Button
          style={styles.btn}
          onPress={() => props.navigation.navigate('Login')}
          textStyle={styles.btnText}>
          Login
        </Button>
        <Button
          style={styles.btn}
          onPress={() => props.navigation.navigate('Register')}
          textStyle={styles.btnText}>
          Register
        </Button>
      </View>
      <Image
        source={require('../../../assets/images/landing_page.png')}
        style={styles.img}
      />
    </View>
  );
};

export default LandingPage;
