import React, { FC, useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { InputTextProps, InputProps } from '../interfaces';

const EmailInputText: React.FC<InputTextProps> = ({ isFocused, ...props }) =>
    <TextInput
        {...props}
        style={ [emailInputStyles.input] }
    />

const EmailInput: FC<InputProps> = ({ iconName, value, ...props}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    
    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!value)
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon name={iconName} size={20} color={(isFocused || isFilled) ? "cornflowerblue" : "black" }/>
            </View>
            <EmailInputText
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                autoCorrect={false}
                isFocused={isFocused}
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 8,
        backgroundColor: "white"
    },
    iconContainer: {
        height: 56,
        width: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 2
    }
});

const emailInputStyles = StyleSheet.create({
    input: {
        flex: 3,
        color: "cornflowerblue",
        //fontFamily: "primary_400", TODO
        fontSize: 20,
        paddingRight: 23
    }
});

export default EmailInput;