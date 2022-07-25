import A1 from "./A1";
import { useDemoContext, useDemoUpdateContext } from "../contexts/DemoContext";

export default function A() {
  const contextValue = useDemoContext();
  const updateContext = useDemoUpdateContext();
  return (
    <h3>
      <button onClick={() => updateContext({ context: "changedContext" })}>
        Change context value
      </button>
      In component A with {contextValue.context}
      <A1 />
    </h3>
  );
}
