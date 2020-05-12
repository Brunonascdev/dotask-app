import React from 'react';
import {View} from 'react-native';
import Lottie from 'lottie-react-native';

import loadingAnimation from '../../../assets/animations/plane.json';

import styles from './styles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.alignImg}>
        <Lottie
          source={loadingAnimation}
          autoPlay
          loop
          style={styles.imgSize}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Loading;
