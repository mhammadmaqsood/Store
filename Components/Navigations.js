import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator
} from 'react-navigation';
import Login from "./Screens/Login";
import Main from "./Screens/Main";
import SignUp from "./Screens/SignUp";
import Dashboard from "./Screens/Dashboard";
import ForgotPassword from "./Screens/ForgotPassword";
import NewPassword from "./Screens/NewPassword";
import Food from "./Screens/Food";
import Profile from "./Screens/Profile";

const AppDrawerNavigator = createDrawerNavigator({
    Main:{
        screen: Main,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    Login:{
        screen: Login,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    SignUp:{
        screen: SignUp,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    Dashboard:{
        screen: Dashboard,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    Forgot:{
        screen: ForgotPassword,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    NewPassword:{
        screen: NewPassword,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    Food:{
        screen: Food,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
    Profile:{
        screen: Profile,
        navigationOptions: ({navigation}) => {
            return {
                header: null
            };
        },
    },
})

const AppSwitchNavigator = createSwitchNavigator({
    Dashboard: { screen: AppDrawerNavigator }

});

const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer;
