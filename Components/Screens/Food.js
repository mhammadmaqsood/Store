import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Food extends React.Component{
    state = {
        addToCart: false
    }

    addToCart = () => {
        this.setState({addToCart: true})
    }
    render(){
        return(
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: "5%"}}>
                        <Icon name="arrow-left" size={20} style={{color:"white", alignSelf: "center"}} onPress={()=>this.props.navigation.navigate("Dashboard")}/>
                        <Icon name="shopping-cart" size={20} style={{color:"white", alignSelf: "center"}} />
                    </View>
                </View>

                <View style={styles.Body}>
                    <View style={{flexDirection: "row"}}>
                        <Image
                            style={{width: 120, height: 120, borderRadius: 60, marginLeft: "2%", marginTop: "5%"}}
                            source={require('../../Assets/Third.jpg')}
                        />
                        <View style={{marginLeft: "6%", marginTop: "5%"}}>
                            <Text style={{fontSize:20, fontWeight: "bold"}}>Mandry's</Text>
                            <Text style={{fontSize:20, fontWeight: "bold"}}>Craft Food</Text>

                            <View style={{flexDirection: "row", justifyContent:"space-between"}}>
                                <TextInput
                                    keyboardType='default'
                                    placeholder="Search"
                                    placeholderTextColor="gray"
                                    style={styles.TextInput}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: "5%"}}>
                        <Text style={{fontWeight: "bold"}}>Products</Text>
                        <Text style={{fontWeight: "bold", color: "#85C9E8"}}>View All</Text>
                    </View>
                </View>

                <View style={{width:"100%", height: "64%"}}>
                    <ScrollView>
                        <View style={styles.Section}>
                            <View style={styles.card}>
                                <Image
                                    style={{width: 100, height: 100, borderRadius: 60, marginLeft: "2%", marginTop: "5%", alignSelf: "center"}}
                                    source={require('../../Assets/yogurt.png')}
                                />
                                <Text style={{fontWeight: "bold", marginLeft: "3%"}}>Yougurt</Text>
                                <Text style={{fontWeight: "bold", marginLeft: "3%", color: "#F7514B"}}>$373</Text>
                                <TouchableOpacity style={styles.Button} onPress={this.addToCart}>
                                    <Text style={{color: "white", textAlign: "center"}}>Add</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.card}>
                                <Image
                                    style={{width: 100, height: 100, borderRadius: 60, marginLeft: "2%", marginTop: "5%", alignSelf: "center"}}
                                    source={require('../../Assets/bread.png')}
                                />
                                <Text style={{fontWeight: "bold", marginLeft: "3%"}}>Yougurt</Text>
                                <Text style={{fontWeight: "bold", marginLeft: "3%", color: "#F7514B"}}>$373</Text>
                                <View style={styles.Button}>
                                    <Text style={{color: "white", textAlign: "center"}}>Add</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.Section}>
                            <View style={styles.card}>
                                <Image
                                    style={{width: 100, height: 100, borderRadius: 60, marginLeft: "2%", marginTop: "5%", alignSelf: "center"}}
                                    source={require('../../Assets/milk.png')}
                                />
                                <Text style={{fontWeight: "bold", marginLeft: "3%"}}>Yougurt</Text>
                                <Text style={{fontWeight: "bold", marginLeft: "3%", color: "#F7514B"}}>$373</Text>
                                <View style={styles.Button}>
                                    <Text style={{color: "white", textAlign: "center"}}>Add</Text>
                                </View>
                            </View>

                            <View style={styles.card}>
                                <Image
                                    style={{width: 100, height: 100, borderRadius: 60, marginLeft: "2%", marginTop: "5%", alignSelf: "center"}}
                                    source={require('../../Assets/yogurt.png')}
                                />
                                <Text style={{fontWeight: "bold", marginLeft: "3%"}}>Yougurt</Text>
                                <Text style={{fontWeight: "bold", marginLeft: "3%", color: "#F7514B"}}>$373</Text>
                                <View style={styles.Button}>
                                    <Text style={{color: "white", textAlign: "center"}}>Add</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.Section}>
                            <View style={styles.card}>
                                <Image
                                    style={{width: 100, height: 100, borderRadius: 60, marginLeft: "2%", marginTop: "5%", alignSelf: "center"}}
                                    source={require('../../Assets/yogurt.png')}
                                />
                                <Text style={{fontWeight: "bold", marginLeft: "3%"}}>Yougurt</Text>
                                <Text style={{fontWeight: "bold", marginLeft: "3%", color: "#F7514B"}}>$373</Text>
                                <View style={styles.Button}>
                                    <Text style={{color: "white", textAlign: "center"}}>Add</Text>
                                </View>
                            </View>

                            <View style={styles.card}>
                                <Image
                                    style={{width: 100, height: 100, borderRadius: 60, marginLeft: "2%", marginTop: "5%", alignSelf: "center"}}
                                    source={require('../../Assets/yogurt.png')}
                                />
                                <Text style={{fontWeight: "bold", marginLeft: "3%"}}>Yougurt</Text>
                                <Text style={{fontWeight: "bold", marginLeft: "3%", color: "#F7514B"}}>$373</Text>
                                <View style={styles.Button}>
                                    <Text style={{color: "white", textAlign: "center"}}>Add</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {
                   this.state.addToCart?
                       <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: "-17%"}}>
                           <View style={{width: "50%",height:"40%",backgroundColor:"#83C8E4", borderTopRightRadius: 20, borderTopLeftRadius: 20, justifyContent: "center"}}>
                               <Text style={{color: "white", textAlign: "center"}}>Yogurt</Text>
                               <Text style={{color: "white", textAlign: "center"}}>$375</Text>
                           </View>

                           <View style={{flexDirection: "row", width: "50%", backgroundColor: "#E7E7E7", justifyContent: "space-between"}}>
                               <Text style={{color: "red", textAlign: "center", fontSize: 17, marginTop: "15%", paddingHorizontal: "5%"}}>Go To Cart</Text>
                               <Icon name="shopping-cart" size={35} style={{color:"#F7514B", alignSelf: "center", marginTop: "-50%", marginRight: "3%"}} />
                           </View>
                       </View>:

                   <TouchableOpacity style={{width: "20%",height:"10%",backgroundColor:"#83C8E4", marginTop: "-20%", borderRadius: 80, justifyContent: "center", marginLeft: "5%"}}>
                       <Icon name="home" size={20} style={{color:"white", alignSelf: "center"}} />
                   </TouchableOpacity>
                }
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
        backgroundColor: "#F7514B",
        justifyContent: "center",
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35
    },
    Body: {
        width: "100%",
        height: "25%",
        // backgroundColor: "red"
    },
    TextInput: {
        width: "75%",
        borderBottomColor: "gray",
        borderRadius: 40,
        alignSelf: "center",
        backgroundColor: "#F2F2F2",
        paddingHorizontal: 30,
        marginTop: "4%"
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
    Section: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "3%"
    },
    card: {
        width: 150,
        height: 200,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
        borderRadius: 20,
        marginTop: "5%"
    },
    Button: {
        width: "90%",
        height: "15%",
        backgroundColor: "#F7514B",
        alignSelf: "center",
        borderRadius: 5,
        marginTop: "5%",
        justifyContent: "center"
    }
});
