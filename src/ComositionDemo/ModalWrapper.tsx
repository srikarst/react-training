import { Fragment, useState } from "react";
import { Modal } from "reactstrap";

export default function ModalWrapper(props: any) {
  const [modalOpen, setModalOpen] = useState(false);
  function toggleModal() {
    setModalOpen(!modalOpen);
  }
  return (
    <Fragment>
      {props.buttons?.map((Comp: any, i: number) => (
        <Comp key={`${props.key}-trigger-${i}`} onClick={toggleModal} />
      ))}
      {props.children}
      {/* Cannot pass onClick to props.children */}
      <Modal isOpen={modalOpen} toggle={toggleModal}>
        {props.name} Test Modal
      </Modal>
    </Fragment>
  );
}
