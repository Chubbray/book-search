import gql from "graphql";

export const GET_ME = gql`
    query me {
        me {
            user
        }
    }
`;