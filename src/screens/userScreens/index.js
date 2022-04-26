import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainHomeChatScreen from './mainHomeChatScreen'
import ChatScreen from './chatScreen'
import SearchScreen from './searchScreen'
import CreateGroupChatScreen from './createGroupChatScreen'
import { useTheme } from 'react-native-paper'

const UserScreens = () => {

    const {colors,fonts} = useTheme()

    const Stack = createNativeStackNavigator()

    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='HomeScreen' component={MainHomeChatScreen}/>
            <Stack.Screen name='ChatScreen' component={ChatScreen}/>
            <Stack.Screen name='SearchScreen' component={SearchScreen} options={{headerShown:true,headerTintColor:colors.btntext,headerShadowVisible:false,headerTitle:"Search Users",headerTitleStyle:{fontFamily:fonts.light.fontFamily,marginLeft:-10},headerStyle:{backgroundColor:"#1b9"}}}/>
            <Stack.Screen name='CreateGroupChatScreen' component={CreateGroupChatScreen}/>
        </Stack.Navigator>
    )
}

export default UserScreens