import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root")!;

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        background: "#00000088",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: 20,
          margin: "100px auto",
          width: 300,
        }}
      >
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

/*
🔧 How Does It Work?

-> React provides ReactDOM.createPortal() to render children into a different DOM node.


Syntax:- ReactDOM.createPortal(child, container),

-> child: JSX you want to render
-> container: DOM node where you want to render it

*/
