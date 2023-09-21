import React, { useState } from "react";

function TodoForm() {
  const [list, setList] = useState([]);

  const [todo, setTodo] = useState("");

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedTodo = todo.trim(); // Remove leading/trailing whitespaces
    if (trimmedTodo !== "") {
      const updatedList = [...list, todo];
      setList(updatedList);
      console.log(updatedList);
      setTodo("");
    }
  }

  function handleRemove(id) {
    const updatedList = list.filter((item, i) => i !== id);
    setList(updatedList);
  }
  ////////////////////////////////////////////////////////
  function handleRemoveAll() {
    setList([]);
  }

  return (
    <>
      <body className="bg-gradient-to-r from-cyan-200 to-blue-500 ...">
        <h1 className="text-5xl font-bold m-4 text-gray-700">ToDo List</h1>
        <form className="flex-row " onSubmit={handleSubmit}>
          <input
            className="  bg-white text-cyan-500 font-extrabold"
            type="text"
            name="Task"
            id=""
            value={todo}
            placeholder="Add task"
            onChange={handleChange}
          />
          <br />
          <button
            className=" m-3 p-2 bg-orange-300 rounded-br-2xl text-xl"
            type="submit"
          >
            Add Your Task
          </button>
          <p className="text-3xl">Your Tasks:</p>

          {list.map((item, id) => (
            <div key={id}>
              <p
                key={id}
                className="mt-2 text-orange-500 text-2xl font-semibold font-sans"
              >
                {item}
              </p>
              <button
                className="m-2 p-2 bg-orange-300 rounded-br-2xl text-xs"
                onClick={(e) => handleRemove(id)}
              >
                Remove Task
              </button>
            </div>
          ))}
        </form>
        {list.length >= 1 && (
          <button
            className="m-2 p-2 bg-orange-300 rounded-br-2xl text-xl"
            onClick={handleRemoveAll}
          >
            Remove All
          </button>
        )}
      </body>
    </>
  );
}

export default TodoForm;
