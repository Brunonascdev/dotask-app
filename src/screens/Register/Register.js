import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import RegisterForm from './RegisterForm';

import styles from './styles';

const Register = props => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <View style={styles.alignTextAndInputs}>
          <Text style={styles.landingText}>
            Welcome to <Text style={styles.dotaskStyle}>doTask</Text>!
          </Text>
          <Text style={styles.descText}>
            Create an account and boost your productivity!
          </Text>
        </View>
        <View style={styles.formView}>
          <RegisterForm />
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
