import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import RegistrationStack  from "../navigation/RegistrationScreensStack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Setting from '../screens/Setting';
import Add from '../screens/Add';
import Date from '../screens/Date';
import Profile from '../screens/Profile';


import ICONS from "react-native-vector-icons/EvilIcons"
import ICONS1 from "react-native-vector-icons/SimpleLineIcons"
import ICONS2 from "react-native-vector-icons/Octicons"



const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator
    tabBarOptions={{
        showLabel:false,
        style:{
          position:"absolute",
        
          elevation:0,
          backgroundColor:"white",
          alignItems:"flex-start",
          
        
        
          height:70
        }
      }}
    
    >

<Tab.Screen name="Home" component={RegistrationStack} 
        options={{
          tabBarIcon:({focused})=>(
           <View style={{alignItems:"center",justifyContent:"center"}}>
            <ICONS2
            name="book"
            color="#690a20"
              

            size={30}
            />

            <Text style={{color:"#690a20"}}>Opskrifter</Text>
           </View>
          ),
        }}/>
       
         <Tab.Screen name="Date" component={Date} 
        options={{
            
          tabBarIcon:({focused})=>(
            <View style={{alignItems:"center",justifyContent:"center"}}>
             <ICONS
             name="calendar"
             size={41}
             color="gray"
             
             
             />
             <Text>Modplan</Text>
            </View>
           ),
                  
        }}/>

<Tab.Screen name="add" component={Add} options={{
          tabBarIcon:({focused})=>(
            <View style={{alignItems:"center",justifyContent:"center"}}>
              
              <ICONS
              name="heart"
              size={41}
              color="gray"
              />
              <Text>favorater</Text>
            </View>
           ),
        }}/>



<Tab.Screen name="Profile" component={Profile}  options={{ 

headerShown:false,
tabBarIcon:({focused})=>(
  <View style={{alignItems:"center",justifyContent:"center"}}>
    <ICONS1
    name="notebook"
    size={26}
   color="gray"
    
    />
    <Text>Mdastsdrdel</Text>
  </View>
 ),
}}/>
 {/* <Tab.Screen name="Setting" component={Setting} options={{
          tabBarIcon:({focused})=>(
            <View style={{alignItems:"baseline",justifyContent:"center"}}>
             <ICONS2
             name="person-circle-outline"
             size={30}
             color="gray"
             />
              
            </View>
           ),
        }}/> */}
      


      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
