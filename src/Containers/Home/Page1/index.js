import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import {Actions} from "react-native-router-flux";

export default class Page1 extends Component {
    render() {
        return (
            <View>
                <Text>page1</Text>
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