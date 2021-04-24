import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Dashboard extends React.Component{
    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <Text style={{fontSize: 20, fontWeight: "bold", margin: "3%"}}>Hi, Emillia</Text>

                    <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                        <Text style={{marginLeft: "3%", color: "gray", fontFamily: "san-sarif-medium"}}>What would you like to buy today?</Text>
                        <TouchableOpacity style={styles.Cart}>
                            <Icon name="shopping-cart" size={20} style={{color:"white", alignSelf: "center"}} />
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection: "row", justifyContent:"space-between", margin: "3%"}}>
                        <TouchableOpacity>
                            <Icon name="heart" size={40} style={{color:"#83C8E4", alignSelf: "center"}} />
                        </TouchableOpacity>
                        <Icon name="search" size={20} style={{color:"gray", alignSelf: "center",marginRight: "-30%"}} />
                        <TextInput
                            keyboardType='default'
                            placeholder="Search"
                            placeholderTextColor="gray"
                            style={styles.TextInput}
                        />
                    </View>
                </View>

                <View style={styles.Body}>
                    <View style={{marginTop: "-8%"}}>
                        <ScrollView horizontal={true}   showsHorizontalScrollIndicator={false}>
                            <Image
                                style={styles.CardImage}
                                source={require('../../Assets/First.jpg')}
                            />

                            <Image
                                style={styles.CardImage}
                                source={require('../../Assets/Second.jpg')}
                            />

                            <Image
                                style={styles.CardImage}
                                source={require('../../Assets/Third.jpg')}
                            />
                        </ScrollView>

                        <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15, marginTop: "3%"}}>
                            <Text style={{fontFamily: "san-sarif-thick", color: "#F7514B"}}>Categories</Text>
                            <Text style={{fontFamily: "san-sarif-thick", color: "gray"}}>See All</Text>
                        </View>

                        <View style={{marginTop: "2%"}}>
                            <ScrollView horizontal={true}   showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Food")}>
                                    <Image
                                        style={styles.SmallCard}
                                        source={require('../../Assets/First.jpg')}
                                    />
                                </TouchableOpacity>

                                <Image
                                    style={styles.SmallCard}
                                    source={require('../../Assets/Second.jpg')}
                                />

                                <Image
                                    style={styles.SmallCard}
                                    source={require('../../Assets/Third.jpg')}
                                />

                                <Image
                                    style={styles.SmallCard}
                                    source={require('../../Assets/Third.jpg')}
                                />

                                <Image
                                    style={styles.SmallCard}
                                    source={require('../../Assets/Third.jpg')}
                                />

                                <Image
                                    style={styles.SmallCard}
                                    source={require('../../Assets/Third.jpg')}
                                />

                                <Image
                                    style={styles.SmallCard}
                                    source={require('../../Assets/Third.jpg')}
                                />
                            </ScrollView>
                        </View>
                    </View>
                </View>

                <View style={styles.BodyNext}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15}}>
                        <Text style={{fontFamily: "san-sarif-thick", color: "#F7514B"}}>Vendors</Text>
                        <Text style={{fontFamily: "san-sarif-thick", color: "gray"}}>See All</Text>
                    </View>

                    <ScrollView>
                        <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15, marginTop: "3%"}}>
                            <View>
                                <Image
                                    style={styles.Vendors}
                                    source={require('../../Assets/First.jpeg')}
                                />
                                <Text style={{fontSize:15, marginLeft:"1%", fontWeight: "bold"}}>John Henry</Text>
                            </View>

                            <View>

                                <Image
                                    style={styles.Vendors}
                                    source={require('../../Assets/Fourth.jpg')}
                                />
                                <Text style={{fontSize:15, marginLeft:"1%", fontWeight: "bold"}}>Kethy Johnson</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15, marginTop: "3%"}}>
                            <View>
                                <Image
                                    style={styles.Vendors}
                                    source={require('../../Assets/Fourth.jpg')}
                                />
                                <Text style={{fontSize:15, marginLeft:"1%", fontWeight: "bold"}}>John Henry</Text>
                            </View>

                            <View>
                                <Image
                                    style={styles.Vendors}
                                    source={require('../../Assets/First.jpeg')}
                                />
                                <Text style={{fontSize:15, marginLeft:"1%", fontWeight: "bold"}}>John Henry</Text>
                            </View>
                        </View>
                    </ScrollView>
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

                                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Profile")}>
                                    <Icon name="user" size={22} style={{color:"#C3C3C3", alignSelf: "center"}} />
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
        height: "25%",
        // backgroundColor: "gray"
    },
    Cart: {
        width: "15%",
        height: 50,
        backgroundColor: "#F7514B",
        marginTop: "-8%",
        borderRadius: 10,
        marginRight: "5%",
        justifyContent: "center",
        shadowColor: "#F7514B",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 12
    },
    TextInput: {
        width: "50%",
        borderRadius: 40,
        alignSelf: "center",
        backgroundColor: "#F2F2F2",
        paddingHorizontal: 30,
    },
    CardImage: {
        width: 330, height:150,borderRadius:20,alignSelf: "center", marginLeft: 15
    },
    Body: {
        width: "100%",
        height: "35%",
        // backgroundColor: "red"
    },
    SmallCard: {
        width: 70, height:70,borderRadius:10,alignSelf: "center", marginLeft: 15
    },
    BodyNext: {
        width: "100%",
        height: "30%",
        // backgroundColor: "black"
    },
    Vendors: {
        width: 150,
        height: 100,
        backgroundColor: "red",
        borderRadius: 25
    },
    Footer: {
        width: "100%",
        height: "10%",
    },
    FooterImage: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        // paddingHorizontal: 10
    }
});
