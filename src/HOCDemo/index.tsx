import withModal from "./withModal";

export default function HOCDemo() {
  const Wrapped1 = withModal(
    [
      (props: any) => <button {...props}>Trigger1</button>,
      (props: any) => <button {...props}>Trigger2</button>,
    ],
    "Srikar",
    "hoc_demo1"
  );
  // Basic implementation where a single WrappedComponent is passed to withModal
  // const Wrapped2 = withModal(
  //   (props) => <button {...props}>Trigger2</button>,
  //   "Charan","hoc_demo2"
  // );
  return <div className="App">{<Wrapped1 />}</div>;
}
