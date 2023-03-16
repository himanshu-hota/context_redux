import React, { useRef } from 'react';
import useUser from '../store/useUser';

const User = () => {

    const nameRef = useRef();

    //actual context state
    const user = useUser();
    
    const changeNameHandler = () => {
        const name = nameRef.current.value;
        if(name)
        user.setName(name);
    }

  return (
    <div>

        <h1>{user.name}</h1>
        <input type="text" ref={nameRef} onClick={changeNameHandler} />
        <button onClick={changeNameHandler}>Change Name</button>

    </div>
  )
}

export default User;