import React from 'react';
import { useSelector } from 'react-redux';
const Comp1 = () => {

    const name = useSelector(state => state.user.name);

  return (
    <>
        <h1>Inside Comp1</h1>
        <p>{name}</p>
    </>
  )
}

export default Comp1;