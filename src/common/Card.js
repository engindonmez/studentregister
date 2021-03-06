import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}


const styles = StyleSheet.create({
    containerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#262b40',
      borderBottomWidth: 0,
      shadowColor: '#d0d0c0',
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
      shadowOpacity: 0.1,
      shadowRadius: 2,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
    }
  });

export { Card };