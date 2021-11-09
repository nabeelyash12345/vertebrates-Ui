import { StatusBar } from 'expo-status-bar';
import React ,{ useRef }from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Pressable} from 'react-native';
import ICONS from "react-native-vector-icons/EvilIcons"


export default function Btn({Title, timer, subTitle, onPress,width}) {
      
  return (
    <View style={styles.container}>
        <View style={styles.boder}>
          <Pressable style={styles.btn}
          onPress={onPress}
          >
            <Text style={styles.Title}>{Title}</Text>

            <Text style={styles.subTitle}>{subTitle}</Text>
            
            <View style={{flexDirection:"row"}}>
                 <ICONS
                 name="clock"
                 style={{marginTop:7,marginRight:3}}
                 />
                 <Text style={styles.IconsText}>{timer}</Text>
            </View>
        
           </Pressable>
      
        <View style={styles.oval}></View>

        </View>
     
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  btn:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'rgba(255,255,255,1)',
    opacity:0.98,
    height:60,
    paddingTop:24,
    width:"100%",
    alignSelf:'center',
    zIndex:1,
  },
  oval:{
    width:60,
    alignSelf:"center",
    height:60,
    borderRadius:50,
    backgroundColor:'rgba(255,255,255,1)',
    borderWidth:5,
    borderColor:'rgba(255,255,255,0.5)',
    position:'relative',
    bottom:34,
    transform:[{scaleX:2}]
    
  },
  Title:{
    fontSize:14,
  width:280,
  textAlign:'center',
    zIndex:1,
    color:"black",
    marginTop:2,
    color:'#050404',
    fontFamily:'sans-serif-thin',
  },
  subTitle:{
  textAlign:'center',

    fontSize:11,
    letterSpacing:1,
    marginBottom:2,
    marginTop:3,
    color:'#690a20',
    fontWeight:'bold',
    fontFamily:'sans-serif-thin',
  },
  IconsText:{
    fontSize:12,
  textAlign:'center',
    marginTop:4,
    color:'#050404',
    fontFamily:'sans-serif-thin',
  },
  boder:{
    width:"90%",
    height:70,
    borderWidth:5,
    borderColor:'rgba(255,255,255,0.5)',
    alignSelf:"center",
    position:"absolute",
    bottom:30
  },
});

