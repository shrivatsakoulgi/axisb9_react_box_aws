function Modal(props) {
  return (
    <div className="modal">
      <h4>Are you Sure?</h4>
      <button className="btn2" onClick={props.onCancel}>Cancel</button>
      <button className="btn">Confirm</button>
    </div>
  );
}

export default Modal;
