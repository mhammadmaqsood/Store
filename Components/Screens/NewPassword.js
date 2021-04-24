import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';

export default class NewPassword extends React.Component{
    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <Text style={{textAlign:"center", fontSize: 20, fontWeight: "bold", color: "white", paddingHorizontal: 20}}>New Password</Text>
                    <Text style={{textAlign:"center", color: "white", marginTop: "5%"}}>Please enter your credentials for new passoword</Text>
                </View>

                <View style={styles.Body}>
                    <TextInput
                        keyboardType='default'
                        placeholder="New Password"
                        placeholderTextColor="gray"
                        style={styles.TextInput}
                    />

                    <TextInput
                        keyboardType='default'
                        placeholder="Confirm Password"
                        placeholderTextColor="gray"
                        style={styles.TextInput}
                    />

                    <TouchableOpacity style={styles.Next} onPress={()=>this.props.navigation.navigate("Dashboard")}>
                        <Text style={{textAlign:"center", color: "white"}}>Next</Text>
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
        backgroundColor: "#F7514B",
        // justifyContent: "center"
    },
    Header: {
        width: "100%",
        height: "20%",
        justifyContent: "center"
    },
    Body: {
        width: "100%",
        height: "80%",
    },
    TextInput: {
        width: "90%",
        borderBottomColor: "gray",
        borderRadius: 40,
        alignSelf: "center",
        backgroundColor: "#F2F2F2",
        paddingHorizontal: 30,
        margin: "2%"
    },
    Next: {
        width: "90%",
        height: "9%",
        backgroundColor: "#85C9E8",
        borderRadius: 40,
        alignSelf: "center",
        margin: "5%",
        justifyContent: "center",
    },

});
