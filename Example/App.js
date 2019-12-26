/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';


import Test from 'react-native-phone-locked-action';

const App: () => React$Node = () => {
  
  const eventEmitter = new NativeEventEmitter(NativeModules.Test);
  
  eventEmitter.addListener('EventReminder', (res) => {
    console.log(res.action); // ACTION_USER_PRESENT || ACTION_SCREEN_OFF || ACTION_SCREEN_ON
  });

  return (
    <>
      
    </>
  );
};

export default App;
