import React from 'react';
import { Text, Animated, View } from 'react-native';

const TextView = (props) => {
    return (
        <Animated.View animationType={'slideInUp'} delay={100} duration={1000}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Text style={{ textAlign: 'right', fontSize: 30 }}> {props.text} </Text>
                <Text style={{ textAlign: 'right', fontSize: 30, marginRight: 10 }}>{props.title}</Text>
            </View>
        </Animated.View>
    )
}
export default TextView