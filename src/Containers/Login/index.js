import React, {Component} from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={()=>Actions.page1()}
                    title="登录"
                    color="#1eb6f8"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
