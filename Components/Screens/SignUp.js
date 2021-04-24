import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';

export default class App extends React.Component{
    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <Text style={{textAlign:"center", fontSize: 25, fontWeight: "bold", color: "white"}}>Sign Up</Text>
                    <Text style={{textAlign:"center", marginTop: "2%", color: "white"}}>Add your details to sign up</Text>
                </View>

                <View style={styles.Body}>
                    <TextInput
                        keyboardType='default'
                        placeholder="Name"
                        placeholderTextColor="gray"
                        style={styles.TextInput}
                    />

                    <TextInput
                        keyboardType='default'
                        placeholder="Email"
                        placeholderTextColor="gray"
                        style={styles.TextInput}
                    />

                    <TextInput
                        keyboardType='numeric'
                        placeholder="Phone Number"
                        placeholderTextColor="gray"
                        style={styles.TextInput}
                    />

                    <TextInput
                        keyboardType='default'
                        placeholder="Address"
                        placeholderTextColor="gray"
                        style={styles.TextInput}
                    />

                    <TextInput
                        keyboardType='default'
                        placeholder="Password"
                        placeholderTextColor="gray"
                        style={styles.TextInput}
                    />

                    <TextInput
                        keyboardType='default'
                        placeholder="Confirm Password"
                        placeholderTextColor="gray"
                        style={styles.TextInput}
                    />

                    <TouchableOpacity style={styles.Login} onPress={()=>this.props.navigation.navigate("Dashboard")}>
                        <Text style={{textAlign:"center", color: "white"}}>Login</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection:"row",alignSelf: "center",marginTop: "2%"}}>
                        <Text style={{fontWeight: "bold", color: "white"}}>Already have an account? </Text>
                        <Text style={{color:"#00F7F7", fontWeight: "bold"}} onPress={()=>this.props.navigation.navigate("Login")}>Sign Up</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#F7514B"
    },
    Header: {
        width: "100%",
        height: "20%",
        justifyContent: "center"
    },
    Body: {
        width: "100%",
        height: "80%",
        // justifyContent: "center"
    },
    TextInput: {
        width: "90%",
        borderBottomColor: "gray",
        // borderWidth: 1,
        borderRadius: 40,
        alignSelf: "center",
        backgroundColor: "#F2F2F2",
        paddingHorizontal: 30,
        margin: "2%"
    },
    Login: {
        width: "90%",
        height: "9%",
        backgroundColor: "#85C9E8",
        borderRadius: 40,
        alignSelf: "center",
        margin: "5%",
        justifyContent: "center",
    }
});
