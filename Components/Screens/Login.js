import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class App extends React.Component{
    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <Text style={{textAlign:"center", fontSize: 25, fontWeight: "bold", color: "#F7514B"}}>Login</Text>
                    <Text style={{textAlign:"center", marginTop: "2%"}}>Add your details to begin</Text>
                </View>

                <View style={styles.Body}>
                    <TextInput
                        keyboardType='default'
                        placeholder="Youe Email"
                        placeholderTextColor="gray"
                        style={styles.TextInput}
                    />
                    <TextInput
                        keyboardType='default'
                        placeholder="Password"
                        placeholderTextColor="gray"
                        style={styles.TextInput}
                    />

                    <TouchableOpacity style={styles.Login} onPress={()=>this.props.navigation.navigate("Dashboard")}>
                        <Text style={{textAlign:"center", color: "white"}}>Login</Text>
                    </TouchableOpacity>

                    <Text style={{textAlign:"center"}} onPress={()=>this.props.navigation.navigate("Forgot")}>Forgot Password?</Text>
                </View>

                <View style={styles.BodyNext}>
                    <Text style={{textAlign:"center"}}>or login with</Text>

                    <TouchableOpacity style={styles.Facebook}>
                        <View style={{flexDirection: "row", alignSelf: "center"}}>
                            <Icon name="facebook" size={20} style={{color:"white"}} />
                            <Text style={{textAlign:"center", color: "white", marginLeft: "5%"}}>Login with facebook</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Gmail}>
                        <View style={{flexDirection: "row", alignSelf: "center"}}>
                            <Image
                                style={{width:25, height:25,borderRadius:50,alignSelf: "center"}}
                                source={require('../../Assets/Gmail.png')}
                            />
                            <Text style={{textAlign:"center", color: "white", marginLeft: "5%"}}>Login with gmail</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{flexDirection:"row",alignSelf: "center",marginTop: "10%"}}>
                        <Text style={{fontWeight: "bold"}}>Don't have an account yet? </Text>
                        <Text style={{color:"#00F7F7", fontWeight: "bold"}} onPress={()=>this.props.navigation.navigate("SignUp")}>Sign Up</Text>
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
    },
    Header: {
        width: "100%",
        height: "20%",
        justifyContent: "center"
    },
    Body: {
        width: "100%",
        height: "40%",
        justifyContent: "center"
    },
    BodyNext: {
        width: "100%",
        height: "40%",
        justifyContent: "center"
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
        height: "17%",
        backgroundColor: "#85C9E8",
        borderRadius: 40,
        alignSelf: "center",
        margin: "5%",
        justifyContent: "center",
    },
    Facebook: {
        width: "90%",
        height: "17%",
        backgroundColor: "#3B5998",
        borderRadius: 40,
        alignSelf: "center",
        margin: "5%",
        justifyContent: "center",
    },
    Gmail: {
        width: "90%",
        height: "17%",
        backgroundColor: "#E34133",
        borderRadius: 40,
        alignSelf: "center",
        justifyContent: "center",
    },
});
