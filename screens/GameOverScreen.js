import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Het spel is over!</Text>
            <Text>Aantal rondes: {props.roundsNumber}</Text>
            <Text>Nummer was: {props.userNumber}</Text>
            <Button title="Nieuw spel" onPress={props.onRestart}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default GameOverScreen;