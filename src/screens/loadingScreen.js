import React from 'react';
import {SafeAreaView,ActivityIndicator} from 'react-native'

import { useTheme } from 'react-native-paper';

const LoadingScreen = () => {

    const {colors} = useTheme()
    
    return (
      <SafeAreaView style={{flex:1,alignItems: 'center',justifyContent: 'center',backgroundColor:colors.background}}>
          <ActivityIndicator size={'large'} color={colors.primary}/>
      </SafeAreaView>
    )
}

export default LoadingScreen