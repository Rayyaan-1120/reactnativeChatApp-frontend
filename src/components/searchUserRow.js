import React,{useState} from 'react';
import {TouchableOpacity,SafeAreaView,Text,View,Image} from 'react-native'
import { useTheme,Divider, Badge } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'


const SearchUserRow = ({image,name,email,mem,setmem,user,index,group,func,id}) => {

    const {colors,normalfontSize,fonts} = useTheme();
    

    return(
        <TouchableOpacity onPress={() => group ? setmem([...mem,user]) : func(name,id)}>
           <SafeAreaView style={{paddingVertical:10,paddingHorizontal:5,backgroundColor:colors.background,width:'100%',flexDirection:'row',alignItems: 'center',marginVertical:5,borderRadius:8}}>
             <Image source={{uri:image}} style={{width:60,height:60,borderRadius:50,borderWidth:2,borderColor:colors.primary,}}/>
             <View style={{marginLeft:10,width:'75%'}}>
                 <Text style={{fontSize:16,color:colors.text,fontFamily:fonts.light.fontFamily}}>{name}</Text>
                 <Text style={{fontSize:12,color:colors.placeholder,marginTop:3,letterSpacing:0.4,fontFamily:fonts.regular.fontFamily}}>{email}</Text>
             </View>
           </SafeAreaView>
            <Divider />
           </TouchableOpacity>
    )

}

export default SearchUserRow