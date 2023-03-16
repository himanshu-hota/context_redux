import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from './app/userSlice';

const User = () => {

    const nameRef = useRef();
    const dispatch = useDispatch();
    const name = useSelector(state => state.user.name);

    const changeNameHandler = () => {
        const userName = nameRef.current.value;
        dispatch(setName(userName));
    }

    

  return (
    <>
        <div className="userProfile">

            <h1>{name}</h1>
            <input type="text" ref={nameRef} />
            <button onClick={changeNameHandler}>Change Name</button>

        </div>
    </>
  )
}

export default User;