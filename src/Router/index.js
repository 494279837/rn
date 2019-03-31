import React from "react";
import {Image} from "react-native";
import {Actions, Modal, Scene, Stack, Tabs} from "react-native-router-flux";
import First from "../Containers/First";
import Login from "../Containers/Login";
import {Page1, Page2, Page3, Page4} from "../Containers/Home";
import Test from "../Containers/Test";

const tabIcon = () => {
    return <Image
        style={{width: 14, height: 14}}
        source={require('../Static/Image/favicon.png')}
    />;
};

export const Scenes = Actions.create(
    <Scene key="root" titleStyle={{alignSelf: "center"}}>
        <Modal hideNavBar>
            <Scene key="first" initial component={First} title="首屏"/>
            <Scene key="login" component={Login} title="登录" />
            <Stack
                hideNavBar
                navigationBarStyle={{ backgroundColor: '#789' }}
                titleStyle={{ color: '#fff', alignItems: 'center' }}>
                <Tabs
                    key="tabbar"
                    gestureEnabled={false}
                    showLabel={true}
                    animationEnabled={true}
                    tabs
                    tabBarStyle={{backgroundColor: "#fff"}}
                    activeBackgroundColor="#ccc"
                    lazy={true}
                >
                    <Scene icon={tabIcon} key="page1" component={Page1} title="首页1" />
                    <Scene icon={tabIcon} key="page2" component={Page2} title="拜访" />
                    <Scene icon={tabIcon} key="page3" component={Page3} title="合作" />
                    <Scene icon={tabIcon} key="page4" component={Page4} title="消息" />
                </Tabs>
            </Stack>
        </Modal>
        <Scene key="test" component={Test} title="test" />
    </Scene>
);