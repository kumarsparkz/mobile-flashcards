import React from 'react'
import { View, StatusBar } from 'react-native'
import { createStore } from 'redux'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import DeckLists from './components/DeckLists'
import Deck from './components/Deck'
import Question from './components/Question'
import { white, blue } from './utils/colors'
import reducer from './reducers'
import { Provider } from 'react-redux'
import { Constants } from 'expo'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { setLocalNotification } from './utils/helpers'

const store = createStore(reducer)

UdaciStatusBar = ({ backgroundColor, ...props }) => {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const Tabs = createBottomTabNavigator({
    DeckLists: {
        screen: DeckLists,
        navigationOptions: {
            tabBarLabel: 'DECKS'
        }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'ADD DECK'
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: blue,
        labelStyle: {
            fontSize: 20,
            paddingBottom: 10,
            fontWeight: 'bold',
        }
    }
})
// The primary view that is visible when the app loads (a list of created decks including name and number of cards)
const Stack = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            header: null
        }
    },
    AddDeck: {
        screen: AddDeck
    },
    AddCard: {
        screen: AddCard
    },
    Deck: {
        screen: Deck
    },
    Question: {
        screen: Question
    }
}, {
    navigationOptions: {
        headerTintColor: blue,
        headerTitleStyle: {
            fontSize: 22,
        }
    },
    cardStyle: {
        backgroundColor: white
    }
})

export default class App extends React.Component {
    componentDidMount(){
        setLocalNotification()
    }
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={{ flex: 1 }}>
                    <UdaciStatusBar backgroundColor={blue} barStyle="light-content" />
                    <Stack />
                </View>
            </Provider>
        )
    }
}


