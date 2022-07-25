import DemoProvider from "../contexts/DemoContext";
import A from "./A";
export default function UseContextDemo() {
  return (
    <DemoProvider>
      <A />
    </DemoProvider>
  );
}
