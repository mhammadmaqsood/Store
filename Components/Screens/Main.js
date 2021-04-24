import React from 'react';
import {StyleSheet, Text, View, StatusBar, TouchableOpacity, Image} from 'react-native';

export default class App extends React.Component{
    render(){
        return(
            <View style={styles.Container}>
                <StatusBar backgroundColor="#F7514B" />

                <View style={styles.Header}></View>

                <View style={styles.Body}>
                    <Image
                        style={{width:100, height:100,borderRadius:50,alignSelf: "center"}}
                        source={require('../../Assets/pizza.png')}
                    />

                    <View style={{marginTop: "5%"}}>
                        <Text style={{textAlign:"center", fontSize:30, fontWeight: "bold"}}>Feria</Text>
                        <Text style={{textAlign:"center", fontSize:30, fontWeight: "bold"}}>Tinamastes</Text>
                    </View>

                    <Text style={{textAlign:"center", marginTop: "5%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>

                    <TouchableOpacity style={styles.Login} onPress={()=>this.props.navigation.navigate("Login")}>
                        <Text style={{textAlign:"center", color: "white"}}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.CreateAccount} onPress={()=>this.props.navigation.navigate("SignUp")}>
                        <Text style={{textAlign:"center", color: "#F7514B"}}>Create an account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        width: "100%",
        height: "100%",
    },
    Header: {
        width: "100%",
        height: "30%",
    },
    Body: {
        width: "100%",
        height: "70%",
        justifyContent: "center",
    },
    Login: {
        width: "90%",
        height: "10%",
        backgroundColor: "#F7514B",
        borderRadius: 40,
        alignSelf: "center",
        margin: "5%",
        justifyContent: "center"
    },
    CreateAccount: {
        width: "90%",
        height: "10%",
        borderRadius: 40,
        alignSelf: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#F7514B"
    }
});

