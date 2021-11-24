import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Image, TextInput } from "react-native";

export default function App() {


    const handlePress = () => console.log('button pressed'); // const arrow function

    return ( <
        View style = { styles.container } >
        <
        View >

        <
        Text style = {
            styles.helloText
        } >

        Hello World!{ '\n' } <
        Text style = { styles.baseText } >
        First reactive app { '\n' } <
        Text style = { styles.innerText } > This is a paragraph explaining what this app is all about.As you can see there are already many components including text, iamges and buttons < /Text>  < /
        Text >

        <
        /Text>  < /
        View >

        <
        View >

        <
        Text > < Text style = {
            { fontWeight: "bold" }
        } > What would you like to get out of this course ? < /Text> </Text >

        <
        TextInput style = {
            {
                height: 50,
                borderColor: 'gray',
                borderWidth: 1
            }
        }
        defaultValue = "Placeholder" / >


        <
        /View>

        <
        Text > < Text style = {
            { fontWeight: "bold" }
        } > An emoji describing how you feel about this course : < /Text> </Text >



        <
        Image style = {
            { width: 100, height: 100 }
        }

        source = { require("./assets/icon.png") }
        />

        <
        view style = { styles.submitButton } >
        <
        Button title = "Submit"
        onPress = { handlePress }
        />

        <
        StatusBar style = "auto" / >
        <
        /view>   < /
        View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "flex-start",
        justifyContent: "space-between",
        fontFamily: "Helvetica Neue",

    },
    helloText: {
        backgroundColor: 'steelblue',
        height: 200,
        width: 1450,
        fontWeight: "bold",
        fontSize: 45,
        alignSelf: 'flex-start',

    },
    baseText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "#000"


    },
    innerText: {
        fontSize: 12,
        color: "#000"


    }
});