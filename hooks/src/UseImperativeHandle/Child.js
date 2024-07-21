import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Child = forwardRef((props, ref) => {
    const [toggleTheme, setToggleTheme] = useState(false);
    
    useImperativeHandle(ref, () => ({
        changeTheme() { 
            setToggleTheme(!toggleTheme);
        },
    })); 

  return (
    <div>
      <button>Child Button</button>
      {toggleTheme ? "Dark" : "Light"}
    </div>
  )
});

export default Child



