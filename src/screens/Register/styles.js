import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Constants from '../../utils/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  landingText: {
    fontSize: hp('4%'),
    fontFamily: 'Jost Bold',
    textAlign: 'center',
  },
  dotaskStyle: {
    color: Constants.primaryColor,
  },
  descText: {
    fontFamily: 'Jost Medium',
    fontSize: hp('3%'),
  },
  formView: {
    width: Constants.deviceWidth,
    alignItems: 'center',
  },
  input: {
    width: Constants.deviceWidth - 55,
    fontSize: hp('2.5%'),
    marginVertical: 8,
  },
  btn: {
    width: Constants.deviceWidth - 55,
    marginVertical: 15,
  },
  returnText: {
    textAlign: 'center',
    fontFamily: 'Jost Regular',
    fontSize: hp('2.8%'),
    color: Constants.primaryColor,
    textDecorationLine: 'underline',
  },
});
