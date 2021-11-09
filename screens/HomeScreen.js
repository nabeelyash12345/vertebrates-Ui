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

import BgScreen from "../components/BgScreen"



export default function HomeScreen({ navigation }) {

  const dummydata = [
    {
      id: 1,
      image: require('../assets/groundpic/1.jpg'),
      title: "MUMIE POLSEHORN TIL HALLOWEEN",
      subTitle: 'MADPAKAR',
      timer: "2 timer"
    },
    {
      id: 2,
      image: require('../assets/groundpic/2.jpg'),
      title: "ROGET PAPRIKAVLOMKAL OG  APPLESINSALAT ",
      subTitle: 'TILEBEHOR AFTENSMAD',
      timer: "2 timer",
     

    },
    {
      id: 3,
      image: require('../assets/groundpic/3.jpg'),
      title: "HALLOWEENBOLLER",
      subTitle: 'BROD',
      timer: "2 timer"
    },
    {
      id: 4,
      image: require('../assets/groundpic/4.jpeg'),
      title: "GRESKARBOLLER",
      subTitle: 'MADPAKKE',
      timer: "2 timer"
    },
    {
      id: 5,
      image: require('../assets/groundpic/4.jpeg'),
      title: "GRESKARBOLLER",
      subTitle: 'MADPAKKE',
      timer: "2t 30m"
    },
    {
      id: 6,
      image: require('../assets/groundpic/6.jpg'),
      title: "FYLEDT BAGT HOKKAIDO GRESKAR",
      subTitle: 'AFTENSMAD',
      timer: "1time",

    },
    {
      id: 7,
      image: require('../assets/groundpic/7.jpeg'),
      title: "GRESKARKEAGE",
      subTitle: 'SODE SAGER',
      timer: "1t 30m"
    },
    {
      id: 8,
      image: require('../assets/groundpic/8.jpg'),
      title: "ONE POT PASTA MED KYLLING OG SPINAT",
      subTitle: 'AFTENSMAD ',

      timer: "25 min."
    },
    {
      id: 9,
      image: require('../assets/groundpic/9.jpg'),
      title: "ONE POT PASTA MED KYLLING OG SPINAT",
      subTitle: 'AFTENSMAD ',

      timer: "25 min"

    }

  ]
  return (

    <View style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          {
            dummydata.map((data) => {
              return (
                <View style={styles.bgimage}>
                  <BgScreen Image={data.image} navigation={navigation} title={data.title} timer={data.timer} subTitle={data.subTitle} />
                </View>
              )
            })
          }


        </ScrollView>
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
  bgimage: {
    width: "100%",
    height: 300,
    borderBottomWidth: 4,
    borderTopWidth: 4,
    borderColor: "white"

  },


});
