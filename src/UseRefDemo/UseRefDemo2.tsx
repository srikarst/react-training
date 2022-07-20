import { useRef, forwardRef } from "react";

// Focus the input element when button is clicked, also a demo for ForwardRef
function InputComp(props: any, ref: any) {
  return <input ref={ref} />;
}
const InputCompWithRef = forwardRef(InputComp);

export default function UseRefDemo2() {
  const inputRef: any = useRef();

  function focus() {
    inputRef.current.focus();
  }

  return (
    <div>
      <InputCompWithRef ref={inputRef} />
      <button onClick={focus}>Focus</button>
      {/* <SomeClassComponent ref={thisRef}/> // This ref refers to 'this' of SomeClassComponent */}
    </div>
  );
}
