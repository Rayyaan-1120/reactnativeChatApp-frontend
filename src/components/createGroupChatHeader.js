import React,{useState} from 'react';
import {SafeAreaView,View,Text,TouchableOpacity,TextInput} from 'react-native'
import { useTheme } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'

const GroupChatHeader = ({navigation,state,setstate,allusers,members}) => {

    const {colors,fonts,normalfontSize} = useTheme()
    const [show,setshow] = useState(false)

    return(
        <SafeAreaView style={{alignItems: 'center',flexDirection: 'row',justifyContent:'space-between',padding:8,backgroundColor:colors.primary}}>
           <View style={{alignItems: 'center',flexDirection:'row'}}>
           <TouchableOpacity onPress={() => navigation.goBack()}>
                   <MaterialIcon name="arrow-left" color={colors.btntext} size={28}/>
           </TouchableOpacity>
           {show ? (
               <TextInput 
                style={{padding:5,width:"75%",fontSize:18,fontFamily:fonts.light.fontFamily,color:colors.btntext,marginLeft:8}}
                autoFocus
                selectionColor={'#fff'}
                value={state}
                onChangeText={(value) => setstate(value)}
               />
           ) : (
            <View style={{marginLeft:12}}>
                  <Text style={{fontSize:18,fontFamily:fonts.light.fontFamily,color:colors.btntext}}>Group Chat</Text>
                  <Text style={{fontSize:normalfontSize,fontFamily:fonts.regular.fontFamily,color:colors.btntext}}>{members.length > 0 ? `${members.length} of ${allusers.length} selected` : 'Add Participant'}</Text>
              </View>
           )}   
           </View>
           <TouchableOpacity style={{marginRight:6}} onPress={() => setshow(!show)}>
                   <Feather name="search" color={colors.btntext} size={28}/>
           </TouchableOpacity>
        </SafeAreaView>
    )
}

export default GroupChatHeader