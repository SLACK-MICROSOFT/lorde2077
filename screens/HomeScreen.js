import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,ImageBackground,ImagePicker} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import ActivityScreen from './ActivityScreen';
const image = { uri: "" };

const App = ()=> (

    <View style={StyleSheet.container}>
        <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}> MyApp </Text>
        </ImageBackground>
    </View>
)
 
export default class HomeScreen extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            FirstName:'',
            LastName:''
            

        }
    }
    render(){
        
        return(
            <View >
           <Header 
           leftComponent={{icon:"Menu",color:'#ffffff' }}
           centerComponent={{text:  'MyApp',style:{color:'ffffff'}}}
          
           >
           
           </Header>
           <Text>
               HomeScreen
           </Text>
           <TouchableOpacity 
             onPress={()=>{
                 this.props.navigation.navigate("ActivityScreen")
             }}

           >

               <Text>ClickMe</Text>
            
           </TouchableOpacity>

           </View>
        )

    
    }


}
