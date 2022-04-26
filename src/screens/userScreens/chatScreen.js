import { StyleSheet, Text, View,SafeAreaView,ScrollView,KeyboardAvoidingView,TextInput,TouchableOpacity } from 'react-native'
import React,{useRef} from 'react'
import { useTheme } from 'react-native-paper'
import ChatHeader from '../../components/chatHeader'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const ChatScreen = ({navigation,route}) => {

    const {chatdata,name,image} = route.params
    console.log(chatdata,name,image)

    const {colors,fonts} = useTheme()

    const scrollViewRef = useRef();


  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
        <ChatHeader image={image} name={name} navigation={navigation}/>
        <ScrollView style={{flex:1,backgroundColor:colors.background}}
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        >
           <View style={{alignSelf:'flex-start',borderRadius:15,paddingVertical:2,marginLeft:5,paddingHorizontal:12,maxWidth:370,backgroundColor:'#E5E5E5',flexDirection:'row',marginVertical:8}}>
             <Text style={{paddingHorizontal:10,paddingVertical:3,fontFamily:fonts.light.fontFamily,color:colors.text,fontSize:16,lineHeight:22}}>This is a very Nice text vjojvoejg djvoevjoj iwhiwf vj nnnv oj iwhiwf vjoj iwhiwf v knknwf vnvnvn joj iwhiw  mlmmdovm mvvmeof</Text>
             <Text style={{fontFamily:fonts.light.fontFamily,color:colors.text,fontSize:14,alignSelf:'flex-end',position:'absolute',width:50,bottom:5,right:5}}>11:06</Text>
           </View>
           <View style={{alignSelf:'flex-end',borderRadius:15,paddingVertical:2,marginRight:5,paddingHorizontal:12,maxWidth:370,backgroundColor:colors.primary,flexDirection:'row',marginVertical:8}}>
             <Text style={{paddingHorizontal:10,paddingVertical:3,fontFamily:fonts.light.fontFamily,color:colors.btntext,fontSize:16,lineHeight:22}}>jojvoejg djvo iwhiwf v knknwf vnvnvn joj iwhiw  mlmmdovm mvvmeof</Text>
             <Text style={{fontFamily:fonts.light.fontFamily,color:colors.btntext,fontSize:14,alignSelf:'flex-end',position:'absolute',width:50,bottom:5,right:5}}>11:06</Text>
           </View>
           <View style={{alignSelf:'flex-start',borderRadius:15,paddingVertical:2,marginLeft:5,paddingHorizontal:12,maxWidth:370,backgroundColor:'#E5E5E5',flexDirection:'row',marginVertical:8}}>
             <Text style={{paddingHorizontal:10,paddingVertical:3,fontFamily:fonts.light.fontFamily,color:colors.text,fontSize:16,lineHeight:22}}>This is a very Nice text vjojvoejg djvoevjoj iwhiwf vj nnnv oj iwhiwf vjoj iwhiwf v knknwf vnvnvn joj iwhiw  mlmmdovm mvvmeof</Text>
             <Text style={{fontFamily:fonts.light.fontFamily,color:colors.text,fontSize:14,alignSelf:'flex-end',position:'absolute',width:50,bottom:5,right:5}}>11:06</Text>
           </View>
           <View style={{alignSelf:'flex-end',borderRadius:15,paddingVertical:2,marginRight:5,paddingHorizontal:12,maxWidth:370,backgroundColor:colors.primary,flexDirection:'row',marginVertical:8}}>
             <Text style={{paddingHorizontal:10,paddingVertical:3,fontFamily:fonts.light.fontFamily,color:colors.btntext,fontSize:16,lineHeight:22}}>jojvoejg djvo iwhiwf v knknwf vnvnvn joj iwhiw  mlmmdovm mvvmeof</Text>
             <Text style={{fontFamily:fonts.light.fontFamily,color:colors.btntext,fontSize:14,alignSelf:'flex-end',position:'absolute',width:50,bottom:5,right:5}}>11:06</Text>
           </View>
           <View style={{alignSelf:'flex-start',borderRadius:15,paddingVertical:2,marginLeft:5,paddingHorizontal:12,maxWidth:370,backgroundColor:'#E5E5E5',flexDirection:'row',marginVertical:8}}>
             <Text style={{paddingHorizontal:10,paddingVertical:3,fontFamily:fonts.light.fontFamily,color:colors.text,fontSize:16,lineHeight:22}}>This is a very Nice text vjojvoejg djvoevjoj iwhiwf vj nnnv oj iwhiwf vjoj iwhiwf v knknwf vnvnvn joj iwhiw  mlmmdovm mvvmeof</Text>
             <Text style={{fontFamily:fonts.light.fontFamily,color:colors.text,fontSize:14,alignSelf:'flex-end',position:'absolute',width:50,bottom:5,right:5}}>11:06</Text>
           </View>
           <View style={{alignSelf:'flex-end',borderRadius:15,paddingVertical:2,marginRight:5,paddingHorizontal:12,maxWidth:370,backgroundColor:colors.primary,flexDirection:'row',marginVertical:8}}>
             <Text style={{paddingHorizontal:10,paddingVertical:3,fontFamily:fonts.light.fontFamily,color:colors.btntext,fontSize:16,lineHeight:22}}>jojvoejg djvo iwhiwf v knknwf vnvnvn joj iwhiw  mlmmdovm mvvmeof</Text>
             <Text style={{fontFamily:fonts.light.fontFamily,color:colors.btntext,fontSize:14,alignSelf:'flex-end',position:'absolute',width:50,bottom:5,right:5}}>11:06</Text>
           </View>
           <View style={{alignSelf:'flex-start',borderRadius:15,paddingVertical:2,marginLeft:5,paddingHorizontal:12,maxWidth:370,backgroundColor:'#E5E5E5',flexDirection:'row',marginVertical:8}}>
             <Text style={{paddingHorizontal:10,paddingVertical:3,fontFamily:fonts.light.fontFamily,color:colors.text,fontSize:16,lineHeight:22}}>This is a very Nice text vjojvoejg djvoevjoj iwhiwf vj nnnv oj iwhiwf vjoj iwhiwf v knknwf vnvnvn joj iwhiw  mlmmdovm mvvmeof</Text>
             <Text style={{fontFamily:fonts.light.fontFamily,color:colors.text,fontSize:14,alignSelf:'flex-end',position:'absolute',width:50,bottom:5,right:5}}>11:06</Text>
           </View>
           <View style={{alignSelf:'flex-end',borderRadius:15,paddingVertical:2,marginRight:5,paddingHorizontal:12,maxWidth:370,backgroundColor:colors.primary,flexDirection:'row',marginVertical:8}}>
             <Text style={{paddingHorizontal:10,paddingVertical:3,fontFamily:fonts.light.fontFamily,color:colors.btntext,fontSize:16,lineHeight:22}}>jojvoejg djvo iwhiwf v knknwf vnvnvn joj iwhiw  mlmmdovm mvvmeof</Text>
             <Text style={{fontFamily:fonts.light.fontFamily,color:colors.btntext,fontSize:14,alignSelf:'flex-end',position:'absolute',width:50,bottom:5,right:5}}>11:06</Text>
           </View>
           <View style={{alignSelf:'flex-start',borderRadius:15,paddingVertical:2,marginLeft:5,paddingHorizontal:12,maxWidth:370,backgroundColor:'#E5E5E5',flexDirection:'row',marginVertical:8}}>
             <Text style={{paddingHorizontal:10,paddingVertical:3,fontFamily:fonts.light.fontFamily,color:colors.text,fontSize:16,lineHeight:22}}>This is a very Nice text vjojvoejg djvoevjoj iwhiwf vj nnnv oj iwhiwf vjoj iwhiwf v knknwf vnvnvn joj iwhiw  mlmmdovm mvvmeof</Text>
             <Text style={{fontFamily:fonts.light.fontFamily,color:colors.text,fontSize:14,alignSelf:'flex-end',position:'absolute',width:50,bottom:5,right:5}}>11:06</Text>
           </View>
           <View style={{alignSelf:'flex-end',borderRadius:15,paddingVertical:2,marginRight:5,paddingHorizontal:12,maxWidth:370,backgroundColor:colors.primary,flexDirection:'row',marginVertical:8}}>
             <Text style={{paddingHorizontal:10,paddingVertical:3,fontFamily:fonts.light.fontFamily,color:colors.btntext,fontSize:16,lineHeight:22}}>jojvoejg djvo iwhiwf v knknwf vnvnvn joj iwhiw  mlmmdovm mvvmeof</Text>
             <Text style={{fontFamily:fonts.light.fontFamily,color:colors.btntext,fontSize:14,alignSelf:'flex-end',position:'absolute',width:50,bottom:5,right:5}}>11:06</Text>
           </View>
        </ScrollView>
          <KeyboardAvoidingView>
        <SafeAreaView style={{position: 'absolute',bottom: 0,left: 0,right: 0,width:"100%",backgroundColor:colors.background,padding:10,flexDirection:'row',alignItems: 'center',justifyContent: 'space-between'}}>
          <TouchableOpacity>
           <MaterialIcon name='wallpaper' color={colors.primary} size={28}/>
          </TouchableOpacity>
           <TextInput 
           placeholder='Type Something'
           placeholderTextColor={'#dadada'}
           selectionColor={colors.primary}
           onFocus={() => scrollViewRef.current.scrollToEnd({ animated: true })}
           style={{backgroundColor:colors.background,fontFamily:fonts.regular.fontFamily,color:colors.text,width:"80%",paddingHorizontal:12,paddingVertical:5,borderRadius:20,fontSize:16}}
           />
           <TouchableOpacity>
           <MaterialIcon name='send' color={colors.primary} size={28}/>

          </TouchableOpacity>
        </SafeAreaView>
          </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ChatScreen
