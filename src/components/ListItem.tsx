import React, { FC } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { HeaderItem } from '../interfaces/index';
import Icon from 'react-native-vector-icons/FontAwesome';

type props = {
    item: HeaderItem;
    onDeleteGoal: (id: string) => void;
}
const ListItem: FC<props> = ({item: {id, text}, onDeleteGoal}) => {

    return (
        <TouchableOpacity style={styles.listItem} onPress={onDeleteGoal.bind(this, id)}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{text}</Text>
                <Icon name="remove" size={20} color="firebrick" />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: "#f8f8f8",
        borderWidth: 1,
        borderColor: "#eee"
    },
    listItemView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    listItemText: {
        fontSize: 15,
    }
});

export default ListItem;