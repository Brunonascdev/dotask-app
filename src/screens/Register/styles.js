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
});
