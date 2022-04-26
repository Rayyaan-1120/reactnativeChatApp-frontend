import UserSignup from "./userSignup";
import UserLogin from "./userLogin";
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = () => {

    const Stack = createNativeStackNavigator()

    return(
       <Stack.Navigator
       screenOptions={{headerShown:false}}
       >
           <Stack.Screen name="UserLogin" component={UserLogin}/>
           <Stack.Screen name="UserSignup" component={UserSignup}/>
       </Stack.Navigator>
    )
}

export default AuthStack