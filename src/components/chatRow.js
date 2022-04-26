import React,{useState} from 'react';
import {View,Text,Image,SafeAreaView,TouchableOpacity} from 'react-native';
import { useTheme,Divider } from 'react-native-paper';
import { useUser } from '../context/userContext';

const ChatRow = ({chat,navigation}) => {

    console.log('I am Single CHat',chat);
    const [latestMessage,setlatestMessage] = useState(chat && chat?.latestMessage ? chat?.latestMessage?.content : 'No Recent Messages')

   const {colors,normalfontSize,fonts} = useTheme();    

   const {user} = useUser()

  let arr = chat?.users?.filter(singleuser => singleuser._id !== user?.data?._id)
  console.log(arr, 'I am fil')
  
  
  const getImage = () => {
      var image;
      
      if(arr.length === 1) {
         image = arr[0].photo
      }else{
          image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RlT-ytB9A_TQFLKMqVYpdJiiRbckTCThmw&usqp=CAU"
      }

      return image
  }

  const getName = () => {
      var name;

      if(arr.length === 1) {
         name = arr[0].name
      }else{
          name = chat?.chatName
      }

      return name
  }

//   if(arr.length === 1){
//       setimage(arr[0].photo)
//   }else{
//       setimage('')
//   }

//   console.log(image)

    return(
    <>
   
    <TouchableOpacity onPress={() => navigation.navigate('ChatScreen',{
        chatdata:chat,
        image:getImage(),
        name:getName()
    })}>
       <SafeAreaView style={{paddingVertical:10,paddingHorizontal:5,backgroundColor:colors.background,width:'100%',flexDirection:'row',alignItems: 'center',marginVertical:5,borderRadius:8}}>
         <Image source={{uri:getImage()}} style={{width:70,height:70,borderRadius:50,borderWidth:2,borderColor:colors.primary,}}/>
         <View style={{marginLeft:10,width:'75%'}}>
             <Text style={{fontSize:18,color:colors.text,fontFamily:fonts.light.fontFamily}}>{getName()}</Text>
             <Text style={{fontSize:14,color:colors.placeholder,marginTop:3,letterSpacing:0.4,fontFamily:fonts.regular.fontFamily}}>{latestMessage}</Text>
         </View>
       </SafeAreaView>
        <Divider />
       </TouchableOpacity>
       </>
    )
}

export default ChatRow