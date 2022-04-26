import React from 'react';
import { Text, TouchableRipple, useTheme } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign'

export const ButtonComponent = ({p,my,text,func,rippleColor,bg,borderWidth,borderColor,icon,textcolor}) => {

    const {colors,buttonFontSize,fonts,roundness} = useTheme()

    return(
        <TouchableRipple
        onPress={func}
        rippleColor={rippleColor}
        style={{
            padding:p,
            backgroundColor:bg,
            marginVertical:my,
            width:'100%',
            alignItems: 'center',
            justifyContent:'center',
            borderRadius:roundness,
            borderColor:borderColor,
            borderWidth:borderWidth,
            flexDirection:'row'
        }}
        >
            <>
            {icon && (
                <AntDesign style={{marginRight:8}} name='google' color={colors.primary} size={25}/>
            )}
            <Text
            style={{
                fontSize:buttonFontSize,
                fontFamily:fonts.medium.fontFamily,
                color:textcolor
            }}
            >{text}</Text>
            </>
            
        </TouchableRipple>
    )

}
