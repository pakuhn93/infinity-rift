import { gql } from '@apollo/client';

export const REGISTER = gql`
    mutation register($username: String!, $password: String!, $email: String!) {
        register(username: $username, password: $password, email: $email) {
            token
            user {
                username
                password
                email
                _id
            }
        }
    }
`;

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                username
                password
                friends {
                    username
                }
                email
                _id
            }
        }
    }
`;

export const CREATE_DECK = gql`
    mutation createDeck($title: String!, $cards: [ID]!) {
        createDeck(title: $title, cards: $cards) {
            title
            cards {
                tags
                strength
                name
                health
                element
                _id
            }
        }
    }
`;
export const DELETE_DECK = gql`
    mutation deleteDeck($deleteDeckId: ID!) {
        deleteDeck(id: $deleteDeckId) {
            title
            cards {
                tags
                strength
                name
                health
                element
                _id
            }
        }
    }
`;

export const ADD_TO_DECK = gql`
    mutation addToDeck($deckId: ID!, $cardId: ID!) {
        addToDeck(deckId: $deckId, cardId: $cardId) {
            title
            cards {
                tags
                strength
                name
                health
                element
                _id
            }
        }
    }
`;
export const REMOVE_FROM_DECK = gql`
    mutation removeFromDeck($deckId: ID!, $cardId: ID!) {
        removeFromDeck(deckId: $deckId, cardId: $cardId) {
            title
            cards {
                tags
                strength
                name
                health
                element
                _id
            }
        }
    }
`;
