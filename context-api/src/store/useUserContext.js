import { useState } from 'react';

const useUserContext = () => {
    const [name, setName] = useState('Babban Billo');

    const changeName = (newName) => {
        setName(newName);
    }

    const store = {
        name,
        setName: changeName
    }

  return store;
}

export default useUserContext;