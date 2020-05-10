import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Constants from './src/utils/Constants';

import Routes from './src/routes/Routes';

const App = props => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Constants.primaryColor} />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
