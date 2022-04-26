import React, {useState, useEffect} from 'react';
import {
  DefaultTheme,
  DarkTheme,
  Provider as PaperProvider,
  configureFonts,
} from 'react-native-paper';
import io from 'socket.io-client';
import {NavigationContainer} from '@react-navigation/native';
import {ToggleContext, DarkThemeToggle} from './src/context/toggleTheme';
import MainNavigator from './src/navigation/mainNavigation';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { UserContext } from './src/context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StatusBar} from 'react-native'


if (!window.location) {
  window.navigator.userAgent = 'ReactNative';
}

const socket = io('http://192.168.0.107:3000', {
  transports: ['websocket'],
});

const fontConfig = {
  android: {
    regular: {
      fontFamily: 'Montserrat-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Montserrat-Bold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Montserrat-Medium',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Montserrat-Light',
      fontWeight: 'normal',
    },
  },
};

const lighttheme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1b9',
    background:'#ffffff',
    accent: '#f1c40f',
    text:'#07070c',
    border:'#A6adb9',
    placeholder: '#A6adb9',
    btntext:'#fff'
  },
  titleFontSize:25,
  normalfontSize:16,
  buttonFontSize:19,
  fonts: configureFonts(fontConfig),
};
const darktheme = {
  ...DarkTheme,
  roundness: 8,
  colors: {
    ...DarkTheme.colors,
    primary: '#1b9',
    background:"#07070C",
    accent: '#222',
    text:'#fff',
    border:'#1b9',
    placeholder: '#fff',
    btntext:'#fff'

  },
  titleFontSize:25,
  normalfontSize:16,
  buttonFontSize:19,
  
  dark: true,
  fonts: configureFonts(fontConfig),
};

const App = () => {


  useEffect(() => {
    GoogleSignin.configure({
      androidClientId: '505810461693-jtqv57fm22oht8innv83aggvqlf1qj6d.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      profileImageSize: 200, // [iOS] The desired height (and width) of the profile image. Defaults to 120px,
      webClientId:"505810461693-i6rm6k491l1suks2643pd0s8ou5mkt5d.apps.googleusercontent.com",
      clientSecret:"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",
      offlineAccess:true
    });
  },[])

  // useEffect(() => {
  //   AsyncStorage.clear().then(() => console.log('cleared'))
  // },[])
  
  const {toggle} = React.useContext(DarkThemeToggle)

  return(
    <PaperProvider theme={toggle ? darktheme : lighttheme}>
            <StatusBar backgroundColor={'#1b9'}/>

      <UserContext>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
      </UserContext>
    </PaperProvider>
  )
  
};

const MainApp = () => {

  return (
    <ToggleContext>
        <App />
    </ToggleContext>
  );
};

export default MainApp;
