import React, { useLayoutEffect, useRef } from 'react';

function LayoutEffect() {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.backgroundColor = 'lightpink';
    }
  }, []); // Runs only once after the first render

  return (
    <div ref={boxRef} style={{ width: '80px', height: '80px', backgroundColor: 'darkblue' }}>
      Box
    </div>
  );
}
export default LayoutEffect;
