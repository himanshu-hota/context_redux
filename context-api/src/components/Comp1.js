import React from 'react';
import useUser from '../store/useUser';


const Comp1 = () => {

    const user = useUser();

  return (
    <>
        <h1>Inside Comp1</h1>
        <p>{user.name}</p>
    </>
  )
}

export default Comp1;