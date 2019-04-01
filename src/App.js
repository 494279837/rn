import React, {Component} from 'react';
import { View, BackHandler } from 'react-native';
import {Router, Reducer} from "react-native-router-flux";
import { Scenes } from './Router';
import { isApp, onBackAndroid } from "./Tools";

//登录页,首页监听安卓物理返回键退出应用
const ListenerBackApp = (action) => {
    if(!action) return;
    if(!action.routeName) return;
    if(action.routeName.indexOf('page') >= 0 || action.routeName.indexOf('login') >= 0){
        BackHandler.addEventListener('hardwareBackPress',onBackAndroid,false);
    }else{
        BackHandler.removeEventListener('hardwareBackPress',onBackAndroid,false);
    }
};

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        console.log("ACTION1:", action);
        isApp() === 'android' && ListenerBackApp(action);
        return defaultReducer(state, action);
    }
};

const getSceneStyle = () => ({
    backgroundColor: "white",
    shadowOpacity: 1,
    shadowRadius: 3,
});

class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Router
                    scenes={Scenes}
                    createReducer={reducerCreate}
                    tintColor="orange"
                    getSceneStyle={getSceneStyle}
                />
            </View>
        );
    }
}

// 这一行必须要写
export default App;