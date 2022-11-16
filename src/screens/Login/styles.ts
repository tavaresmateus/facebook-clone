import { Platform, StyleSheet,} from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3C5996',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box:{
      paddingBottom: 150,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title:{
      color: '#fff',
      fontSize: 55,
      fontWeight: "800",
      marginBottom: 30,       
    },
    input: {
      width: 370,
      backgroundColor:'#fff',
      color: 'black',
      fontSize: 18,
      padding: Platform.OS === 'ios' ? 15 : 15,
      marginTop: 20,
      borderRadius: 7,
  },
  button: {
    backgroundColor:'#2F4676',
    padding: 20,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
    width: 370,
  },
  textButton:{
    color: "white",
    fontWeight: "800",
    fontSize: 16,
  },
  boxSignup:{
    position: "relative",
    bottom: -150,
  },
  textSignup:{
    color: 'white'
  },
});