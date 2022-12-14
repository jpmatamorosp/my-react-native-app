import React, { FC, useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BorderlessButton } from 'react-native-gesture-handler';
import { InputProps, InputTextProps } from '../interfaces';

const PasswordInputText: React.FC<InputTextProps> = ({ isFocused, ...props }) =>
    <TextInput
        {...props}
        style={ [passwordInputStyles.input] }
    />

const PasswordInput: FC<InputProps> = ({ iconName, value, ...props}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!value)
    }

    function handlePasswordVisibilityChange() {
        setIsPasswordVisible(prevState => !prevState);
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon name="lock" size={20} color={(isFocused || isFilled) ? "cornflowerblue" : "black" }/>
            </View>
            <PasswordInputText
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                secureTextEntry={isPasswordVisible}
                autoCorrect={false}
                isFocused={isFocused}
                {...props}
            />
            <BorderlessButton onPress={handlePasswordVisibilityChange}>
                <View style={styles.iconContainer} >
                    <Icon name={isPasswordVisible ? 'eye' : 'eye-slash'} size={20} color="cornflowerblue" />
                </View>
            </BorderlessButton>
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
        marginRight: 2,
        backgroundColor: '#FFFFFF'
    }
});

const passwordInputStyles = StyleSheet.create({
    input: {
        flex: 1,
        color: "cornflowerblue",
        //fontFamily: "primary_400", TODO
        fontSize: 20,
        paddingRight: 23
    }
});

export default PasswordInput;