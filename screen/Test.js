import React, { useRef } from "react";
import { useEffect } from "react";
import {
    View,
    Image,
    Animated,
    StyleSheet,
    Dimensions,
    Text,
} from "react-native";
import images from "../components/SearchScreen/Banner";
import { deleteUser } from "../InteractServer/GetUserSqlite";
import {
    deleteResume,
    getResume,
    insertResume,
} from "../InteractServer/ResumeSave";
import { Color } from "../variable/Color";

export default function Test() {
    useEffect(() => {

        deleteUser()
        return;
    }, []);

    return (
        <View>
            <Text>hello world</Text>
        </View>
    );
}
