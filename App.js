
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';

import MainScreen from './src/Screen';
import store from './src/store';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          <MainScreen />
        </Provider>
      </SafeAreaView>
    </>
  );
};
export default App;
