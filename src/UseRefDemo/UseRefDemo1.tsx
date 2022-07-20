import { useEffect, useRef, useState } from "react";

// Print no. of times component has rendered
export default function UseRefDemo1() {
  const [value, setValue] = useState("");
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1; // Assignments to the 'renderCount' variable from inside React Hook useEffect will be lost after each render. To preserve the value over time, store it in a useRef Hook and keep the mutable value in the '.current' property. Otherwise, you can move this variable directly inside useEffect.
  });

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div>{value}</div>
      <div>I've rendered {renderCount.current} times</div>
    </div>
  );
}
