import React, { useState } from 'react'

export const contxt = React.createContext(); 

const Context = () => { 
    const [signedIn, setSıgnedIn] = useState(false);

  return (
    <contxt.Provider value={[signedIn, setSıgnedIn]}>
        <Nav />
        <h1>{signedIn ? "Signed In" : "Signet Out"}</h1>
    </contxt.Provider>
  )
}

export default Context
