import React from 'react';
import { BackHandler, ToastAndroid, Platform } from 'react-native';

export const isApp = () => {
    return Platform.select({
        ios: 'ios',
        android: 'android'
    });
};

//监听安卓物理返回键
export const onBackAndroid = () => {
    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        //最近2秒内按过back键，可以退出应用。
        BackHandler.exitApp();
        return;
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用',ToastAndroid.SHORT);
    return true;
};