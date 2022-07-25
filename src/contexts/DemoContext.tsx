import { createContext, useContext, useState } from "react";

type updateContext = (val: any) => void;

export const DemoContext = createContext({ context: "defaultContext" });
export const DemoUpdateContext = createContext((() => {}) as updateContext);

export const useDemoContext = () => useContext(DemoContext);
export const useDemoUpdateContext = () => useContext(DemoUpdateContext);

export default function DemoProvider({ children }: any) {
  const [demoValue, setDemoValue] = useState({ context: "initContext" });
  function updateDemoValue(val: any) {
    setDemoValue(val);
  }
  return (
    <DemoContext.Provider value={demoValue}>
      <DemoUpdateContext.Provider value={updateDemoValue}>
        {children}
      </DemoUpdateContext.Provider>
    </DemoContext.Provider>
  );
}
