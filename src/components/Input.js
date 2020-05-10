import React, {useState} from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';
import Constants from '../utils/Constants';

import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Input = props => {
  const [seePass, setSeePass] = useState(false);

  return (
    <View style={styles.alignInput}>
      {props.iconName && (
        <Icon
          name={props.iconName}
          size={20}
          color={Constants.primaryColor}
          style={styles.icon}
        />
      )}
      {props.passwordInput && (
        <TouchableOpacity
          style={styles.viewPass}
          activeOpacity={0.9}
          onPress={() => setSeePass(!seePass)}>
          <Ionicons
            name={seePass ? 'ios-eye' : 'ios-eye-off'}
            size={22}
            color={Constants.primaryColor}
            style={styles.passIcon}
          />
        </TouchableOpacity>
      )}
      {props.passwordInput ? (
        <TextInput
          {...props}
          style={{...styles.input, ...props.style}}
          selectionColor={Constants.primaryColor}
          secureTextEntry={!seePass}
        />
      ) : (
        <TextInput
          {...props}
          style={{...styles.input, ...props.style}}
          selectionColor={Constants.primaryColor}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 3,
    borderBottomWidth: 1.8,
    borderColor: Constants.primaryColor,
    fontFamily: 'Jost Regular',
    zIndex: 1,
  },
  icon: {
    position: 'absolute',
    top: 20,
    zIndex: 999,
  },
  alignInput: {
    flexDirection: 'row',
  },
  viewPass: {
    position: 'absolute',
    width: 25,
    right: 0,
    top: 20,
    zIndex: 999,
  },
});

export default Input;
