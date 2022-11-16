import { Platform, StyleSheet, TouchableWithoutFeedback } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column'
    },
    searchBar:{
        backgroundColor: '#3C5996',
        paddingHorizontal: 10,
        width: 450,
        height: 60,
        flexDirection: 'row',
        alignItems:'center'
    },
    buttonBack:{

        width: '10%'
    },
    boxInput:{
        width: '100%',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row'
    },
    inputSearch:{
        width: '90%',
        marginLeft: 10,
        color: 'white',
        fontSize: 18
    },
    icone:{
        color: '#fff'
    },
    backgroundImg:{
        backgroundColor: 'grey',
        width: 100,
        
        justifyContent:'center',
        alignItems: 'center'
    },
    image:{
        color: 'red',
        width: 500, 
        height: 250,
    },
    boxImg:{
        backgroundColor:'#C2D0EE',
        borderWidth: 3,
        borderColor: 'white',
        width: 150,
        height: 150,
        position: "absolute",
        top: 150,
        
    },
    imageProfile:{
        width:142,
        height: 142
    },
    textProfile:{
        marginTop: 50,
        backgroundColor: 'white',
        fontSize: 20,
        borderColor:'white',
        width: 120
    },
    pageButtons:{
        marginTop: 20 ,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    boxButtons:{
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    informationsView:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '80%',
        marginTop: 10,
    },
    textInformations:{
        marginTop: 10,
        fontSize: 25,
        color: 'grey'
    },
    barBottom:{
        flex: 1,
        flexDirection: "row",
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#F2F2F4',
        width: '100%',
        padding: 20,
        justifyContent: 'space-around'
    }
})