import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Profile extends React.Component{
    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: "5%"}}>
                        <Text style={{fontSize: 18, fontWeight: "bold"}}>Profile</Text>
                        <Icon name="shopping-cart" size={22} style={{color:"#F7514B", alignSelf: "center"}} />
                    </View>
                </View>

                <View style={styles.Body}>
                    <View style={styles.Card}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{width:50, height: 50, backgroundColor: "white", borderRadius: 60, marginTop: "4%", marginLeft:"5%", justifyContent: "center"}}>
                                <Icon name="home" size={22} style={{color:"#F7514B", alignSelf: "center"}} />
                            </View>
                            <Text style={{fontWeight: "bold", marginLeft: "5%", marginTop: "8%"}}>My Profile</Text>
                        </View>

                        <Icon name="arrow-right" size={18} style={{color:"#F7514B", alignSelf: "flex-end", marginTop: "-10%"}} />
                    </View>

                    <View style={styles.Card}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{width:50, height: 50, backgroundColor: "white", borderRadius: 60, marginTop: "4%", marginLeft:"5%", justifyContent: "center"}}>
                                <Icon name="credit-card" size={22} style={{color:"#F7514B", alignSelf: "center"}} />
                            </View>
                            <Text style={{fontWeight: "bold", marginLeft: "5%", marginTop: "8%"}}>Payoneer Details</Text>
                        </View>

                        <Icon name="arrow-right" size={18} style={{color:"#F7514B", alignSelf: "flex-end", marginTop: "-10%"}} />
                    </View>

                    <View style={styles.Card}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{width:50, height: 50, backgroundColor: "white", borderRadius: 60, marginTop: "4%", marginLeft:"5%", justifyContent: "center"}}>
                                <Icon name="bell-slash" size={22} style={{color:"#F7514B", alignSelf: "center"}} />
                            </View>
                            <Text style={{fontWeight: "bold", marginLeft: "5%", marginTop: "8%"}}>Notifications</Text>
                        </View>

                        <Icon name="arrow-right" size={18} style={{color:"#F7514B", alignSelf: "flex-end", marginTop: "-10%"}} />
                    </View>

                    <View style={styles.Card}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{width:50, height: 50, backgroundColor: "white", borderRadius: 60, marginTop: "4%", marginLeft:"5%", justifyContent: "center"}}>
                                <Icon name="envelope" size={22} style={{color:"#F7514B", alignSelf: "center"}} />
                            </View>
                            <Text style={{fontWeight: "bold", marginLeft: "5%", marginTop: "8%"}}>Inbox</Text>
                        </View>

                        <Icon name="arrow-right" size={18} style={{color:"#F7514B", alignSelf: "flex-end", marginTop: "-10%"}} />
                    </View>

                    <View style={styles.Card}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{width:50, height: 50, backgroundColor: "white", borderRadius: 60, marginTop: "4%", marginLeft:"5%", justifyContent: "center"}}>
                                <Icon name="info" size={22} style={{color:"#F7514B", alignSelf: "center"}} />
                            </View>
                            <Text style={{fontWeight: "bold", marginLeft: "5%", marginTop: "8%"}}>About Us</Text>
                        </View>

                        <Icon name="arrow-right" size={18} style={{color:"#F7514B", alignSelf: "flex-end", marginTop: "-10%"}} />
                    </View>
                </View>

                <View style={styles.Footer}>
                    <ImageBackground
                        style={styles.FooterImage}
                        source={require('../../Assets/Footer.png')}
                    >
                        <View style={{flexDirection:"row", justifyContent: "space-between"}}>
                            <View style={{flexDirection: "row", justifyContent: "space-between", width: "59%"}}>
                                <TouchableOpacity>
                                    <Icon name="heart" size={22} style={{color:"#C3C3C3", alignSelf: "center"}} />
                                    <Text style={{textAlign: "center", fontSize:12}}>Favourites</Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Icon name="shopping-cart" size={22} style={{color:"#C3C3C3", alignSelf: "center"}} />
                                    <Text style={{textAlign: "center", fontSize:12}}>My Cart</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width: "29%",height:"155%",backgroundColor:"#83C8E4",alignSelf:"center", marginTop: "-12%", borderRadius: 80, justifyContent: "center"}}>
                                    <Icon name="home" size={20} style={{color:"white", alignSelf: "center"}} />
                                </TouchableOpacity>
                            </View>

                            <View style={{flexDirection: "row", justifyContent: "space-between", width: "35%"}}>
                                <TouchableOpacity>
                                    <Icon name="credit-card" size={22} style={{color:"#C3C3C3", alignSelf: "center"}} />
                                    <Text style={{textAlign: "center", fontSize:12}}>My Orders</Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Icon name="user" size={22} style={{color:"#F7514B", alignSelf: "center"}} />
                                    <Text style={{textAlign: "center", fontSize:12}}>Profile</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
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
        height: "10%",
        justifyContent: "center"
    },
    Body: {
      width: "100%",
        height: "80%"
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
    Footer: {
        width: "100%",
        height: "10%",
    },
    FooterImage: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },
    Card: {
        width: "90%",
        height: "13%",
        backgroundColor: "#E4E5E8",
        borderRadius: 8,
        alignSelf: "center",
        marginTop: "5%"
    }
});
