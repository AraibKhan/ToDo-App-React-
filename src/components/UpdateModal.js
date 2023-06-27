import ReactDOM from "react-dom";
import Header from "./Header";
import { useState } from "react";

const UpdateModal = ({ closeModal, task, updateTitle }) => {
  const [updatedTitle, setUpdatedTitle] = useState(task.title);

  const submitHandler = (e) => {
    e.preventDefault();

    updateTitle(updatedTitle);
    closeModal();
  };

  return ReactDOM.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">
        <Header />
        <form className="modal-form" onSubmit={submitHandler}>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <div className="modal-actions">
            <button type="reset" className="cancel-btn" onClick={closeModal}>
              Cancel
            </button>
            <button type="submit" className="update-btn">
              Update
            </button>
          </div>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default UpdateModal;
