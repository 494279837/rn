import React, {Component} from 'react';
import { StyleSheet, ImageBackground, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class First extends Component {
    componentDidMount() {
        setTimeout(()=>{
            if(false){
                Actions.page1();
            }else{
                Actions.login();
            }
        },2000)
    }

    render() {
        return (
            <ImageBackground source={{uri:'http://static.caibeike.com/i/8259cb48c22bbdacf684a287e7496257-Rzwy2T'}} style={styles.container}>
                <Text>首屏</Text>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});
