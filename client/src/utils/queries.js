import { gql } from '@apollo/client';

export const QUERY_CARD_CHARACTERS = gql `
    query Query {
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


export const QUERY_DECKS = gql `
    query Query {
        decks {
            _id
            title
        }
    }
`;

export const QUERY_USERS = gql `
    query Query {
        users {
            _id
            username
            email
        }
    }
`;

