import React,{useState,useContext,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const User = React.createContext()

export const UserContext = ({children}) => {

    const [user,setuser] = useState(null)
    const [loading,setloading] = useState(false)
    const [chats,setchats] = useState([])
    const [groupChatData,setGroupChatData] = useState(null)
    const [chatCreate,setChatCreate] = useState(null)

    useEffect(() => {
    setloading(true)

    AsyncStorage.getItem("user").then((res) => {
       const data = res != null ? JSON.parse(res) : null
        setuser(data)
        setloading(false)
    }).catch(err => {console.log(err)})
       
    },[])

    console.log(user);

    return(
        <User.Provider value={{user,setuser,loading,chats,setchats,groupChatData,setGroupChatData,chatCreate,setChatCreate}}>
            {children}
        </User.Provider>
    )
}

export const useUser = () => useContext(User)
