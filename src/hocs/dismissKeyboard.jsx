import React from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

const dismissKeyboard = (Component) => {
    return ({ children, ...props }) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} {...props}>
            <Component {...props} >{children}</Component>
        </TouchableWithoutFeedback>
    );
};

export default dismissKeyboard