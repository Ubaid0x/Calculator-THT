import React, {memo} from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';

import Styles from '../../Style';

const Buttons = (props) => {
    return <Animated.View animationType={'slideInUp'} delay={1000} duration={300}>
        <TouchableOpacity onPress={()=> props.numberPress(props.number)}
            style={[Styles.btnStyle, props.btnStyle]}>
            <View>
                <Text> {props.number} </Text>
            </View>
        </TouchableOpacity>
    </Animated.View>
}
export default memo(Buttons)