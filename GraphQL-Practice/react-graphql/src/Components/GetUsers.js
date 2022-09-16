import React, {useEffect} from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_USERS } from '../GraphQL/Query'

export function GetUsers(props) {
    
    const {error, loading, data} = useQuery(LOAD_USERS);

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <>
            <div>
                {
                    data && data.getAllUsers.map((user)=> {
                        return (
                            <div>
                                <div> {user.id} </div>
                                <div> {user.firstName} </div>
                                <div> {user.lastName} </div>
                                <div> {user.password} </div>
                                <br/>
                            </div>
                            
                        )
                    })
                }
            </div>
        </>
    )
}
