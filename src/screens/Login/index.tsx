import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar } from 'react-native';
import { styles } from "./styles";
export const Login = () => {
    return(
        <View style={styles.container}>
            <StatusBar
        barStyle="light-content" backgroundColor={"#2F4676"}
      />
            <View style={styles.box}>
                <Text style={styles.title}>
                    facebook
                </Text>
                <TextInput style={styles.input} placeholder="email or phone"/>
                <TextInput style={styles.input} placeholder="password"  secureTextEntry={true}/>
                <TouchableOpacity style={styles.button} activeOpacity={0.9} >
                    <Text style={styles.textButton}>Log in</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxSignup}>
                <Text style={styles.textSignup}>
                    Sign up for facebook
                </Text>
            </View>
            
        </View>
    )
}