import { StyleProp, TextInputProps, TextStyle } from "react-native";

export interface HeaderItem {
    id: string,
    text: string;
}

export interface OrderEntry {
    id: string;
    desc: string;
    price: number;
    count: number;
}

export interface InputProps extends TextInputProps {
    iconName: string,
    value?: string;
}

export interface InputTextProps extends TextInputProps {
    // style?: Pick<TextInputProps , 'style'>,
    style?: StyleProp<TextStyle>,
    isFocused: boolean;
}

export interface IconProps {
    isFocused: boolean;
}
