import React from 'react';
import { Snackbar } from 'react-native-paper';
import {Text} from 'react-native'

export const SnackBarComponent = ({visible,setVisible,padding,bgcolor,wrapperStyle,label,func,fontSize,text,textcolor}) => {
    return(
        <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        style={{backgroundColor:bgcolor,zIndex:50,color:'#fff',paddingVertical:padding}}
        wrapperStyle={{position:'absolute',top:0,left:0,right:0,bottom:0}}
        action={{
          label: label,
          labelStyle:{color:'#ffff'},
          onPress: () => {
            func()
          },
        }}
        >
            <Text style={{color:textcolor,fontSize:fontSize}}>{text}</Text>
        </Snackbar>
    )
}