import { ModalContainer, ModalContent } from "./style";

const Modal = ({ children, setClose }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <span className="close" onClick={() => setClose()}>
          X
        </span>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
