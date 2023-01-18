import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Box(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler(){
    setModalIsOpen(false);
  }

  return (
    <div className="box">
      <h2>{props.title}</h2>
      <div>
        <h3 className="title">{props.msg}</h3>
        <button className="boxBtn" onClick={deleteModalHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen ? <Modal onCancel={closeModalHandler}/> : null}
      {modalIsOpen ? <Backdrop onCancel={closeModalHandler}/> : null}
    </div>
  );
}

export default Box;
