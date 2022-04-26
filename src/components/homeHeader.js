import React from 'react';
import {SafeAreaView,Text,View,TouchableOpacity,Image} from 'react-native'
import IonIcon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { useUser } from '../context/userContext';
import { TouchableRipple, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {

    const navigation = useNavigation()

    const {colors,fonts} = useTheme()

    const {user} = useUser()

    return(
        <SafeAreaView style={{backgroundColor:colors.primary,paddingTop:15,paddingBottom:15,paddingHorizontal:15,flexDirection:'row',alignItems: 'center',justifyContent:'space-between',zIndex:5000}}>
            <Text style={{fontSize:22,color:colors.btntext,fontFamily:fonts.light.fontFamily,letterSpacing:0.2}}>Hi {user?.data?.name}</Text>
            <View style={{alignItems: 'center',flexDirection:"row",paddingHorizontal:5}}>
               <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
                   <Feather name="search" color={colors.btntext} size={28}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => console.log('jvndnv')} style={{marginLeft:15,borderRadius:50}}>
                   <IonIcon name="create" color={colors.btntext} size={30}/>
               </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeHeader