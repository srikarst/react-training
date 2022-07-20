import ModalWrapper from "./ModalWrapper";

export default function CompositionDemo() {
  return (
    <div className="App">
      <ModalWrapper
        name="Srikar"
        buttons={[(props: any) => <button {...props}>Trigger1</button>]}
        id="composition_demo1"
      ></ModalWrapper>
      <ModalWrapper name="Charan" id="composition_demo2">
        <button>Trigger2</button>
      </ModalWrapper>
    </div>
  );
}
