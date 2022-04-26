import { useTheme,TextInput,HelperText } from "react-native-paper";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'
import {View} from 'react-native'

export const InputComponent = ({p,my,state,setstate,iconName,placeholder,label,pass,errorstate,helpertext}) => {

    const {colors,roundness,normalfontSize} = useTheme()

    return(
      <View>
        <TextInput
        mode="outlined"
        theme={{roundness:8}}
        label={label}
        error={errorstate}
        outlineColor={colors.border}
        activeOutlineColor={colors.primary}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        value={state}
        secureTextEntry={pass}
        left={<TextInput.Icon name={iconName} color={colors.border}/>}
        onChangeText={(value) => setstate(value)}
        style={{
          padding:p,
          marginVertical:my,
          fontSize:normalfontSize,
          color:colors.text,
          borderRadius:50,
        }}
        />
        {errorstate && (
        <HelperText type="error" visible={errorstate} style={{fontWeight:"bold",fontSize:12}}>
          {helpertext}
        </HelperText>
        )}
      </View>
    )
}