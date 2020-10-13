import gql from "graphql-tag";

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($description: String!, $title: String!, $bookId: ID!, $image; Image!, $link: URL!) {
        saveBook(description: $description, title: $title, bookId: $bookId, image: $image, link: $link) {
            _id
            authors
            discription
            title
            image
            link
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            authors
            discription
            title
            image
            link
        }
    }
`;