import {StyleSheet} from 'react-native';
import Constants from '../../utils/Constants';

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
    fontSize: 28,
    textAlign: 'center',
  },
  alignText: {
    width: Constants.deviceWidth,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: Constants.deviceWidth - 60,
    fontSize: 20,
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
