import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTheme } from 'react-native-paper'
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons'

const ChatHeader = ({image,name,navigation}) => {

    const {colors,fonts} = useTheme()

  return (
    <SafeAreaView style={{backgroundColor:colors.primary,alignItems: 'center',flexDirection: 'row',padding:10,justifyContent:"space-between"}}>
     
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <SimpleLineIcon name='arrow-left' size={22} color={'#fff'} style={{marginRight:5}}/>
      </TouchableOpacity>
      <View style={{alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{fontSize:18,fontFamily:fonts.light.fontFamily,color:'#fff'}}>{name}</Text>
          <Text style={{fontSize:14,fontFamily:fonts.light.fontFamily,marginTop:5,color:'#fff'}}>Online</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <MaterialIcon name='dots-vertical' size={30} color={'#fff'} style={{marginRight:5}}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ChatHeader

const styles = StyleSheet.create({})