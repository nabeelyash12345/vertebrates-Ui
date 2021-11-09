import React from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity ,Image,Pressable, Alert} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import ICONS from "react-native-vector-icons/EvilIcons"
import * as Amimatable from "react-native-animatable" 

const SecondScreen = () => {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.container1}>
  
                    <ScrollView>

                    <View style={styles.bgimage}>
                        
                  
                  <Image
              source={require('../assets/groundpic/1.jpg')}
              
              style={styles.img}
            />
            
            <View style={{ position: 'absolute', bottom: 1, width: "100%" }}>
            <View style={styles.boder}>
              <Pressable style={styles.btn}
              // onPress={onOpen}
              onPress={()=>console.log('12344')}
              >
                <Text style={styles.Title}>MUMIE POLSEHORN TIL HALLOWEEN</Text>
                <Text style={styles.subTitle}>MADPAKAR</Text>
                <View style={{flexDirection:"row"}}>
                     <ICONS
                     name="clock"
                     style={{marginTop:5,marginRight:3}}
                     />
                     <Text style={styles.IconsText}>2 timer</Text>
                </View>
            
               </Pressable>
          
            <View style={styles.oval}></View>
    
            </View>
            </View>
                
                  </View>
                       <Amimatable.View animation='slideInRight'>
                           <View style={{backgroundColor:'#fff'}}>
                        <View>
                            <View style={styles.header}>
                                <View>
                                    <Text style={{color:'#690a20'}}><Icon name='copy1' />Bskrivlse</Text>

                                </View>
                                <View><Text><Icon name='copy1' />Opskrift</Text></View>
                            </View>
                            <View style={{ width: 180, height: 2, backgroundColor: '#690a20' }}></View>
                        </View>
                        <View style={styles.discrition}>
                            <View style={styles.contant}>
                                <View style={{ marginLeft: 20 }}>
                                    <Text>Antal: <Text style={{ fontWeight: 'bold',color:'black' }}>  16 stk.</Text></Text>
                                </View>
                                <View>
                                    <Text>Arbejdstid: <Text style={{ fontWeight: 'bold',color:'black' }}>30 min.</Text></Text>
                                </View>
                            </View>
                            <View style={styles.contant}>
                                <View style={{ marginLeft: 17 }}>
                                    <Text>Tid i alt: <Text style={{ fontWeight: 'bold',color:'black' }}>2timer</Text></Text>
                                </View>
                                <View>
                                    <Text>Holdbarhed: <Text style={{ fontWeight: 'bold',color:'black' }}>2 dage</Text></Text>
                                </View>
                            </View>
                            <View style={styles.contant}>
                                <View style={{ marginLeft: -5 }} >
                                    <Text style={{marginLeft:-4}}>Opbevrting: <Text style={{ fontWeight: 'bold',color:'black' }}>I Bredksse</Text></Text>
                                </View>
                                <View style={{ paddingRight: 50 }}>
                                    <Text>Kan fryses: <Text style={{ fontWeight: 'bold',color:'black' }}>ja</Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ width: 335, height: 1, backgroundColor: 'black', marginLeft: 10 }}></View>
                        <View style={styles.paragraph}>
                            <View>
                                <Text>HALLOWEEN paisehorn till sjov og ballade i denne herligt{'\n'}(U)hyggelig halloweenuge.</Text>
                            </View>
                            <View>
                                <Text>De er dronlekreogsk till mdpakken,pill {'\n'}halloween festen og at tag mad till hyggele {'\n'}arrangmenter.</Text>
                            </View>
                            <View>
                                <Text>De er ogsa laekre og till at tag efter t er bgtr og ted er{'\n'}et hit at gang portion op og have till madpakkerne,hvor{'\n'}de sode mumi palsejhorn metd sikkerhed bringr simll og{'\n'}hygge fiem i spise pausen.</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{paddingLeft:10}}>
                            <Text style={{ fontWeight: 'bold',color:'black' }}>Tip til Opskriften</Text>
                            </View>
                            <View style={styles.subparagraph}>
                                <View>
                                    <Text style={{fontSize:13}}>
                                        .   De er ogsa laekre og till at tag efter t er bgtr og ted er{'\n'}    et hit at gang portion op og have till madpakkerne,hvor{'\n'}    de sode mumi palsejhorn metd sikkerhed bringr simll og{'\n'}    hygge fiem i spise pausen.
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{fontSize:13}}>
                                        .   De er ogsa laekre palsejhorn metd sikkerhed bringr.
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{fontSize:13}}>
                                        .   De er ogsa laekre og till at tag efter t er bgtr og ted er{'\n'}    et hit at gang portion op og have till madpakkerne,hvor{'\n'}   de sode mumi palsejhorn metd sikkerhed bringr simll og{'\n'}  hygge fiem i spise pausen.
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{fontSize:13}}>
                                        .   De er ogsa laekre og till at tag efter t er bgtr og ted er{'\n'}    et hit at gang portion op og have till madpakkerne,hvor{'\n'}    de sode mumi palsejhorn metd sikkerhed bringr simll {'\n'}   hygge fiem i spise pausen.
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{fontSize:13}}>
                                        .   De er ogsa laekre og till at tag efter t er bgtr og ted er{'\n'}    et hit at gang portion op og have till madpakkerne,hvor{'\n'}    de sode mumi palsejhorn metd sikkerhed bringr simll og{'\n'}    hygge fiem i spise pausen.
                                    </Text>
                                </View>
                            </View>
                            <View style={{width:'90%',height:2,backgroundColor:'gray', marginLeft:10}}></View>
                            <View style={styles.gemern}>
                                <View style={{alignItems:'center',marginTop:20}}>
                                    <Text style={{fontSize:13, textAlign:'center' }}>
                                    Skriv og gem dine helt egne personlige noter tiff opskriften{'\n'}med valdemarsro premium
                                    </Text>
                                </View>
                                <View>
                                 <TouchableOpacity style={{width:80, height:30,backgroundColor:'#690a20',opacity:0.1, borderRadius:30, alignItems:'center', justifyContent:'center', marginLeft:10,top:30,  }} onPress={()=>{Alert.alert("hello")}} >
                                     <Text style={{color:"white"}}>Button</Text>
                                 </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{width:'90%',height:2,backgroundColor:'gray', marginLeft:10}}></View>
                            <View style={{height:200, flexDirection:'row', justifyContent:'space-between', padding:10}}>
                                <View>
                                    <Text>
                                    NAERINGSINDHOLD
                                    </Text>
                                </View>
                                <View>
                                    <Icon name='down'/>
                                </View>
                            </View>
                            
                        </View>
                        </View>
                        </Amimatable.View>
                    </ScrollView>
                </View>

            </View>
        </>
    )
};
export default SecondScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {
        width: "100%",
        height: "100%"

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 60,
        alignItems: 'center'
    },
    contant: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    discrition: {
        height: 130,
        // backgroundColor: 'yellow',
        justifyContent: 'space-around'
    },
    paragraph: {
        height: 225,
        justifyContent: 'space-evenly',
        paddingLeft: 10,
    },
    subparagraph:{
        height:450,
        paddingLeft:10,
        justifyContent:'space-around'
    },
    gemern:{
        width:'100%',
        height:140
    },
    bgimage:{
      width:"100%",
      height:300,
    //   borderBottomWidth:4,
    //   borderTopWidth:4,
      borderColor:"white"
      
    },
  
    img: {
      width: "100%",
      height: 300,
      position: "absolute",
  
    },
    boder:{
      width:"90%",
      height:60,
      borderWidth:5,
      borderColor:'rgba(255,255,255,0.5)',
      alignSelf:"center",
      position:"absolute",
      bottom:30
    },
    btn:{
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:'rgba(255,255,255,1)',
      opacity:0.98,
      paddingTop:25,
      width:"100%",
      alignSelf:'center',
      height:50,
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
      position:"relative",
      bottom:34,
      transform:[{scaleX:2}]
      
    },
    Title: {
        fontSize:14,
  width:280,
  textAlign:'center',
    zIndex:1,
    color:"black",
    marginTop:2,
    color:'#050404',
    fontFamily:'sans-serif-thin',
  
    },
    subTitle: {
      fontSize: 14,
    color:'#690a20',

  
    },
    IconsText: {
      fontSize: 14
    }
});



