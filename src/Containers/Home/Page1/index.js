import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import {Actions} from "react-native-router-flux";

class Page1 extends Component {
    render() {
        return (
            <View>
                <Text>我在主页更新了!</Text>
                <Text>debug</Text>
                <Text>debug</Text>
                <Text>debug</Text>
                <Text>de444bu!!!g</Text>
                <Text>debug!</Text>
                <Button
                    onPress={()=>Actions.test()}
                    title="内容1"
                    color="#1eb6f8"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

export default Page1;