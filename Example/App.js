/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NativeEventEmitter, NativeModules } from 'react-native';
import PhoneLocked from 'react-native-phone-locked-action';

const App: () => React$Node = () => {

  const eventEmitter = new NativeEventEmitter(NativeModules.PhoneLocked);

  eventEmitter.addListener('EventReminder', (res) => {
    console.log(res.action); // ACTION_USER_PRESENT || ACTION_SCREEN_OFF || ACTION_SCREEN_ON
  });

  return (
    <>

    </>
  );
};

export default App;
