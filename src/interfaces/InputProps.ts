import { TextInputProps } from "react-native";

export default interface InputProps extends TextInputProps {
    iconName: string,
    value?: string;
}