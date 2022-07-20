import { Fragment, useState } from "react";
import { Modal } from "reactstrap";

const withModal = (wrappedComponents: any, name: string, key: string) => {
  function WithModal() {
    const [modalOpen, setModalOpen] = useState(false);
    function toggleModal() {
      setModalOpen(!modalOpen);
    }
    return (
      <Fragment>
        {/* Basic implementation where a single WrappedComponent is passed to withModal
        <WrappedComponent onClick={toggleModal} /> */}
        <Fragment>
          {wrappedComponents.map((Component: any, i: number) => (
            <Component key={`${key}-trigger-${i}`} onClick={toggleModal} />
          ))}
        </Fragment>
        <Modal isOpen={modalOpen} toggle={toggleModal}>
          {name} Test Modal
        </Modal>
      </Fragment>
    );
  }
  return WithModal;
};

export default withModal;
