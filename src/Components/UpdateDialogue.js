import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

const UpdateDialogue = ({ isOpen, toggle, title, data, onUpdate }) => {
  const [inputData, setInputData] = useState({});
 

  useEffect(() => {
    setInputData(data || {});
  }, [data]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (!inputData.title || !inputData.desc) {
      alert("Title or Description cannot be blank");
    } else {
      if (typeof onUpdate === "function") {
        onUpdate(inputData);
      }
    }
  };

  return (
    <Modal show={isOpen} onHide={toggle}>
      <Modal.Header closeButton>
        <Modal.Title>Edit {title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Todo Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={inputData.title || ""}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Todo Description</label>
            <input
              type="text"
              name="desc"
              className="form-control"
              value={inputData.desc || ""}
              onChange={handleInput}
            />
          </div>
          <Button type="submit" variant="danger">Update</Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggle}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateDialogue;
