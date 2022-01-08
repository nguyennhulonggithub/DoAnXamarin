import React from 'react'
import { Modal, View, Text, StyleSheet, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import CommentTag from './CommentTag'

function CommentScreen(props) {
    return (
        <Modal>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <AntDesign name="closecircle" size={30} color="#8E8E93" />
                    <Text style={styles.commentCount}>10 comments</Text>
                </View>
                <View>
                    <Text style={{ color: '#727274' }}>Comments are sorted from newest to oldest</Text>
                </View>
            </ScrollView>
            <View>
                <View>
                    <Text>

                    </Text>
                </View>
            </View>
        </Modal>
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
    }
})

export default CommentScreen
