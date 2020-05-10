import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles';
import Constants from '../../utils/Constants';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = props => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Image
          style={styles.imgSize}
          source={require('../../../assets/images/login_img.png')}
          resizeMode="contain"
        />
        <View style={styles.alignText}>
          <Text style={styles.text}>Login</Text>
        </View>
        <View style={styles.alignInputs}>
          <Input style={styles.input} placeholder="Username" iconName="user" />
          <Input
            style={styles.input}
            placeholder="Password"
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
            <Text style={styles.forgetText}>Forget your password?</Text>
          </TouchableOpacity>

          <Button style={styles.btn}>Login</Button>
          <Button style={styles.btn} onPress={() => props.navigation.goBack()}>
            Return
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
