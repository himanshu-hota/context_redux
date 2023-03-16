import React, { createContext } from 'react';
import useUserContext from './useUserContext';


const initialState = {
    name:'Babban billo',
    changeName:() => {}
}

export const UserContext = createContext(initialState);

const UserContextProvider = (props) => {

    const user = useUserContext();
   

  return <UserContext.Provider value={user}>
    {props.children}
  </UserContext.Provider>
}


export default UserContextProvider;