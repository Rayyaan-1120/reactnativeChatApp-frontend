import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import React, {useState} from 'react';
import {useTheme, Title, TextInput, Button} from 'react-native-paper';
import {InputComponent} from '../../components/input';
import {DarkThemeToggle} from '../../context/toggleTheme';
import {ButtonComponent} from '../../components/button';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { api } from '../../helper/mainapi';
import { SnackBarComponent } from '../../components/snackBar';
import { useUser } from '../../context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const {width, height} = Dimensions.get('window');

const UserLogin = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [empty,setEmpty] = useState(false);
  const [loading,setloading] = useState(false);
  const [error,seterror] = useState(false);
  const [errorMessage, seterrorMessage] = useState("")


  const {colors, fonts, titleFontSize, normalfontSize} = useTheme();

  const {toggle, settoggle} = React.useContext(DarkThemeToggle);

  const {user,setuser} = useUser()

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      const obj = {
        name:userInfo.user.name,
        email:userInfo.user.email,
        photo:userInfo.user.photo,
        googleId:userInfo.user.id
      }

      setloading(true);



      const {data} = await api.post('/api/user/loginwithgoogle',obj)

      if(data){
        AsyncStorage.setItem("user", JSON.stringify(data)).then(() => {
          setloading(false);
          setuser(data)
          navigation.navigate("UserStack")
        }).catch(err => alert(err));
      }

      console.log(userInfo)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        setloading(false)
      alert(error)

        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        setloading(false)
      alert(error)

        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        setloading(false)
      alert(error)

        // play services not available or outdated
      } else {
        setloading(false)
        seterrorMessage(error.message)
        seterror(true)

        // some other error happened
      }
    }
  };

  const haserror = () => {
    if(email.length > 3){
      if(!email.includes('@')) return true
    }

    return false
  }

  console.log(api);

  const login = async () => {
    if(!email || !password) {
      return setEmpty(true)
    }

    setloading(true)

    const obj ={
      email,
      password
    }
    try {
      
    const {data} = await api.post(`api/user/login`,obj)

    if(data){
       AsyncStorage.setItem("user",JSON.stringify(data)).then(() => {
         setloading(false)
         setuser(data)
         navigation.navigate("UserStack")
       }).catch(err => console.log(err))
    }
    } catch (error) {
      console.log(error)
      setloading(false)
      seterror(true)
      seterrorMessage(error.message)
    }


  }


  return (
    <>
    {loading ? (
      <SafeAreaView style={{flex: 1, backgroundColor: colors.background,alignItems:'center',justifyContent: 'center'}}>
        <ActivityIndicator animating color={colors.primary} size="large"/>
      </SafeAreaView>
    ) : (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <SnackBarComponent textcolor={'#fff'} fontSize={normalfontSize} text={'Please Fill All the Fields To Continue'} label="OK" func={() => console.log("heelo")} visible={empty} setVisible={setEmpty} padding={7} bgcolor={'#DC143C'}/>
      <SnackBarComponent textcolor={'#fff'} fontSize={normalfontSize} text={errorMessage} label="OK" func={() => console.log("heelo")} visible={error} setVisible={seterror} padding={7} bgcolor={'#DC143C'}/>
      <ScrollView style={{flex: 1, backgroundColor: colors.background}}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/chatimg.png')}
            style={{width: 180, height: 180}}
          />
          <Title
            style={{
              fontFamily: fonts.medium.fontFamily,
              fontSize: titleFontSize,
              color: colors.text,
            }}>
            Chat Box
          </Title>
          <Title
            style={{
              fontFamily: fonts.medium.fontFamily,
              fontSize: normalfontSize,
              color: colors.text,
              marginTop: 10,
            }}>
            Login Your Account
          </Title>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputcontainerchild}>
            <InputComponent
              placeholder={'email'}
              p={0}
              my={5}
              iconName={'email'}
              state={email}
              setstate={setemail}
              label={'Email'}
            />
            <InputComponent
              placeholder={'password'}
              p={0}
              my={5}
              iconName={'lock'}
              pass={true}
              state={password}
              setstate={setpassword}
              label={'Password'}
            />
            <TouchableOpacity style={styles.forgotpasswordtextcontainer}>
              <Text
                style={{
                  fontFamily: fonts.regular.fontFamily,
                  color: colors.text,
                  fontSize: normalfontSize,
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <ButtonComponent
              textcolor={colors.btntext}
              p={15}
              my={10}
              text={'Login'}
              func={login}
              rippleColor={colors.border}
              bg={colors.primary}
            />

            <View
              style={{
                marginVertical: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: fonts.regular.fontFamily,
                  fontSize: normalfontSize,
                  color: colors.text,
                }}>
                or Continue With
              </Text>
            </View>
            <ButtonComponent
              textcolor={colors.text}
              p={15}
              my={10}
              icon={true}
              text={'Google'}
              func={signIn}
              rippleColor={colors.border}
              bg={colors.background}
              borderWidth={1}
              borderColor={colors.border}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('UserSignup')}
              style={{
                marginVertical: 10,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontFamily: fonts.regular.fontFamily,
                  fontSize: normalfontSize,
                  color: colors.text,
                }}>
                Dont Have an Account Yet
              </Text>
              <Text
                style={{
                  fontFamily: fonts.regular.fontFamily,
                  fontSize: normalfontSize,
                  color: colors.primary,
                  marginHorizontal: 10,
                }}>
                Signup!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    )}
    </>
  );
};

export default UserLogin;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  inputContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 5,
  },
  inputcontainerchild: {
    width: '90%',
  },

  forgotpasswordtextcontainer: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
});
