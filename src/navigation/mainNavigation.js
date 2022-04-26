import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "../screens/authScreens";
import React from "react"
import UserScreens from "../screens/userScreens";
import { useUser } from "../context/userContext";
import LoadingScreen from "../screens/loadingScreen";


const MainNavigator = () => {
    const Stack = createNativeStackNavigator()

    const {user,loading} = useUser()

    return(
        <Stack.Navigator
        screenOptions={{headerShown:false}}
        >
            {loading ? (
                
                <Stack.Screen name="LoadingScreen" component={LoadingScreen}/>
                ) : user ? (
             <Stack.Screen name="UserStack" component={UserScreens}/>

            ) : (
             <Stack.Screen name="AuthStack" component={AuthStack}/>
            )}
        </Stack.Navigator>
       
    )
}

export default MainNavigator