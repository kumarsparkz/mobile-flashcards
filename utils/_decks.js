import { AsyncStorage } from 'react-native'

export const DECKS_KEY = 'UdacityFlashCards'

let decks = {
    React: {
        title: 'Universe',
        questions: [
            {
                question: 'What is a Galaxy?',
                answer: 'Galaxy is a collection of star systems'
            },
            {
                question: 'What is a Light Year?',
                answer: 'The distance that light travels in vacuum in 1 year'
            },
            {
                question: 'What is Nuclear Fusion?',
                answer: 'A nuclear reaction in which nuclei combine to form more massive nuclei with the simultaneous release of energy'
            },
        ]
    },
    Datastructures: {
        title: 'JavaScript',
        questions: [
            {
                question: 'true/false: NaN == NaN',
                answer: 'false'
            },
            {
                question: 'what are the RegEx flags supported by JS?',
                answer: 'g for global, i for ignore case, and m for multiline'
            }
        ]
    }
}

function setData() {
    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
    return decks
}

export function formatDecksResults(results) {
    return results === null ? setData() : JSON.parse(results)
}