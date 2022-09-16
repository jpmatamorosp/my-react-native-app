import { TextInputProps, StyleProp, TextStyle } from "react-native";

export default interface InputTextProps extends TextInputProps {
    // style?: Pick<TextInputProps , 'style'>,
    style?: StyleProp<TextStyle>,
    isFocused: boolean;
}