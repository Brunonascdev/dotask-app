import {StyleSheet} from 'react-native';

import Constants from '../../utils/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.primaryColor,
  },
  landingText: {
    fontSize: 40,
    fontFamily: 'Jost Bold',
    lineHeight: 45,
    color: '#FFF',
  },
  descriptionText: {
    fontFamily: 'Jost Medium',
    fontSize: 24,
    color: '#FFF',
  },
  alignText: {
    margin: 20,
    zIndex: 999,
  },
  img: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  alignImg: {
    height: '50%',
    position: 'absolute',
    bottom: -40,
    width: '100%',
    zIndex: 1,
  },
  alignButton: {
    width: Constants.deviceWidth - 40,
    alignSelf: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  btn: {
    width: Constants.deviceWidth - 150,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  btnLogin: {
    alignSelf: 'flex-start',
  },
  btnRegister: {
    alignSelf: 'flex-end',
  },
  btnText: {
    color: Constants.primaryColor,
    fontSize: 20,
  },
});
