import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Ripple from 'react-native-material-ripple';

import Constants from '../utils/Constants';

const Button = props => {
  return (
    <Ripple
      style={{...styles.btn, ...props.style}}
      onPress={props.onPress}
      rippleContainerBorderRadius={50}>
      <Text style={{...styles.text, ...props.textStyle}}>{props.children}</Text>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 12,
    backgroundColor: Constants.primaryColor,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Jost Regular',
    fontSize: 18,
    color: '#fff',
  },
});

export default Button;
