import React from 'react';
import useUser from '../store/useUser';


const Comp2 = () => {

    const user = useUser();

    return (
        <>
            <h1>Inside Comp2</h1>
            <p>{user.name}</p>
        </>
    )
}

export default Comp2;