import React, { useState } from 'react'
import { Modal, View, Text, StyleSheet, ScrollView, Pressable, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CommentTag from './CommentTag'

function CommentScreen(props) {
    const [show, setShow] = useState(false);

    return (
        <View>
            <Pressable onPress={() => setShow(true)}>
                <MaterialCommunityIcons
                    name='comment-processing-outline'
                    size={20}
                    color='#e6e6e6'
                />
            </Pressable>
            <Modal visible={show}>
                <ScrollView style={styles.container}>
                    <View style={styles.header}>
                        <Pressable onPress={() => setShow(false)}>
                            <AntDesign name="closecircle" size={30} color="#8E8E93" />
                        </Pressable>
                        <Text style={styles.commentCount}>10 comments</Text>
                    </View>
                    <View style={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        paddingVertical: 15
                    }}>
                        <Text style={{ color: '#727274' }}>Comments ae sorted from newest to oldest</Text>
                    </View>
                    <CommentTag />
                    <CommentTag />
                    <CommentTag />
                    <CommentTag />
                    <CommentTag />
                </ScrollView>
                <View style={styles.bottom}>
                    <TextInput style={styles.addComment} placeholder='Add your comment' placeholderTextColor='#939393' />
                    <Ionicons name="ios-paper-plane" size={30} color="#686868" />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C1C1E'
    },
    header: {
        backgroundColor: '#272727',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    commentCount: {
        color: 'white',
        fontSize: 20,
        marginLeft: 20
    },
    bottom: {
        backgroundColor: '#272727',
        height: 80,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderTopWidth: 0.5,
        borderTopColor: '#414141'
    },
    addCommentContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    addComment: {
        color: '#939393',
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#414141',
        borderRadius: 3,
        width: 300,
        height: 60,
        paddingLeft: 20
    }
})

export default CommentScreen
