import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => {

    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={() => { onPress() }} style={[buttonStyle, styles.darkButtonStyle]} >
            <Text style={[textStyle, styles.darkThemeText]}> {children} </Text>
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5
    },
    lightButtonStyle: {
        backgroundColor: '#d0d0c0'
    },
    darkButtonStyle: {
        backgroundColor: '#242c40',
        borderColor: '#d0d0c0'
    },
    lightThemeText: {
        color: '#242c40'
    },
    darkThemeText: {
        color: '#d0d0c0'
    }
});


export { Button };