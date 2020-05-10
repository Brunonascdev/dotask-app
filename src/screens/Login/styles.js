import {StyleSheet} from 'react-native';
import Constants from '../../utils/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    width: 360,
    height: 360,
    marginVertical: -60,
    marginTop: 0,
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
  forgetText: {
    fontFamily: 'Jost Regular',
    fontSize: 16,
    marginVertical: 5,
    color: Constants.primaryColor,
  },
});
