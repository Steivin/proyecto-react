import { useRef } from 'react';

function Useref() {
  const inputRef = useRef(null);

  const enfocar = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={enfocar}>Enfocar input</button>
    </div>
  );
}
export default Useref;