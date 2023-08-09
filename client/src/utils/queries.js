import { gql } from '@apollo/client';

export const QUERY_CARD_CHARACTERS = gql`
    query cardCharacters {
        cardCharacters {
            _id
            element
            health
            name
            strength
            tags
        }
    }
`;

// export const QUERY_SINGLE_CARD_CHARACTER = gql `

// `;

export const QUERY_DECKS = gql`
    query decks {
        decks {
            _id
            title
            cards {
                _id
                name
                element
                strength
                health
            }
        }
    }
`;

export const QUERY_USERS = gql`
    query users {
        users {
            _id
            username
            email
        }
    }
`;

// export const DECK = gql``;
export const ME = gql`
    query me {
        me {
            username
            friends {
                username
            }
        }
    }
`;
