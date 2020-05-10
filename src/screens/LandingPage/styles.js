import {StyleSheet} from 'react-native';

import Constants from '../../utils/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.primaryColor,
    justifyContent: 'center',
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
    paddingTop: 15,
  },
  img: {
    marginTop: Constants.deviceHeight / 7,
    width: Constants.deviceWidth,
    height: 230,
  },
  alignButton: {
    width: Constants.deviceWidth,
    alignItems: 'center',
  },
  btn: {
    width: Constants.deviceWidth - 40,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  btnText: {
    color: Constants.primaryColor,
    fontSize: 20,
  },
});
