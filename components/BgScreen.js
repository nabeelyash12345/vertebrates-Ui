import { StatusBar } from "expo-status-bar";
import React, { Profiler } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  Pressable
} from "react-native";

// import SecondScreen from "../screens/SecondScreen";
import SecondScreen from "../screens/SecondScreen";


import Btn from "./Btn";
export default function BgScreen(props) {
  // const navigate = props.navigation. 
  return (

    <View style={styles.container}>
      <View style={styles.container}>

        <Image
          source={props.Image}
          style={styles.img}
        />
        <View style={{ position: 'absolute', bottom: 1, width: "100%" }}>
          <Btn Title={props.title}  subTitle={props.subTitle} timer={props.timer}  width={props.width} onPress={() => props.navigation.navigate("SecondScreen")}/>
        </View>
        {/* <View style={{position:'absolute',bottom:1,width:"100%"}}><Btn Title="MUMIE POLSEHORN TIL HALLOWEEN"subTitle="MADPAKKE___rrrrrrrrrr"/></View> */}
      </View>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    height: "100%",


  },
  img: {
    width: "100%",
    height: 300,
    position: "absolute",

  },
  


 

});
