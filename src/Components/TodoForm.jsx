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
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2430.jpg?size=626&ext=jpg&ga=GA1.2.330349178.1694695814&semt=ais')",
        }}
      >
        <h1 className="text-5xl font-bold mb-2 text-gray-700">ToDo List</h1>
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
          <p className="text-4xl font-thin">Your Tasks:</p>

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
      </div>
    </>
  );
}

export default TodoForm;
