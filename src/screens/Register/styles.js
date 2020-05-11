import {StyleSheet} from 'react-native';

import Constants from '../../utils/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  landingText: {
    fontSize: 28,
    fontFamily: 'Jost Bold',
  },
  dotaskStyle: {
    color: Constants.primaryColor,
  },
  alignTextAndInputs: {
    margin: 25,
  },
  descText: {
    fontFamily: 'Jost Medium',
    fontSize: 22,
  },
  formView: {
    width: Constants.deviceWidth,
    alignItems: 'center',
  },
  input: {
    width: Constants.deviceWidth - 55,
    fontSize: 20,
    marginVertical: 8,
  },
  btn: {
    width: Constants.deviceWidth - 55,
    marginVertical: 15,
  },
  returnText: {
    textAlign: 'center',
    fontFamily: 'Jost Regular',
    fontSize: 18,
    color: Constants.primaryColor,
    textDecorationLine: 'underline',
  },
  forgetText: {
    fontFamily: 'Jost Regular',
    fontSize: 16,
    marginVertical: 5,
    color: Constants.primaryColor,
  },
});
