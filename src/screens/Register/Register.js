import React from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';

import RegisterForm from './RegisterForm';

import styles from './styles';

const Register = props => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.alignTextAndInputs}>
          <Text style={styles.landingText}>
            Bem-vindo ao <Text style={styles.dotaskStyle}>doTask</Text>!
          </Text>
          <Text style={styles.descText}>Crie uma conta para começarmos.</Text>
        </View>
        <View style={styles.formView}>
          <RegisterForm />
          <TouchableOpacity
            style={styles.returnBtn}
            activeOpacity={0.8}
            onPress={() => props.navigation.goBack()}>
            <Text style={styles.returnText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
