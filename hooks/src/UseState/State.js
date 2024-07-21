import { useRef } from 'react';

function Example() {
  const inp = useRef(null);

  const onBtnClick = () => {
    inp.current.focus();
  };

  return (
    <>
      <input ref={inp} type="text" />
      <button onClick={onBtnClick}>Focus the input</button>
    </>
  );
}
