import React, {useState} from 'react';
import {ADD_USERS_MUTATION} from '../GraphQL/Mutation';
import { useMutation } from '@apollo/client';

export function CreateUser(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [createUser, {error}] = useMutation(ADD_USERS_MUTATION);
    
    let addUserHandler = () => {
        createUser({
            variables: {
                firstName,
                lastName,
                email,
                password
            }
        });

        if(error) {
            console.log(error)
        }
    }

    return (
        <>
            <div>
                <input type="text" placeholder='First Name' onChange={(e)=>{setFirstName(e.target.value)}} />
                <input type="text" placeholder='Last Name' onChange={(e)=>{setlastName(e.target.value)}} />
                <input type="text" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />
                <input type="text" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} />
                <button onClick={addUserHandler}>Add User</button>
            </div>
        </>
    )
}
