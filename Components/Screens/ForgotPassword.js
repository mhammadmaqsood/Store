import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';

export default class ForgotPassword extends React.Component{
    render(){
        return(
            <View style={styles.Container}>
                <Text style={{textAlign:"center", fontSize: 20, fontWeight: "bold", color: "white", paddingHorizontal: 20}}>We have sent an OTP to your mobile</Text>
                <Text style={{textAlign:"center", color: "white", paddingHorizontal: 30, marginTop: "5%"}}>Please check your phone and continue to reset your password</Text>

                <View style={styles.InputSection}>
                    <TextInput
                        keyboardType='numeric'
                        placeholder="*"
                        placeholderTextColor="gray"
                        style={styles.TextInput}
                    />

                    <TextInput
                        keyboardType='numeric'
                        placeholder="*"
                        placeholderTextColor="gray"
                        style={styles.TextInput}
                    />

                    <TextInput
                        keyboardType='numeric'
                        placeholder="*"
                        placeholderTextColor="gray"
                        style={styles.TextInput}
                    />

                    <TextInput
                        keyboardType='default'
                        placeholder="*"
                        placeholderTextColor="gray"
                        style={styles.TextInput}
                    />
                </View>

                <TouchableOpacity style={styles.Next} onPress={()=>this.props.navigation.navigate("NewPassword")}>
                    <Text style={{textAlign:"center", color: "white"}}>Next</Text>
                </TouchableOpacity>

                <View style={{flexDirection:"row",alignSelf: "center",marginTop: "2%"}}>
                    <Text style={{fontWeight: "bold", color: "white"}}>Didn't get code yet? </Text>
                    <Text style={{color:"#00F7F7", fontWeight: "bold"}}>Click here</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#F7514B",
        justifyContent: "center"
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
        width: "20%",
        borderBottomColor: "gray",
        borderRadius: 10,
        alignSelf: "center",
        backgroundColor: "#F2F2F2",
        paddingHorizontal: 30,
        margin: "2%"
    },
    Next: {
        width: "95%",
        height: "7.5%",
        backgroundColor: "#85C9E8",
        borderRadius: 40,
        alignSelf: "center",
        margin: "10%",
        justifyContent: "center",
    },
    InputSection: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "10%"
    }
});
