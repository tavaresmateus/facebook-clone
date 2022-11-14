import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";
export const Login = () => {
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>
                    facebook
                </Text>
                <TextInput style={styles.input} placeholder="email or phone"/>
                <TextInput style={styles.input} placeholder="password"/>
                <TouchableOpacity style={styles.button}>
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