import React,{useEffect} from 'react';
import {FAB, useTheme} from 'react-native-paper';
import {View, Text, ScrollView, SafeAreaView, Dimensions,StyleSheet} from 'react-native';
import HomeHeader from '../../components/homeHeader';
import ChatRow from '../../components/chatRow';
import { useUser } from '../../context/userContext';
import { api } from '../../helper/mainapi';

const {width, height} = Dimensions.get('window');

const MainHomeChatScreen = ({navigation}) => {
  const {colors,fonts,normalfontSize,titleFontSize} = useTheme();

  const {user,chats,setchats,groupChatData,chatCreate} = useUser()
  console.log(chats,'I am chats');

  useEffect(() => {
    const options = {
        headers: {
          Authorization:`Bearer ${user.token}`
        },
    }
    api.get('/api/chat/',options).then((res) => setchats(res.data.data)).catch(err => alert(err.message))
  },[groupChatData,chatCreate])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <HomeHeader />
      <ScrollView style={{flex: 1, backgroundColor: colors.background}}
      showsVerticalScrollIndicator={false}
      >
        <View style={{alignItems: 'center', justifyContent: 'center',backgroundColor:colors.background}}>
          <View
            style={{
              width: width / 1,
              flex: 1,
              paddingVertical: 10,
              paddingHorizontal:4,
              marginVertical: 10,
              backgroundColor: colors.background,
              marginHorizontal: 'auto',
            }}>
                <Text style={{marginLeft:12,fontFamily:fonts.light.fontFamily,fontSize:20,color:colors.text}}>Messages</Text>
                {chats.length > 0 ? chats.map((chat,index) => {
                  console.log(chat,'I am');
                  return(
                    <ChatRow key={index} chat={chat} navigation={navigation}/>
                  )
                }) : (
                  <Text>No Chats Found Start A ConverSation</Text>
                )}
                
            </View>
        </View>
      </ScrollView>
        <FAB
      style={[styles.fab,{backgroundColor:colors.primary}]}
    icon="chat-plus"
    color={'#fff'}
    onPress={() => navigation.navigate('CreateGroupChatScreen')}
  />
    </SafeAreaView>
  );
};

export default MainHomeChatScreen;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    
  },
})
