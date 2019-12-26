# react-native-phone-locked-action

## Getting started
`yarn add react-native-phone-locked-action`

or

`$ npm install react-native-phone-locked-action --save`

## Usage
```javascript
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
```
