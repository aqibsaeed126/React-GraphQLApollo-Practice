import { gql } from "@apollo/client";

export const ADD_USERS_MUTATION = gql`
    mutation createUser($firstName: String!, $lastName: String!, $email: String!, $password: String) {
        createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password ){
            id,
            firstName,
            lastName,
            email,
            password
    }
}
`;

