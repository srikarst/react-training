import { DemoContext } from "../contexts/DemoContext";

export default function A1() {
  return (
    <DemoContext.Consumer>
      {(value) => <h3>In component A1 with {value.context}</h3>}
    </DemoContext.Consumer>
  );
}
