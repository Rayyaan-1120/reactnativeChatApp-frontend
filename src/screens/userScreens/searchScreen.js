import React,{useState,useEffect} from 'react';
import { FAB, Searchbar, useTheme } from 'react-native-paper';
import {SafeAreaView,View,Text,FlatList,ActivityIndicator} from 'react-native'
import { api } from '../../helper/mainapi';
import { useDebounce } from '../../helper/useDebounce';
import { useUser } from '../../context/userContext';
import SearchUserRow from '../../components/searchUserRow';


const SearchScreen = ({navigation}) => {

    const {colors,fonts} = useTheme()

    const [searchquery,setsearchquery] = useState()
    const [debounced] = useDebounce(searchquery,1000)
    const [loading,setloading] = useState(false)
    const [searchdata,setsearchdata] = useState([])
    const [chatloading,setchatloading] = useState(false)

    const {user,chatCreate,setChatCreate} = useUser()

    useEffect(() => {
     
      if(searchquery !== ""){
          setloading(true)
          api.get(`api/user/getAllUsers?search=${debounced}`,{headers:{Authorization:`Bearer ${user?.token}`}}).then((res) => {
             setloading(false)
             console.log('runned again');
             setsearchdata(res.data.data)
          }).catch(error => {
              setloading(false)
              alert(error.message)
          })
      }
    },[debounced])

    console.log(searchdata,'I am search data')

    const createOrAccessChat = async (name,id) => {
        setchatloading(true)
        navigation.setOptions({headerShown: false})

        const obj = {
            chatName:name,
            userId:id
        }

        try {
          const {data} = await api.post('api/chat/',obj,{headers:{Authorization:`Bearer ${user?.token}`}})
          if(data){
              setchatloading(false)
        navigation.setOptions({headerShown: true})

              setChatCreate(data.data)
              navigation.navigate('HomeScreen')
          }
        } catch (error) {
            setchatloading(false)
            alert(error.message)
        }
        
    }

    return(
        <>
        {chatloading ? (
          <SafeAreaView style={{flex:1,backgroundColor:colors.background,alignItems:"center",justifyContent:"center"}}>
 <View style={{alignItems: 'center',justifyContent: 'center'}}>
                 <ActivityIndicator size={'large'} color={colors.primary}/>
             </View>
          </SafeAreaView>
        ) : (
<SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
            <View style={{alignItems: 'center',justifyContent: 'center'}}>

           <Searchbar 
            placeholder="Search Users"
            style={{marginTop:20,width:'95%',margin:"auto",elevation:3,borderRadius:10}}
            value={searchquery}
            onChangeText={(value) => setsearchquery(value)}
           />
           {loading ? (
             <View style={{alignItems: 'center',justifyContent: 'center',marginTop:20}}>
                 <ActivityIndicator size={'large'} color={colors.primary}/>
             </View>
           ) : (
<FlatList 
            data={searchdata}
            ListEmptyComponent={
                <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                    <Text style={{fontSize:20,fontFamily:fonts.regular.fontFamily,color:colors.text}}>No Users Found</Text>
                </View>
            }
            initialNumToRender={5}
            keyExtractor={(item) => item._id}
            renderItem={({item,index}) => {
                return(
                    <SearchUserRow id={item._id} func={createOrAccessChat} name={item?.name} image={item?.photo} email={item?.email}/>
                )
            }}
           />
           )}
           
          
            </View>
           
        </SafeAreaView>
        )}
        
        </>
    )
}

export default SearchScreen