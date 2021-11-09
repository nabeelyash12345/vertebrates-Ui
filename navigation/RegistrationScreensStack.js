import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import SecondScreen from "../screens/SecondScreen";
import HomeScreen from "../screens/HomeScreen";
import Contact from "../screens/contact";
// import slider from "../components/slider"
import Btn from "../components/BgScreen"


const RegistrationStack = createStackNavigator();

const RegistrationScreensStack = ({ navigation, route }) => {
  // if (route.state && route.state.index > 0) {
  //   navigation.setOptions({ tabBarVisible: false });
  // } else {
  //   navigation.setOptions({ tabBarVisible: true });
  // }
  return (
    <RegistrationStack.Navigator>
      <RegistrationStack.Screen
        name="Home"  
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <RegistrationStack.Screen
        name="SecondScreen"
        component={SecondScreen}

        // TabBarOptions:{}
        options={{
          title:" ",
          headerStyle:{
    
          //  backgroundColor:'rgba(255,255,255,0.5)',
          backgroundColor:'rgba(255,255,255,1)',

          // backgroundColor:"red"

          }
        }}
      />
      



      
      
    </RegistrationStack.Navigator>
  );
};

export default RegistrationScreensStack;
