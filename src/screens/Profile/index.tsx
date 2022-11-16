
import { View, TextInput, TouchableOpacity, Text, ImageBackground, Image,StatusBar } from "react-native"
import { styles } from "./styles";

import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/Fontisto'
import Icon2 from 'react-native-vector-icons/Ionicons'
import React from "react";

import coringa from '../../assets/img/coringa.jpg'
import squid from '../../assets/img/squid.jpg'
export const Profile = () => {

    return (
        <View style={styles.container}>
            <StatusBar
        barStyle="light-content" 
        
      />
            <View style={styles.searchBar}>
                
                <View style={styles.buttonBack} >
                <TouchableOpacity><Icon name='arrowleft'size={25} style={styles.icone}/>
                </TouchableOpacity>
                    
                </View>
                <View style={styles.boxInput} > 
                    <Icon name='search1' size={25} style={styles.icone} />
                    <TextInput style={styles.inputSearch}/>
                </View>
            </View>
            <View style={styles.backgroundImg}>
                <ImageBackground source={coringa} style={styles.image}></ImageBackground>
                <View style={styles.boxImg}>
                    <Image source={squid} style={styles.imageProfile}/>
                </View>
                <Text style={styles.textProfile}>Anonymous</Text>
            </View>
            <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                width: 400,
                marginTop: 15
            }}
            />
            <View style={styles.pageButtons}>
                <View style={styles.boxButtons}>
                    <Icon1 name='messenger' size={45}/>
                </View>
                <View style={styles.boxButtons}> 
                    <Icon2 name='ellipsis-horizontal-circle' size={50}/>
                </View>
            </View>
            <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                width: 400,
                marginTop: 15
            }}
            />
            <View style={styles.informationsView}> 
            <Text style={styles.textInformations}>Idade:</Text>
            <Text style={styles.textInformations}>Relacionamento:</Text>
            </View>
            
            <View style={styles.barBottom}>
            <TouchableOpacity><Text>ABOUT</Text></TouchableOpacity>
              <TouchableOpacity><Text>PHOTOS</Text></TouchableOpacity>  
               <TouchableOpacity><Text>FRIENDS</Text></TouchableOpacity> 
            </View>
        </View>
    )
}