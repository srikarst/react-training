import { useEffect, useRef, useState } from "react";

// Store prev state value in ref and display
export default function UseRefDemo3() {
  const [name, setName] = useState("Srikar");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {`Current name is ${name}, Previous name is ${prevName.current}`}
    </div>
  );
}
