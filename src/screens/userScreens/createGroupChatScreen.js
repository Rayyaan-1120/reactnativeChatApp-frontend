import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {Divider, useTheme, FAB} from 'react-native-paper';
import SearchUserRow from '../../components/searchUserRow';
import GroupChatHeader from '../../components/createGroupChatHeader';
import {useUser} from '../../context/userContext';
import axios from 'axios';
import {api} from '../../helper/mainapi';

const CreateGroupChatScreen = ({navigation}) => {
  const [searchUsers, setsearchUsers] = useState([]);
  const [mapUsers, setMapUsers] = useState([]);
  const [loading, setloading] = useState(false);
  const [searchquery, setsearchquery] = useState('');
  const [groupMembers, setgroupMembers] = useState([]);
  const [groupChatcreateloading,setgroupChatcreateloading] = useState(false);

  const {user,setchats,chats,setGroupChatData} = useUser();

  console.log(groupMembers);

  useEffect(() => {
    setloading(true);

    api
      .get('api/user/getAllUsers', {
        headers: {Authorization: `Bearer ${user.token}`},
      })
      .then(res => {
        setloading(false);
        setsearchUsers(res.data.data);
        setMapUsers(res.data.data);
      })
      .catch(err => {
        setloading(false);
        alert(err.message);
      });
  }, []);

  useEffect(() => {
    if (searchquery !== '') {
      setMapUsers(
        searchUsers.filter(e => e.name.toLowerCase().includes(searchquery)),
      );
    } else if (searchquery === '') {
      setMapUsers(searchUsers);
    }
  }, [searchquery]);

  const {colors, fonts} = useTheme();

  const createGroupChat = async () => {
    if(groupMembers?.length < 2) {
       return alert('Group Must Have At lease 3 members')
    }

    setgroupChatcreateloading(true)

    var arr = [];

    groupMembers.forEach((mem,ind) => {
      arr.push(mem._id)
    })

    try {

      const obj = {
        users: JSON.stringify(arr),
        name:"new Group Chat"
      }

      const {data} = await api.post('api/chat/groupChat',obj,{headers: {Authorization: `Bearer ${user.token}`}})
      
      if(data){
        setgroupChatcreateloading(false)
        setGroupChatData(data.groupChatData)
        alert('group has been created successfully')
        navigation.navigate('HomeScreen')
      }

    } catch (error) {
      alert(error.message)
    }

    

  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <GroupChatHeader
        navigation={navigation}
        state={searchquery}
        setstate={setsearchquery}
        allusers={mapUsers}
        members={groupMembers}
      />

      {loading ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <ActivityIndicator size={'large'} color={colors.primary} />
        </View>
      ) : (
        <FlatList
          initialNumToRender={10}
          ListHeaderComponent={
            <>
              {groupMembers.length > 0 && (
                <FlatList
                  initialNumToRender={10}
                  keyExtractor={item => item._id}
                  data={groupMembers}
                  horizontal
                  contentContainerStyle={{paddingVertical: 10}}
                  // style={{padding:10}}
                  showsHorizontalScrollIndicator={false}
                  ListEmptyComponent={
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 20,
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontFamily: fonts.regular.fontFamily,
                          color: colors.text,
                        }}>
                        No Users Found
                      </Text>
                    </View>
                  }
                  renderItem={({item, index}) => {
                  

                    return (
                      <>
                        <Animated.View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 12,
                            marginLeft: index === 0 ? 5 : 0,
                          }}>
                          <TouchableOpacity
                            onPress={() => {
                              setgroupMembers(mem =>
                                mem.filter(e => e._id !== item._id),
                              );
                            }}>
                            <Image
                              source={{uri: item.photo}}
                              style={{
                                width: 65,
                                height: 65,
                                borderRadius: 50,
                                borderWidth: 2,
                                borderColor: colors.primary,
                              }}
                            />
                          </TouchableOpacity>
                          <Text style={{flex: 1, width: 40}} numberOfLines={1}>
                            {item.name}
                          </Text>
                        </Animated.View>
                        <Divider />
                      </>
                    );
                  }}
                />
              )}
            </>
          }
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={false}
          data={mapUsers}
          ListEmptyComponent={
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: fonts.regular.fontFamily,
                  color: colors.text,
                }}>
                No Users Found
              </Text>
            </View>
          }
          renderItem={({item, index}) => {
            return (
              <SearchUserRow
                user={item}
                index={index}
                mem={groupMembers}
                setmem={setgroupMembers}
                image={item?.photo}
                email={item?.email}
                name={item?.name}
              />
            );
          }}
        />
      )}

      <FAB
        style={{
          backgroundColor: colors.primary,
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
        }}
        icon="arrow-right"
        color={'#fff'}
        loading={groupChatcreateloading}
        onPress={createGroupChat}
      />
    </SafeAreaView>
  );
};

export default CreateGroupChatScreen;
