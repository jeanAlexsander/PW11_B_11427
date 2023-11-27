import React, { useState } from "react";

const priorities = ["Urgent", "Normal", "Biasa Saja"];

const ToDoItem = ({ item }) => (
  <div className="card mb-3" style={{ maxWidth: "350px", marginRight: "20px", marginBottom: "20px", padding: 0, border: "0.5px solid black" }}>
    <div className="card-header" style={{ backgroundColor: getPriorityColor(item.priority), color: "white" }}>
      {getPriorityLabel(item.priority)}
    </div>
    <div className="card-body">
      <h5 className="card-title">{item.namaToDoList}</h5>
      <p className="card-text">{item.note}</p>
    </div>
  </div>
);

const getPriorityColor = (priority) => {
  switch (priority) {
    case "urgent":
      return "#d73546";
    case "biasa saja":
      return "#000000"; // Warna hitam untuk priority "Biasa Saja"
    default:
      return "#238755";
  }
};

const getPriorityLabel = (priority) => {
  switch (priority) {
    case "urgent":
      return "Urgent";
    case "biasa saja":
      return "Biasa Saja";
    default:
      return "Normal";
  }
};

function Game2() {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("");
  const [note, setNote] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddToDo = (event) => {
    event.preventDefault();
    const newData = {
      namaToDoList: name,
      priority: priority,
      note: note,
    };
    setTodoList((prevData) => [...prevData, newData]);

    // Clear input fields after adding a to-do
    setName("");
    setPriority("");
    setNote("");
  };

  return (
    <div className="p-5">
      <h1 className="mb-1">Simple To-Do List</h1>
      <form className="p-1" onSubmit={handleAddToDo}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="nameInput" className="form-label text-start d-block">
                Apa yang ingin dikerjakan
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Nama To-Do List"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="customNote" className="form-label text-start d-block">
                Catatan
              </label>
              <textarea
                id="customNote"
                className="custom-textarea form-control"
                placeholder="Tulis Catatan Anda di Sini"
                style={{ resize: "vertical" }}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="prioritySelect" className="form-label text-start d-block">
                Pilih Priority
              </label>
              <select
                className="form-select form-select-sm"
                id="prioritySelect"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                required
              >
                <option disabled value="">
                  Pilih Priority
                </option>
                {priorities.map((p, index) => (
                  <option key={index} value={p.toLowerCase()}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="mb-3 text-start">
          <button type="submit" className="btn btn-primary">
            Tambah To-Do List
          </button>
        </div>
      </form>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-4">
        {todoList.map((item, index) => (
          <ToDoItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Game2;
