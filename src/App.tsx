import "./App.css";
import HOCDemo from "./HOCDemo";
import ComositionDemo from "./ComositionDemo";
import UseRefDemo1 from "./UseRefDemo/UseRefDemo1";
import UseRefDemo2 from "./UseRefDemo/UseRefDemo2";
import UseRefDemo3 from "./UseRefDemo/UseRefDemo3";
import UseEffectDemo from "./UseEffectDemo";
import UseContextDemo from "./UseContextDemo";

function App() {
  return (
    <div className="App">
      <HOCDemo />
      <ComositionDemo />
      <UseRefDemo1 />
      <UseRefDemo2 />
      <UseRefDemo3 />
      <UseEffectDemo />
      <UseContextDemo />
    </div>
  );
}

export default App;
