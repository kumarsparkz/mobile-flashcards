import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { blue, white } from '../utils/colors'
import { withNavigation } from 'react-navigation'

function Score(props){
    const { correct, incorrect, restart, deck, deckId, navigation } = props

    return(
        <View style={styles.center}>
            <Text style={styles.score}>Correct: {correct}</Text>
            <Text style={styles.score}>Incorrect: {incorrect}</Text>
            <Text style={styles.score}>{Math.round((correct/deck.questions.length)*100)}%</Text>

            <TouchableOpacity
             style={[styles.btn, {backgroundColor: blue, marginTop: 25}]}
             onPress={restart}
            >
                <Text style={styles.btnText}>Restart Quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity
             style={[styles.btn, {backgroundColor: white, marginTop: 25}]}
             onPress={() => navigation.navigate('Deck', {deckId: deckId, deckName: deck.title})}
            >
                <Text style={[styles.btnText, {color: blue}]}>Back to Deck</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,
        borderColor: blue,
        borderWidth: 1,
        padding: 15,
        marginTop: 17,
        marginLeft: 10,
        marginRight: 10,
    },
    btnText: {
        color: white,
        fontSize: 16
    },
    score: {
        color: blue,
        fontSize: 25,
        marginBottom: 5
    }
  })

export default withNavigation(Score)