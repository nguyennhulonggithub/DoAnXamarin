import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Font } from "../../variable/Font";

function ResumeReading() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/home/home-manga-2.jpg')} style={styles.img}></Image>

            <View style={styles.detail}>
                <Text style={Font.title}>Dorohedoro</Text>
                <Text style={Font.description}>Chapter 5: Killing Mushroom</Text>
                <Text style={Font.description}>6% read</Text>
            </View>

            {/* dấu 3 chấm hiện bảng tương tác với manga */}

            <View style={styles.date}>
                <Text style={Font.description}>6 days ago</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E1E1E',
        padding: 20,
        borderRadius: 10,
        position: "relative",
        width: 380,
        height: 220,
        marginLeft: 20
    },
    img: {
        height: 180,
        width: 120
    },
    detail: {
        position: "absolute",
        left: 150,
        top: 20
    },
    date: {
        position: "absolute",
        left: 150,
        bottom: 20
    }
})

export default ResumeReading 