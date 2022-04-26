import { SafeAreaView,ScrollView,Text,StyleSheet,Image,View,TouchableOpacity,Dimensions,ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import { useTheme,Title } from 'react-native-paper';
import { InputComponent } from '../../components/input'
import { ButtonComponent } from '../../components/button';
import { useUser } from '../../context/userContext';
import ImageCropPicker from 'react-native-image-crop-picker';
import {api} from '../../helper/mainapi'
import axios from 'axios';
import { SnackBarComponent } from '../../components/snackBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('window');
;

const UserSignup = ({navigation}) => {

  const {colors,fonts,titleFontSize,normalfontSize} = useTheme()

  const [visible, setVisible] = useState(false);
  const [passworderror,setpassworderror] = useState(false)
  const [error,seterror] = useState(false)
  const [errorMessage,seterrorMessage] = useState(false)
  const [loading,setloading] = useState(false)


  const {user,setuser} = useUser()
  console.log(user,'I am user')
  

  const [email, setemail] = useState('');
  const [name,setname] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [image,setimage] = useState('');


  const SubmitRegisteraton = async () => {
    if(!name || !email || !password || !image){
      return setVisible(true)
    }

    if(confirmpassword !== password) {
      return setpassworderror(true)
    }

    setloading(true)

    let base64Img = `data:image/jpg;base64,${image}`;


    // const formdata = new FormData()
    // formdata.append('name',name)
    // formdata.append('email',email)
    // formdata.append('password',password)
    // // formdata.append('image',JSON.stringify(image))
    // formdata.append('image',image);

    // console.log(formdata);
    
    // const senddata = {
    //   formdata,
    //   name:name,
    //   email:email,
    //   password:password
    // }

    // const config = {
    //   method: 'POST',
    //   headers: {
    //    'Accept': 'application/json',
    //    'Content-Type': 'multipart/form-data',
    //   },
    //   body: formdata,
    //  };

//     fetch("http://192.168.0.106:3000/api/user/signup", config)
//  .then((res)=>{       
//    console.log(res.blob());
//  }).then((res) => console.log(res)).catch((err)=>{console.log(err)});\\

   const obj = {
     name,
     email,
     password,
     image:base64Img
   }

    try{
      const {data} = await axios.post('http://192.168.0.106:3000/api/user/signup',obj)

      if(data){
        AsyncStorage.setItem("user",JSON.stringify(data)).then(() => {
          setuser(data)
          setloading(false)
          navigation.navigate("UserStack")
        }).catch(err => alert(err.message))
      }
      
    }catch(err){
      console.log(err)
      setloading(false)
      seterror(true)
      seterrorMessage(err.message)
    }

    
  }

  const showImagePicker = async () => {

    try {
      const result = await ImageCropPicker.openPicker({
        width:500,
        height:500,
        cropping:true,
        mediaType:"photo",
        maxFiles:1,
        includeBase64:true,
      })
  
      console.log(result);
      setimage(result.data)
    } catch (error) {
      alert(error.message)
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
      <SnackBarComponent textcolor={'#fff'} fontSize={normalfontSize} text={'Please Fill All the Fields To Continue'} label="OK" func={() => console.log("heelo")} visible={visible} setVisible={setVisible} padding={7} bgcolor={'#DC143C'} wrapperStyle={{top:10}}/>
      <SnackBarComponent textcolor={'#fff'} fontSize={normalfontSize} text={'Passwords Do Not Match'} label="OK" func={() => console.log("heelo")} visible={passworderror} setVisible={setpassworderror} padding={7} bgcolor={'#DC143C'} wrapperStyle={{top:10}}/>
      <SnackBarComponent textcolor={'#fff'} fontSize={normalfontSize} text={errorMessage} label="Try Again" func={() => console.log("heelo")} visible={error} setVisible={seterror} padding={7} bgcolor={'#DC143C'} wrapperStyle={{top:10}}/>

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
            Register Your Account
          </Title>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputcontainerchild}>
            <InputComponent
              placeholder={'name'}
              p={0}
              my={5}
              iconName={'email'}
              state={name}
              setstate={setname}
              label={'Name'}
              // errorstate={haserror()}
              // helpertext="Name Should be greater than 4 chracters"
            />
            <InputComponent
              placeholder={'Email'}
              p={0}
              my={5}
              iconName={'email'}
              state={email}
              setstate={setemail}
              label={'Email'}
              // errorstate={haserror()}
              // helpertext="Name Should be greater than 4 chracters"
            />
            <InputComponent
              placeholder={'password'}
              p={0}
              my={5}
              iconName={'lock'}
              state={password}
              setstate={setpassword}
              label={'Password'}
              pass={true}
              // errorstate={haserror()}
              // helpertext="Name Should be greater than 4 chracters"
            />
            <InputComponent
              placeholder={'Confirm Password'}
              p={0}
              my={5}
              iconName={'lock'}
              pass={true}
              state={confirmpassword}
              setstate={setconfirmpassword}
              label={'Confirm Password'}
            />
           
           <ButtonComponent
              textcolor={colors.text}
              p={15}
              my={15}
              text={image === "" ? 'Upload Photo' : 'Photo Uploaded'}
              func={showImagePicker}
              rippleColor={colors.border}
              bg={colors.background}
              borderWidth={1}
              borderColor={colors.primary}
            />

            <ButtonComponent
              textcolor={colors.btntext}
              p={15}
              my={10}
              text={'Register'}
              func={SubmitRegisteraton}
              rippleColor={colors.border}
              bg={colors.primary}
            />

            
            <TouchableOpacity
              onPress={() => navigation.navigate('UserLogin')}
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
                Already Have an Account?
              </Text>
              <Text
                style={{
                  fontFamily: fonts.regular.fontFamily,
                  fontSize: normalfontSize,
                  color: colors.primary,
                  marginHorizontal: 10,
                }}>
                Signin!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    )}
    </>
  )
}

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
})

export default UserSignup
