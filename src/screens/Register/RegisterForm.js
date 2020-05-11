import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import styles from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
  username: Yup.string()
    .min(5, 'Too short!')
    .max(12, 'Too long!')
    .required('Required'),
});

const RegisterForm = props => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        username: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}>
      {({errors, touched, handleBlur, handleChange, values, handleSubmit}) => (
        <>
          <Input
            style={styles.input}
            iconName="user"
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            value={values.firstName}
            placeholder="Primeiro Nome"
          />
          <Input
            style={styles.input}
            iconName="user"
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            value={values.lastName}
            placeholder="Último Nome"
          />
          <Input
            style={styles.input}
            iconName="mail"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email"
          />
          <Input
            style={styles.input}
            iconName="user"
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
            placeholder="Usuário"
          />
          <Input
            style={styles.input}
            iconName="lock"
            passwordInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            placeholder="Senha"
          />
          <Button style={styles.btn} onPress={handleSubmit}>
            Criar minha conta
          </Button>
        </>
      )}
    </Formik>
  );
};

export default RegisterForm;
