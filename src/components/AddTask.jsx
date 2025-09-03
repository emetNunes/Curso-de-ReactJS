import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isHabit, setHabit] = useState(false);

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md flex flex-col shadow">
      <Input
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />

      <Input
        type="text"
        placeholder="Digite a descrição"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />

      <div>
        {/* <Input
          checked={isHabit}
          onChange={() => {
            setHabit(!isHabit);
          }}
          value={isHabit}
          type="checkbox"
        />
        <label className="pl-1 text-slate-500 text-w">
          Essa tarefa é um habito?
        </label> */}
      </div>
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preecha o titulo e a descrição da tarefa.");
          }

          onAddTaskSubmit(title, description, isHabit);
          setTitle("");
          setHabit(false);
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
