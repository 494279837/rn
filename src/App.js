import React, {Component} from 'react';
import { View, BackHandler } from 'react-native';
import {Router, Reducer} from "react-native-router-flux";
import CodePush from "react-native-code-push"; // 引入code-push
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

let codePushOptions = {
    //设置检查更新的频率
    //ON_APP_RESUME APP恢复到前台的时候
    //ON_APP_START APP开启的时候
    //MANUAL 手动检查
    checkFrequency : CodePush.CheckFrequency.ON_APP_RESUME
};

class App extends Component {
    //如果有更新的提示
    syncImmediate() {
        CodePush.sync( {
                //安装模式
                //ON_NEXT_RESUME 下次恢复到前台时
                //ON_NEXT_RESTART 下一次重启时
                //IMMEDIATE 马上更新
                installMode : CodePush.InstallMode.IMMEDIATE,
                //对话框
                updateDialog : {
                    //是否显示更新描述
                    appendReleaseDescription : true,
                    //更新描述的前缀。 默认为"Description"
                    descriptionPrefix : "" ,
                    //强制更新按钮文字，默认为continue
                    mandatoryContinueButtonLabel : "立即更新" ,
                    //强制更新时的信息. 默认为"An update is available that must be installed."
                    mandatoryUpdateMessage : "必须更新后才能使用" ,
                    //非强制更新时，按钮文字,默认为"ignore"
                    optionalIgnoreButtonLabel : '稍后' ,
                    //非强制更新时，确认按钮文字. 默认为"Install"
                    optionalInstallButtonLabel : '后台更新' ,
                    //非强制更新时，检查到更新的消息文本
                    optionalUpdateMessage : '有新版本了，是否更新？' ,
                    //Alert窗口的标题
                    title : '更新提示'
                } ,
            } ,
        );
        // CodePush.sync({
        //     updateDialog: {
        //         appendReleaseDescription: true,
        //         descriptionPrefix:'\n\n更新内容：\n',
        //         title:'更新',
        //         mandatoryUpdateMessage:'',
        //         mandatoryContinueButtonLabel:'更新',
        //     },
        //     mandatoryInstallMode:codePush.InstallMode.IMMEDIATE,
        //     deploymentKey: CODE_PUSH_PRODUCTION_KEY,
        // });
    }
    componentWillMount() {
        window.IS_ENV = this.props.IS_ENV || '';
        CodePush.disallowRestart();//页禁止重启
        this.syncImmediate(); //开始检查更新
    }

    componentDidMount() {
        CodePush.allowRestart();//在加载完了，允许重启
    }

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
export default CodePush(codePushOptions)(App);