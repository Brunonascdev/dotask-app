import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Constants from '../../utils/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.primaryColor,
  },
  landingText: {
    fontSize: hp('5%'),
    fontFamily: 'Jost Bold',
    color: '#FFF',
  },
  descriptionText: {
    fontFamily: 'Jost Medium',
    fontSize: hp('3%'),
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
    height: hp('50%'),
    position: 'absolute',
    bottom: -40,
    width: wp('100%'),
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
    fontSize: hp('2.8%'),
  },
});
