import React, { useContext } from 'react'
import { contxt } from '../App';



const Btn = () => {
    const [login, setLogin] = useContext(contxt);
  return (
    <div>
      <button onClick={() => setLogin(!login)}>
        {login ? "Logged out" : "Logged in"}
      </button>
    </div>
  )
}

export default Btn
