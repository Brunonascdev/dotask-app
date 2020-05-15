import {StyleSheet} from 'react-native';
import Constants from '../../utils/Constants';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  alignForgetPasswordText: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 165,
    justifyContent: 'space-around',
  },
  alignInputsWithMargin: {
    marginBottom: 120,
  },
  imgSize: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  alignImg: {
    height: '50%',
    width: '100%',
  },
  text: {
    fontFamily: 'Jost Light',
    fontSize: hp('4%'),
    textAlign: 'center',
  },
  alignText: {
    width: Constants.deviceWidth,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: Constants.deviceWidth - 60,
    fontSize: hp('2.5%'),
    marginVertical: 8,
  },
  btn: {
    marginVertical: 5,
  },
  returnBtn: {
    alignSelf: 'center',
    marginVertical: 15,
  },
  returnText: {
    textAlign: 'center',
    fontFamily: 'Jost Regular',
    fontSize: hp('2.6%'),
    color: Constants.primaryColor,
    textDecorationLine: 'underline',
  },
  forgetText: {
    fontFamily: 'Jost Regular',
    fontSize: hp('2%'),
    marginVertical: 5,
    color: Constants.primaryColor,
  },
});
