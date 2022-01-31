import React from "react";
import { Text, View,StyleSheet } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle } = styles;

    return(
        <View style={viewStyle}>
            <Text style={textStyle}> Giriş Ekranı </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        color: '#d0d0c0',
     fontSize: 20
    },
    viewStyle:{
        backgroundColor: '#262b40',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        elevation: 5,
        shadowColor: '#d0d0c0'
    }
  });

export default Header;