import React, {useRef} from 'react'
import Child from './Child'

function Parent() {
    const childRef = useRef();
  return (
    <div>
      <button onClick={() => {childRef.current.changeTheme();

        }}
      >
        Parent Button
      </button>
      <Child ref={childRef}></Child>
    </div>
  )
}

export default Parent
