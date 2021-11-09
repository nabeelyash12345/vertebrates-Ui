import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,

} from "react-native";


export default function Profile({navigation}) {
  

  return (
    <View style={styles.container}>
      
     <Text>MDAStSDRDEL</Text>
      
      

      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#000a32",
    alignItems: "center",
    justifyContent: "center",
  },
  
  
  
  
});
